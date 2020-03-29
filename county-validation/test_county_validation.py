import county_validation as cv
import pdb


def test_my_mode():
    assert cv.get_mode_and_valid_score(3, 1, 2)[0] == 2
    assert cv.get_mode_and_valid_score(3, 2, 2)[0] == 2


def test_do_validation():
    (cases_1, deaths_1) = cv.get_wide_df_from_1p3a()
    cases_2 = cases_1.copy()
    cases_2.iloc[0, 0] = cases_2.iloc[0, 0] + 1
    assert cases_2.iloc[0, 0] != cases_1.iloc[0, 0]
    cases_3 = cases_2.copy()
    cases_3.iloc[0, 1] = cases_3.iloc[0, 1] + 1

    cases, cases_valid = cv.do_validation([cases_1, cases_2, cases_3])

    assert cases.iloc[0, 0] == cases_2.iloc[0, 0]
    assert cases.iloc[0, 1] == cases_2.iloc[0, 1]

    assert cases_valid.iloc[0, 0] == 2 / 3
    assert cases_valid.iloc[0, 1] == 1 / 3
    assert cases_valid.iloc[0, 2] == 1
