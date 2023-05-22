import unittest
import pytest
import time
from selenium import webdriver
from selenium.webdriver.support.select import Select

class InputFormsCheck(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_singleInputField(self):
        # pageUrl = "http://www.seleniumeasy.com/test/basic-first-form-demo.html"
        pageUrl = "https://demo.automationtesting.in/Windows.html"


        driver=self.driver
        driver.maximize_window()
        driver.get(pageUrl)
        
        # assign current window as a parrent window
        orgwindow = driver.current_window_handle
        print(orgwindow)

        driver.find_element('xpath',".//a[@href='http://www.selenium.dev']").click()

        # all window
        windows=driver.window_handles

        # switch to child windows
        for win in windows:
            if win!=orgwindow:
                driver.switch_to.window(win)

# do action in child window
        driver.find_element('xpath',".//span[contains(text(),'Downloads')]").click()
        driver.close()
        driver.switch_to.window(orgwindow)
        driver.find_element('xpath',".//a[@href='http://www.selenium.dev']").click()



        assert True




    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
