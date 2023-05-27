*** Settings ***
Documentation    XXXXXXX
Library    SeleniumLibrary



*** Test Cases ***
Argument demo keyword test
    Argument demo keyword    text1    text2

*** Keywords ***

Argument demo keyword
    [Arguments]    ${arg1}    ${arg2}
    Log    ${arg1}
    Log    ${arg2}


