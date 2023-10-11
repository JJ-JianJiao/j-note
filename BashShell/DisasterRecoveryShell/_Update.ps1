# Create the subdirectories if they don't exist
$basedir = "C:\DR"
$dirs = "dark-site"
$date = Get-Date -Format "yyyy-MM-dd"
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
Start-Transcript -Append -Path "$basedir\_Update.log"

Write-Host "This PowerShell script updates this local DR directory with files to prepare for a disaster situation."
Write-Host ""

Write-Host "Updating: dark site"
Copy-Item -Path "\\collaborate.abcp.ab.bluecross.ca@SSL\sites\organization-sites\Divisions\mpa\dx\EPW\Documents\Darksite\*.docx" -Destination "$basedir\dark-site\"

Write-Host ""
Write-Host "Complete."

# Stop writing script output to the log file
Stop-Transcript
