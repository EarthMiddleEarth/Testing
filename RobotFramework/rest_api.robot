*** Settings ***
Documentation    API testing in RobotFramework
Library    RequestsLibrary


*** Variables ***
*** Test Cases ***
GET Request
    Create Session    sess1    http://localhost:3000
    ${response}=    GET Request    sess1    /    
    Status Should Be  200  ${response}
    Log    ${response.status_code}


POST Request
    Create Session    sess1    http://localhost:3000
    ${body}=    Create Dictionary    title=From Robot    author=From Robot
    ${header}=    Create Dictionary    Content-Type=application/json
    ${response}=    POST Request    sess1    /posts    data=${body}    headers=${header}

POST Request
    Create Session    ax    http://localhost:3000
    ${body}=    Create Dictionary    title=AXAXAX    author=BXBXBXBX
    ${header}=     Create Dictionary    Content-Type=application/json
    ${response}=    POST Request    ax    /posts    data=${body}    headers=${header}
    Status Should Be    201    ${response}