@echo on
rem init node environment
call "C:\Program Files\nodejs\nodevars.bat"

node ./convertor/x2j.js ./table/level.js ./level.xlsx



echo OK.
pause