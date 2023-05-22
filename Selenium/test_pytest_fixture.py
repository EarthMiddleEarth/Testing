import pytest

from selenium import webdriver
# from selenium.webdriver import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

@pytest.fixture(scope="function")
def launchBrowser():
    chr_options=Options()
    chr_options.add_experimental_option("detach",True)
    global driver
    driver = webdriver.Chrome(options=chr_options)
    yield
    driver.quit()

@pytest.fixture(scope="class")
def launchBrowserclass(request):
    chr_options=Options()
    chr_options.add_experimental_option("detach",True)
    global driver
    request.cls.driver = webdriver.Chrome(options=chr_options)
    yield
    request.cls.driver.quit()

def test_printURL(launchBrowser):
    driver.get("https://www.google.com/")
    print(driver.current_url)

@pytest.mark.usefixtures("launchBrowserclass")
class Test_youtube:
    def test_printURL(self):
        self.driver.get("https://www.youtube.com/")
        print(self.driver.current_url)