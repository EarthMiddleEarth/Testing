from selenium import webdriver

driver = webdriver.Chrome()


driver.get("https://web.facebook.com/?_rdc=1&_rdr")

username = driver.find_element("id","email")
username.send_keys("earth_tm@hotmail.com")
password = driver.find_element("id","pass")
password.send_keys("XXX")
driver.find_element("name","login").click()
# vegetable = driver.find_element(By.CLASS_NAME, "tomatoes") 
  