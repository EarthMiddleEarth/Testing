*** Settings ***
Library    SeleniumLibrary




*** Variables ***
${base_url}=    http://www.webdriveruniversity.com



*** Test Cases ***
Test checking checkbox on webdriveruniversity
    Open Browser    ${base_url}    Chrome
    Click Element    css:#dropdown-checkboxes-radiobuttons
    
    # @{window_handle}    Get Window Handles
    Switch Window  locator=NEW
    ${url}=   Get Location
    Log     ${url}
    # Wait Until Element Contains    css:#checkboxes > :nth-child(1) > input    Option-1
    Select Checkbox    css:#checkboxes > :nth-child(1) > input
    Checkbox Should Be Selected    css:#checkboxes > :nth-child(1) > input
    





