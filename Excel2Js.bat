@echo on
rem init node environment
call "C:\Program Files\nodejs\nodevars.bat"

node ./convertor/x2j.js ./table/items.js ./items.xlsx
node ./convertor/x2j.js ./table/roles.js ./roles.xlsx
node ./convertor/x2j.js ./table/enhance.js ./enhance.xlsx

echo OK.
pause