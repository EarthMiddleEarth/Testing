*** Settings ***
Documentation    XXXXXXX


Resource     HeaderPage.robot
Resource    SearchResultPage.robot

Library    SeleniumLibrary

Test Setup    Start Test Case
Test Teardown    End Test Case


*** Variables ***
${ebay_homepage}    https://www.ebay.com

*** Test Cases ***
Verify basic search functionality for ebay 
    [Documentation]    This test case verifies the basic search
    [Tags]    Functional

    # Verify Search Results
    # Main Test Case
    HeaderPage.Input Search Text and Click Search    mobile
    SearchResultPage.Verify Search Result    mobile

    # Input Text    xpath:input#gh-ac    mobile
    # Press Keys    xpath://input[@id='gh-bth']    RETURN



Verify advanced search functionality
    [Documentation]     This test case verifies the advanced search
    [Tags]    Functional

    HeaderPage.Click On Advanced Search Link

Verify Link Text Clicking
    [Documentation]     This test case verifies Link Text Clicking
    [Tags]    Functional
    HeaderPage.Click On Link Text    Sell



*** Keywords ***
Start Test Case
    Open Browser    ${ebay_homepage}    Chrome
    Maximize Browser Window

# Main Test Case
#     Input Text    css:input#gh-ac    mobile
#     Press Keys    css:input#gh-btn    RETURN
#     Page Should Contain    results for mobile 
#     Sleep    10s

End Test Case 
    Close All Browsers