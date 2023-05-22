import unittest
import pytest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait # this is implicit wait that direct selenium for certain class/object to load before throwing an exception
from selenium.webdriver.support import expected_conditions as EC # expectation that all conditions are True
import time

class InputFormsCheck(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_singleInputField(self):
        # pageUrl = "http://www.seleniumeasy.com/test/basic-first-form-demo.html"
        pageUrl = "http://localhost:4200/"


        driver=self.driver
        driver.maximize_window()
        driver.get(pageUrl)

        #Finding "Single input form" input text field by id. And sending keys(entering data) in it.
        # eleUserMessage = driver.find_element("xpath","//*[@id='user-message']")
        # eleUserMessage.clear()
        # eleUserMessage.send_keys("Test Python")

        # #Finding "Show Your Message" button element by css selector using both id and class name. And clicking it.
        # eleShowMsgBtn=driver.find_element_by_css_selector('#get-input > .btn')
        # eleShowMsgBtn.click()

        # #Checking whether the input text and output text are same using assertion.
        # eleYourMsg=driver.find_element_by_id("display")
        # assert "Test Python" in eleYourMsg.text
        WebDriverWait(driver,5).until(EC.element_to_be_clickable(('id', 'ax'))).click()
        driver.find_element('xpath',"//*[@id='ax']").click()
        driver.find_element('xpath',"//*[@id='ax']").click()  
        assert True




    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()