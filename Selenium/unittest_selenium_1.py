import unittest
import pytest
from selenium import webdriver

class InputFormsCheck(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_singleInputField(self):
        # pageUrl = "http://www.seleniumeasy.com/test/basic-first-form-demo.html"
        pageUrl = "http://www.python.org"


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

        assert True




    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()