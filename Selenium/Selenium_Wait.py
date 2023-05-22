import unittest
import pytest
import time
from selenium import webdriver
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class InputFormsCheck(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_singleInputField(self):
        # pageUrl = "http://www.seleniumeasy.com/test/basic-first-form-demo.html"
        pageUrl = "https://demo.automationtesting.in"


        driver=self.driver
        driver.maximize_window()
        driver.get(pageUrl)
        

        # login page 
        driver.find_element('id',"email").send_keys("sbjksdnfk@gmail.com")
        driver.find_element('id',"enterimg").click()

        # wait sleep
        
        # time.sleep(2)
        # driver.implicitly_wait(2)
        # driver.find_element('xpath',".//input[@placeholder='First Name']").send_keys("Anna Johnson")
        wait = WebDriverWait(driver,5)
        WebDriverWait(driver,5).until(EC.visibility_of_element_located(('xpath',".//input[@placeholder='First Name']"))).send_keys("Anna Johnson")




        assert True




    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
