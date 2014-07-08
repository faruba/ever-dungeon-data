@echo off
rem init node environment
call "C:\Program Files\nodejs\nodevars.bat"

node ./convertor/j2x.js ./levels.xlsx ../table/levels.js 4

echo OK.
pause