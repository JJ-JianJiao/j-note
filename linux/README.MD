### make up later

-   `-rwx------`: the permison of the file/folder/link. The order of these charactor is:

    > `-` -> regular file || `d`-> folder ||`l` -> link || `b` -> block || `c` -> character || `s` -> socket || `p` -> pipe
    >
    > `rwx` means: read write execute
    >
    > --- --- --- : root user group

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

## File Display Commands

1. `cat`: view the entire content of a file
   > `cat file.name`
2. `more` : view the content pay by page
   > `more file.name`
3. `less`: view the content line by line
   > `less file.name`
4. `head`: just view the specific lines from start
   > `head -number file.name`
5. `tail`: view the content from the end
   > `tail -number file.name`
