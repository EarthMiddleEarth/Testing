*** Settings ***
Library    SeleniumLibrary  implicit_wait=2
Library    XML

Documentation  This is hello.robot test
Test Setup    Open Chrome Browser
Test Teardown  Close Chrome Browser


*** Test Cases ***
 Title Name Should Be ก๋วยเตี๋ยวพูนใจ
    SeleniumLibrary.Element Text Should Be    //mat-toolbar    ก๋วยเตี๋ยวพูนใจ

Order List Should Show Greater Than Or Equal To 3 and Less Than Or Equal To 5
    ${count}=  SeleniumLibrary.Get Element Count  css:div.ordered
    Should Be True  ${count} >=3
    Should Be True  ${Count} <=5

Order Button Is Ok
    SeleniumLibrary.Element Text Should Be    //button    สั่ง

Ordered List Should Increase 1 After Click Order Button
    ${beforCount}=  SeleniumLibrary.Get Element Count    css:div.ordered

    Wait Until Keyword Succeeds      5x     10s      Click Element    //*[@id='ax']
    
    # Click Button       //button
    ${afterCount}=  SeleniumLibrary.Get Element Count    css:div.ordered
    Should Be True  ${afterCount} - ${beforCount} == 1


*** Keywords ***
Open Chrome Browser
    Open Browser    http://localhost:4200/    Chrome
    Maximize Browser Window
Close Chrome Browser
    Close Browser

# Click Element Wait
#     [Arguments]    ${locator}=required    ${timeout}=2    ${mustWait}=False
#     Wait Until Element Is Visible    ${locator}    ${timeout}
#     Wait Until Element Is Enabled    ${locator}    ${timeout}
#     Run Keyword If    $mustWait == True    Sleep    1s
#     Click Element    ${locator}