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
        pageUrl = "https://demo.automationtesting.in/Register.html"


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

        radiobutton = driver.find_element('xpath',".//input[@value='FeMale']")
        radiobutton.click()

        checkbox = driver.find_elements('xpath',".//input[@type='checkbox']")
        
        for ele in checkbox:
            if ele.get_attribute('value') == 'Movies':
                ele.click()


        skill=driver.find_element("xpath",".//select[@id='Skills']")
        sel = Select(skill)
        sel.select_by_index(5)
        sel.select_by_value("C")
        sel.select_by_visible_text("Android")


        driver.get('https://www.google.com/')

        driver.back()

        driver.refresh()


        # Alert
        # driver.find_element('xpath',".//*[text()='SwitchTo']")
        swto = driver.find_elements('xpath',".//*[@class='dropdown']")
        driver.find_element('id',"OKTab").click()

        # ok - accept

        driver.switch_to.alert.accept()

        time.sleep(2)
        






        assert True




    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
