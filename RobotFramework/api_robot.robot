*** Settings ***
Documentation  API Testing in Robot Framework
Library    SeleniumLibrary
Library    RequestsLibrary
Library    JSONLibrary
Library    Collections

*** Variables ***

*** Test Cases ***
Get Request
    [documentation]  This test case verifies that the response code of the GET Request should be 200,
    ...  the response body contains the 'title' key with value as 'London',
    ...  and the response body contains the key 'location_type'.
    [tags]  Smoke
    Create Session  mysession  http://localhost:3000  verify=true
    ${response}=  GET On Session  mysession  /  expected_status=200
    Status Should Be  200  ${response}  #Check Status as 200

Post Request
    Create Session    mysession     http://localhost:3000
    ${body}=  Create dictionary    title=From Robot    author=Passon
    ${header}=  Create dictionary    Content-Type=application/json
    ${response}=  POST Request    mysession    /posts    data=${body}    headers=${header}    
    Status Should Be    201    ${response}

PUT Request
    Create Session    mysession    http://localhost:3000
    ${body}=    Create Dictionary    title=Updated From Roobot    author=Updated From Robot
    ${header}=    Create Dictionary    Content-Type=application/json
    ${response}=    PUT Request    mysession    /posts/34    data=${body}    headers=${header}
    Status Should Be     200    ${response}

Delete Request
    Create Session    mysession    http://localhost:3000
    ${response}=    DELETE Request    mysession    /posts/36
    Status Should Be    200    ${response}