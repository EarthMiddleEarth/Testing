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
        pageUrl = "https://demo.automationtesting.in/Alerts.html"


        driver=self.driver
        driver.maximize_window()
        driver.get(pageUrl)



        # Alert
        driver.find_element('id',"OKTab").click()

        # ok - accept
        time.sleep(2)
        driver.switch_to.alert.accept()

        time.sleep(2)

        # confirmation
        driver.find_element('xpath',".//a[@href='#CancelTab']").click()
        driver.find_element('id',"CancelTab").click()
        time.sleep(2)
        driver.switch_to.alert.dismiss()
        time.sleep(2)

        # text box
        driver.find_element('xpath',".//a[@href='#Textbox']").click()
        driver.find_element('id',"Textbox").click()

        text = driver.switch_to.alert.text

        print(text)

        time.sleep(2)
        driver.switch_to.alert.send_keys("Passon S.")
        time.sleep(2)
        driver.switch_to.alert.accept()

        






        assert True




    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
