inputText = "I am the best QA ever"
expectedText=""
for strx in inputText:
    if strx == ' ':
        expectedText=expectedText+'_'
    else:
        expectedText=expectedText+strx

print(expectedText)