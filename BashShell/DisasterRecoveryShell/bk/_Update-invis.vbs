Set WshShell = CreateObject("WScript.Shell")
WshShell.Run chr(34) & "C:\DR\_Update.bat" & Chr(34), 7
Set WshShell = Nothing


' Set WshShell = CreateObject("WScript.Shell")
' Basically starts a new windows shell process (command line).

' WshShell.Run chr(34) & "C:\Batch Files\syncfiles.bat" & Chr(34), 0
' Runs a command and sets the character set for the text string,"C:\Batch Files\syncfiles.bat"

' Set WshShell = Nothing
' Tells the shell not to display the window.

' "C:\Batch Files\syncfiles.bat"
' Change this to the file, program or batch file that you want the .vbs file to run
' in a hidden window.

' "C:\Batch Files\syncfiles.bat" is entered as text and the
' Chr(34) is telling the command there is a text string command in quotes.
' chr(34) actually = " in ascii text code.
' So in ascii the command is actually quoting the quoted text for the command
' so the command understands it.
' Trying to keep this as simple as possible.

' First line runs the command promt.
' Second line runs the program or file.
' Third line makes it run without showng the window.