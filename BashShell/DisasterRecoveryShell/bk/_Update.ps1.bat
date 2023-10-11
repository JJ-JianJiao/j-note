# Create the subdirectories if they don't exist
$basedir = "C:\DR"
$dirs = "Environment Diagrams","DR Plans", "Incident Management"
foreach ($dir in $dirs) {
   if ( -not (Test-Path $basedir\$dir)) {
      # Assignment to null suppresses command output and is faster than piping to Out-Null
      $null = New-Item -Path $basedir\$dir -ItemType Directory
   }
}

# Rotate the log file
$logfile = "$basedir\_Update.log"
if (Test-Path $logfile) {
   if (((Get-Item $logfile).length/1KB) -gt 1024) {
      Get-ChildItem $logfile | Move-Item -destination "$logfile.prev" -force
   }
}

# Begin writing all script output to the log file
Start-Transcript -Append -Path $basedir\_Update.log

Write-Host "This PowerShell script updates this local DR directory with files to prepare for a disaster situation."
Write-Host ""

Write-Host "Updating: environment diagrams"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\I-and-O\teams\web-admin\TeamDocs\Architecture\Environment Diagrams\*.vsdx" -Destination "Environment Diagrams\"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\I-and-O\teams\web-admin\TeamDocs\Architecture\Environment Diagrams\Component-to-Server Mapping.xlsx" -Destination "$basedir\Environment Diagrams\"

Write-Host "Updating: DR plans"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\I-and-O\teams\web-admin\TeamDocs\Projects\DR\*" -Destination "$basedir\DR Plans\"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\I-and-O\teams\web-admin\TeamDocs\Products\WPEngine\*" -Destination "$basedir\DR Plans\"

Write-Host "Updating: DR docs - John TM special"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\I-and-O\TM\documents\IT Disaster Recovery Plan\Plan & Playbook\*" -Destination "$basedir\DR Plans\"

Write-Host "Updating: Incident Management docs - John TM special"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\I-and-O\it-escalation-management\documents\*.docx" -Destination "$basedir\Incident Management\"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\I-and-O\it-escalation-management\documents\*.pdf" -Destination "$basedir\Incident Management\"

# Write-Host "Updating: password dump"
# Copy-Item -Path F:\TO\WebAdmin\passwordgrid\fullpass_dump.log -Destination "$basedir\"


Write-Host "Updating: other docs"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\it\Documents\*Phone List*" -Destination "$basedir\"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\I-and-O\teams\web-admin\TeamDocs\Products\Web Admin Product Administration Cheatsheet.docx" -Destination "$basedir\"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\organization-sites\Divisions\IT\Resources\*Org Chart*" -Destination "$basedir\"
# VDI list?



Write-Host ""
Write-Host "Setting password file rw only to $($env:USERNAME)"
icacls fullpass_dump.log /reset
icacls fullpass_dump.log /grant "$($env:USERNAME):F"
icacls fullpass_dump.log /inheritance:r

Write-Host ""
Write-Host "Complete."

# Stop writing script output to the log file
Stop-Transcript
