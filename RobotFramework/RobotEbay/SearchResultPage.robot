*** Settings ***
Documentation    XXXXXXX
Library    SeleniumLibrary
# Resource    HeaderPage.robot

*** Variables ***
${search_result} =     results for 

*** Keywords ***

Verify Search Result
    [Arguments]    ${search_text2}
    Page Should Contain    ${search_result} ${search_text2}

End Test Case 
    Close All Browsers