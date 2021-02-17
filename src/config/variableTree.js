export const variableTree = {
    "HEADER:cases":{},
    "Confirmed Count": {
        "County": {
            "1point3acres": {
                "geojson":'county_1p3a.geojson',
                "csv":['covid_confirmed_1p3a']
            },
            "USA Facts": {
                "geojson":'county_usfacts.geojson',
                "csv":['covid_confirmed_usafacts'] 
            },
            "New York Times": {
                "geojson":'county_nyt.geojson',
                "csv":['covid_confirmed_nyt']  
            }
        },
        "State": {
            "1point3acres": {
                "geojson":'state_1p3a.geojson',
                "csv":['covid_confirmed_1p3a_state']
            },
            "New York Times": {
                "geojson":'state_nyt.geojson',
                "csv":['covid_confirmed_nyt_state']
            }, 
        }
    },
    "Confirmed Count per 100K Population":{
        "County": {
            "1point3acres": {
                "geojson":'county_1p3a.geojson',
                "csv":['covid_confirmed_1p3a']
            },
            "USA Facts": {
                "geojson":'county_usfacts.geojson',
                "csv":['covid_confirmed_usafacts'] 
            },
            "New York Times": {
                "geojson":'county_nyt.geojson',
                "csv":['covid_confirmed_nyt']  
            }
        },
        "State": {
            "1point3acres": {
                "geojson":'state_1p3a.geojson',
                "csv":['covid_confirmed_1p3a_state']
            },
            "New York Times": {
                "geojson":'state_nyt.geojson',
                "csv":['covid_confirmed_nyt_state']
            }, 
        }
    },
    "Confirmed Count per Licensed Bed":{
        "County": {
            "1point3acres": {
                "geojson":'county_1p3a.geojson',
                "csv":['covid_confirmed_1p3a']
            },
            "USA Facts": {
                "geojson":'county_usfacts.geojson',
                "csv":['covid_confirmed_usafacts'] 
            },
            "New York Times": {
                "geojson":'county_nyt.geojson',
                "csv":['covid_confirmed_nyt']  
            }
        },
        "State": {
            "1point3acres": {
                "geojson":'state_1p3a.geojson',
                "csv":['covid_confirmed_1p3a_state']
            },
            "New York Times": {
                "geojson":'state_nyt.geojson',
                "csv":['covid_confirmed_nyt_state']
            }, 
        }
    },
    "HEADER:deaths":{},
    "Death Count":{
        "County": {
            "1point3acres": {
                "geojson":'county_1p3a.geojson',
                "csv":['covid_deaths_1p3a']
            },
            "USA Facts": {
                "geojson":'county_usfacts.geojson',
                "csv":['covid_deaths_usafacts'] 
            },
            "New York Times": {
                "geojson":'county_nyt.geojson',
                "csv":['covid_deaths_nyt']  
            }
        },
        "State": {
            "1point3acres": {
                "geojson":'state_1p3a.geojson',
                "csv":['covid_deaths_1p3a_state']
            },
            "New York Times": {
                "geojson":'state_nyt.geojson',
                "csv":['covid_deaths_nyt_state']
            }, 
        }
    },
    "Death Count per 100K Population": {
        "County": {
            "1point3acres": {
                "geojson":'county_1p3a.geojson',
                "csv":['covid_deaths_1p3a']
            },
            "USA Facts": {
                "geojson":'county_usfacts.geojson',
                "csv":['covid_deaths_usafacts'] 
            },
            "New York Times": {
                "geojson":'county_nyt.geojson',
                "csv":['covid_deaths_nyt']  
            }
        },
        "State": {
            "1point3acres": {
                "geojson":'state_1p3a.geojson',
                "csv":['covid_deaths_1p3a_state']
            },
            "New York Times": {
                "geojson":'state_nyt.geojson',
                "csv":['covid_deaths_nyt_state']
            }, 
        }
    },
    "Death Count / Confirmed Count": {
        "County": {
            "1point3acres": {
                "geojson":'county_1p3a.geojson',
                "csv":['covid_deaths_1p3a', 'covid_confirmed_1p3a']
            },
            "USA Facts": {
                "geojson":'county_usfacts.geojson',
                "csv":['covid_deaths_usafacts', 'covid_confirmed_usafacts'] 
            },
            "New York Times": {
                "geojson":'county_nyt.geojson',
                "csv":['covid_deaths_nyt', 'covid_confirmed_nyt']  
            }
        },
        "State": {
            "1point3acres": {
                "geojson":'state_1p3a.geojson',
                "csv":['covid_deaths_1p3a_state', 'covid_confirmed_1p3a_state']
            },
            "New York Times": {
                "geojson":'state_nyt.geojson',
                "csv":['covid_deaths_nyt_state', 'covid_confirmed_nyt_state']
            }, 
        }
    },
    "HEADER:testing":{},
    "7 Day Testing Positivity Rate %":{
        "County": {
            "CDC": {
                "geojson": "cdc.geojson",
                "csv": ["covid_wk_pos_cdc"],
            }
        },
        "State": {
            "1point3acres": {
                "geojson":'state_1p3a.geojson',
                "csv":['covid_wk_pos_1p3a_state']
            },
        }
    },
    "7 Day Testing Capacity":{
        "County": {
            "CDC": {
                "geojson": "cdc.geojson",
                "csv": ["covid_tcap_cdc"],
            }
        },
        "State": {
            "1point3acres": {
                "geojson":'state_1p3a.geojson',
                "csv":['covid_tcap_1p3a_state']
            },
        }
    },
    "HEADER:vaccination":{},
    "Vaccinations Administered per 100K Population":{
        "State": {
            "CDC": {
                "geojson": "state_1p3a.geojson",
                "csv": ["vaccine_admin_cdc_1p3a_state"],
            }
        },
    },
    "Vaccinations Distributed per 100K Population":{
        "State": {
            "CDC": {
                "geojson": "state_1p3a.geojson",
                "csv": ["vaccine_dist_cdc_1p3a_state"],
            }
        },
    },
    // "HEADER:forecasting":{},
    // "Forecasting (5-Day Severity Index)":{
    //     "County": {
    //         "Yu Group at Berkeley": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['berkeley_predictions']
    //         }
    //     }
    // },
    "HEADER:community health information":{},
    "Uninsured %": {
        "County": {
            "County Health Rankings": {
                "geojson":'county_usfacts.geojson',
                "csv":['chr_health_factors']
            }
        },
        "State": {
            "County Health Rankings": {
                "geojson":'state_1p3a.geojson',
                "csv":['chr_health_factors_state']
            }
        }
    },
    "Over 65 Years %": {
        "County": {
            "County Health Rankings": {
                "geojson":'county_usfacts.geojson',
                "csv":['chr_health_context']
            }
        },
        "State": {
            "County Health Rankings": {
                "geojson":'state_1p3a.geojson',
                "csv":['chr_health_context_state']
            }
        }
    },
    "Life Expectancy": {
        "County": {
            "County Health Rankings": {
                "geojson":'county_usfacts.geojson',
                "csv":['chr_life']
            }
        },
        "State": {
            "County Health Rankings": {
                "geojson":'state_1p3a.geojson',
                "csv":['chr_life']
            }
        }
    },
    "HEADER:mobility":{},
    // "Incoming Mobility": {
    //     "County": {
    //         "COVID Exposure Indices": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_LEX_in']
    //         }
    //     }
    // },
    // "Outgoing Mobility": {
    //     "County": {
    //         "COVID Exposure Indices": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_LEX_out']
    //         }
    //     }
    // },
    // "Incoming Mobility Normalized": {
    //     "County": {
    //         "COVID Exposure Indices": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_LEX_in']
    //         }
    //     }
    // },
    // "Outgoing Mobility Normalized": {
    //     "County": {
    //         "COVID Exposure Indices": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_LEX_out']
    //         }
    //     }
    // },
    // "POI Visits": {
    //     "County": {
    //         "Safegraph": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_POI_visits']
    //         }
    //     }
    // },
    // "POI Visits Normalized": {
    //     "County": {
    //         "Safegraph": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_POI_visits']
    //         }
    //     }
    // },
    // "Percent Home vs 2019": {
    //     "County": {
    //         "Safegraph": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_POI_visits']
    //         }
    //     }
    // },
    // "Percent Part Time vs 2019": {
    //     "County": {
    //         "Safegraph": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_POI_visits']
    //         }
    //     }
    // },
    // "Percent Full Time vs 2019": {
    //     "County": {
    //         "Safegraph": {
    //             "geojson":'county_usfacts.geojson',
    //             "csv":['county_POI_visits']
    //         }
    //     }
    // },
    "Percent Home on Workdays": {
        "County": {
            "Safegraph": {
                "geojson":'county_usfacts.geojson',
                "csv":['county_POI_visits']
            }
        }
    },
    "Percent Part Time on Workdays": {
        "County": {
            "Safegraph": {
                "geojson":'county_usfacts.geojson',
                "csv":['county_POI_visits']
            }
        }
    },
    "Percent Full Time on Workdays": {
        "County": {
            "Safegraph": {
                "geojson":'county_usfacts.geojson',
                "csv":['county_POI_visits']
            }
        }
    },
    "Percent Delivery on Workdays": {
        "County": {
            "Safegraph": {
                "geojson":'county_usfacts.geojson',
                "csv":['county_POI_visits']
            }
        }
    },
}