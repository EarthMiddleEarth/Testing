*** Settings ***
Library    SeleniumLibrary

Test Setup    Start Test Case    ${automationTestStore_url}
Test Teardown    End Test Case

*** Variables ***
${automationTestStore_url}    https://www.automationteststore.com/
@{name_list}=    Create List    Passon    Alice    Porsche
# @{animals}=    Create List    dog    cat    bear

*** Test Cases ***
Verify Availability of The Site
    Page Should Contain    Automation Test Store
Clicking and Input To ContactUs Page
    Click Element    xpath://a[text()='Contact Us']
    FOR    ${element}    IN    @{name_list}
        Input Text    css:#ContactUsFrm_first_name    ${element} 
        Input Text    css:#ContactUsFrm_email    AAAAA@dsdksd.com
        Input Text    css:#ContactUsFrm_enquiry    XXXX
        Click Element    css:.lock-on-click
        Go Back
    END



    @{webelements_list}=    Get WebElements    css:.info_links_footer > li >div > a
    
    FOR    ${element}    IN    @{webelements_list}
        ${text}=    Get Text    ${element}
        Log    ${text} 
        
    END



*** Keywords ***
Start Test Case   
    [Arguments]   ${url}
    Open Browser    ${url}    Chrome
End Test Case
    Close All Browsers