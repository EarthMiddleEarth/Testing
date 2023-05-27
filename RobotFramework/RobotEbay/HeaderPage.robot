*** Settings ***
Documentation    XXXXXXX
Library    SeleniumLibrary
Variables    WebElementEbay.py


*** Variables ***
${ebay_homepage}    https://www.ebay.com
# ${search_text}    mobile
# @{search_text}=    mobile    travel    robot    gifts
# &{search_text2}=    abc=book    bcd=travel
# &{DICTIONARY}=              string=${STRING}    number=${NUMBER}    list=@{LIST}


*** Keywords ***

Input Search Text and Click Search
    # Input Text    css:input#gh-ac    @{search_text}[0]
    [Arguments]    ${search_text2}
    Input Text    ${HomePageSearchTextBox}    ${search_text2}
    Press Keys    ${HomePageSearchButton}    RETURN

Click On Advanced Search Link
    Click Element    ${HomePageAdvancedSearchLink}

Click On Link Text
    [Arguments]    ${link_text}
    Click Link    link:${link_text}
    Sleep    4s
