s### make up later

-   `ssh`: (secure shell) connect to a linux

    > `ssh user-name@target-ip

-   `scp file.name user-name@target-ip/path`: transfer a file from the current device to the target device using ssh
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

## Filters / Text Processors Commands

1. `cut`: cut the content base on what the parameters you pass

    - `cut filename`: does not work
    - `cut --version`: check the cut version
    - `cut -c1 filename`: list one chracter
    - `cut -c1,2,4`: pick and chose character
    - `cut -c1-3 flename`: list range of characters
    - `cut -c1-3,6-8 filename`: list specific range of characters
    - `cut -b1-3 filename`: list by byte size
    - `cut -d: -f 6 /etc/passwd`: list first 6<sup>th</sup> column separated by **:**
    - `cut -d: -f 6-7 /etc/passwd`: list first 6 and 7<sup>th</sup> column separated by **:**
    - `ls -l | cut -c2-4`: Only print user permissions of files/dir

2. `awk`: data extraction, extract fileds from a file or forn an outpu

    - `awk --version`
    - `awk '{print $1}' file`: print the first filed of the file
    - `ls -l | awk '{print $1,$3}'`:list 1 and 3rd filed of ls -l output
    - `ls -l | awk '{print $NF}'`: last field of the output

    - `awk '/Jerry/ {print}' file`: search for a specific word
    - `awk -F" '{print $1}' /etc/passwd`:out put only 1st field of /etc/passwd
    - `echo "Hello Tom" | awk '{$2="Adam"; print $0}`:replace words field workds
    - `cat file | awk '{$2="jian"; print $0}'`:replace words field words
    - `awk 'length($0) > 15' file`: get lines that have more than 15 byte size
    - `ls -l | awk '{if($9 == "test") print $0;}`:get the field matching test in the list of the path
    - `ls -l | awk '{print NF}'`: Number of fields

3. `grep/egrep`: search feature in Linux.

-   `grep --version OR grep --help`: check version or help
-   `grep keyword file`: search for a keyword from a file
-   `grep -c keyword file`: search for a keyword and count
-   `grep -i keyword file`: search for a keyword ignore case-sensitive
-   `grep -n keyword file`: display the matched lines and their line numbers
-   `grep -v keyword file`: display everything but keyword
-   `grep keyword file | awk '{print $1}'`: search for a keyword and then only give the 1st field
-   `ls -l | grep -i desktop`: search for a keyword and then ony give the 1st field

-   `egrep -i "keyword|keyword2" file`: search for 2 keywords
