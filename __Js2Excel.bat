@echo off
rem init node environment
call "C:\Program Files\nodejs\nodevars.bat"

node ./convertor/j2x.js ./items.xlsx ../table/items.js 2
node ./convertor/j2x.js ./enhance.xlsx ../table/enhance.js 2

echo OK.
pause