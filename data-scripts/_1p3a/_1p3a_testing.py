import os
import csv
import pytz
import json
from datetime import datetime, timedelta

import requests
import pandas as pd
import geopandas as gpd

dir_path = os.path.dirname(os.path.realpath(__file__))
repo_root = os.path.abspath(os.path.join(dir_path, '..', '..'))

def fetch_testing_data():
    out = open(os.path.join(repo_root, 'docs/last_update_testing.txt'), 'w')
    now = datetime.now()
    out.write(now.strftime("%d/%m/%Y %H:%M:%S"))
    out.close()

    url = 'https://instant.1point3acres.com/v1/api/coronavirus/us/cases?token=PFl0dpfo'
    response = urllib.request.urlopen(url)
    cr = csv.reader(io.TextIOWrapper(response))

    with io.open('county_hist.csv', 'w', encoding='utf-8') as file:
        data = response.read()
        text = data.decode('utf-8')
        file.write(text)


    with open("cases.csv") as csvfile:
        cr = csv.reader(csvfile)
        read_covid_data(cr)
    
def read_testing_data(cr):

    state_count = {}
    state_deathcount = {}

    county_count = {}
    county_deathcount = {}

    date_state_count = {}
    date_state_deathcount = {}

    date_county_count = {}
    date_county_deathcount = {}

    # case_id, confirmed_date,state_name,county_name,confirmed_count,death_count
    next(cr)
    i = 0
    for row in cr:
        if len(row) ==0:
            continue

        i += 1
        case_id, confirmed_date,state_name,county_name,confirmed_count,death_count = row[:6]
        confirmed_count = (int)(confirmed_count)
        death_count = (int)(death_count)

        if state_name not in state_count:
            state_count[state_name] = 0
            state_deathcount[state_name] = 0
        state_count[state_name] += confirmed_count
        state_deathcount[state_name] += death_count

        county_name = county_name.encode('ascii', 'ignore').decode("utf-8")
        county_name = county_name.strip().lower() + state_name.strip().lower()    
def calc_positivity():
    
def update_state_geojson(state_test, state_positivity, date_state_test, date_state_positivity):
    with open(os.path.join(repo_root, "docs/states_update.geojson")) as f:
        geojson = json.load(f)
        features = geojson["features"]
        for feat in features:
            state_id = feat["properties"]["STUSPS"]

            if state_id in state_test:
                feat["properties"]["confirmed_count"] = state_count[state_id]
            else:
                feat["properties"]["confirmed_count"] = 0

            if state_id in state_positivity:
                feat["properties"]["death_count"] = state_deathcount[state_id]
            else:
                feat["properties"]["death_count"] = 0

            for dat in date_state_test.keys():
                cnt = 0 if state_id not in date_state_count[dat] else date_state_count[dat][state_id]
                col_name = "t" + dat
                feat["properties"][dat] = cnt

            for dat in date_state_positivity.keys():
                cnt = 0 if state_id not in date_state_deathcount[dat] else date_state_deathcount[dat][state_id]
                col_name = "tpos" + dat
                feat["properties"][col_name] = cnt
                
        with open('states_update.geojson'), 'w') as outfile:
            json.dump(geojson, outfile)

    
def update_county_geojson(county_test, county_positivity, date_county_test, date_county_positivity):
    with io.open(os.path.join(repo_root, "data/county_2018.geojson"), 'r', encoding='utf-8') as f:
    #with open("..data/county_2018.geojson") as f:
        geojson = json.load(f)
        features = geojson["features"]
        county_id_dict = {}

        i = 0
        for feat in features:
            i += 1
            county_id = feat["properties"]["NAME"].lower() + feat["properties"]["state_abbr"].lower()
            county_id_dict[county_id] = 1
            if county_id in county_count:
                feat["properties"]["confirmed_count"] = county_count[county_id]
            else:
                feat["properties"]["confirmed_count"] = 0

            if county_id in county_deathcount:
                feat["properties"]["death_count"] = county_deathcount[county_id]
            else:
                feat["properties"]["death_count"] = 0

            for dat in date_county_count.keys():
                cnt = 0 if county_id not in date_county_count[dat] else date_county_count[dat][county_id]
                feat["properties"][dat] = cnt

            for dat in date_county_deathcount.keys():
                cnt = 0 if county_id not in date_county_deathcount[dat] else date_county_deathcount[dat][county_id]
                col_name = "d" + dat
                feat["properties"][col_name] = cnt

        update_county_population(geojson)
        update_county_beds(geojson)

        with open(os.path.join(repo_root, 'docs/counties_update.geojson'), 'w') as outfile:
            json.dump(geojson, outfile)

        # check input county
        with io.open('unmatched.txt', 'w', encoding='utf-8') as o:
            for ct in county_count.keys():
                if ct not in county_id_dict:
                    if 'unknown' in ct or 'unassigned' in ct or 'princess' in ct or 'out-of-state' in ct or 'out of state' in ct:
                        continue
                    else:
                        o.write(ct + '\n')
    
def create_geojson_files(month_day):
    county_geom = gpd.read_file(os.path.join(repo_root, 'docs/county_usfacts.geojson'))

    for dataset in ['confirmed', 'deaths']:
        data  = pd.read_csv(os.path.join(repo_root, 'docs/covid_{}_usafacts.csv'.format(dataset)))
        county_geom['GEOID']  = county_geom['GEOID'].apply(lambda x: str(x).zfill(5))
        county_geom['GEOID'] = county_geom['GEOID'].astype(str)
        data['countyFIPS']  = data.countyFIPS.apply(lambda x: str(x).zfill(5))
        data['countyFIPS'] = data['countyFIPS'].astype(str)
        data_geom = county_geom.merge(data, left_on='GEOID', right_on='countyFIPS', how='left')
        data_geom = data_geom.fillna(0)
        for column in data_geom.columns:
            if '/' in column:
                data_geom[column] = data_geom[column].astype(int)
        save_path = os.path.join(repo_root, 'download/usafacts_{}_{}.geojson'.format(dataset, month_day))
        data_geom.to_file(save_path, driver='GeoJSON')
    
