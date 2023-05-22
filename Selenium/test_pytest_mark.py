import pytest

@pytest.mark.regression
def test_regression():
    print('Test1')
    # assert 4==4

@pytest.mark.xfail
def test_regression2():
    print('Test2')
    assert 4==5

@pytest.mark.sanity
def test_regression2():
    print('Test3')
    # assert 4==5    