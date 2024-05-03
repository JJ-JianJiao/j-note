### make up later

-   `ls -ltr`: show the latest files at bottom/sort by creating time
-   `echo "some words" > file.name`: adding some text to a file
-   `cat file.name`: display the content of the file

# 4.Linux Fundamentals

## File Maintenance Commands

1. `cp`： copy a file

    > `cp file.original file.new`

2. `rm`: remove a file/ if want to rm a fold, add `-r`
    > `rm file.name` | `rm -r folder`
3. `mv`: move or rename a file
    > `mv file.name folder/file.newName or file.newName`
4. `mkdir`: create a folder
    > `mkdir folderName`
5. `rmdir`: remove a folder, we can not remove a folder which is not empty
    > `rmdir folderName`
6. `chgrp`: change the file/folder group
    > `chgrp groupName file|folderName`
7. `chown`: change the file|folder owner. we can change the group and owner at same time -- `chown owner:group fileName`
    > `chown ownerName fole|folderName`
