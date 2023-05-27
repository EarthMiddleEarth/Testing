*** Settings ***
Library    SeleniumLibrary

Test Setup    Start Test Case    ${automationTestStore_url}
Test Teardown    End Test Case

*** Variables ***
${automationTestStore_url}    https://www.automationteststore.com/

*** Test Cases ***
Verify Availability of The Site
    Page Should Contain    Automation Test Store
Clicking To ContactUs Page
    Click Element    xpath://a[text()='Contact Us']

*** Keywords ***
Start Test Case   
    [Arguments]   ${url}
    Open Browser    ${url}    Chrome
End Test Case
    Close All Browsers