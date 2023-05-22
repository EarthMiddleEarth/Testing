import pytest

@pytest.mark.regression
def test_regression():
    print('Test1')

@pytest.mark.xfail
def test_regression2():
    print('Test2')