@echo off
rem init node environment
call "C:\Program Files\nodejs\nodevars.bat"

node ./convertor/j2x.js ./level.xlsx ../table/level.js 2

echo OK.
pause