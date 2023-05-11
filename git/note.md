Commend order:
1. pwd - print work directory
2. mkdir - make directory
  mkdir - p folder1/folder2/folder3 :- add -p, the system will create more folder even the folders do not exist
3. create a file and add the content to it:
  echo "xxxxxx" >> xxx.txt
4. cat xxx.txt :- display the content of the files
5. nano file.name - if the file exists, open nano editor and edit the file or create the file first
6. cd ~ :- ~ means the root
7. cd ~/.gitconfig :- to check the config setting of git
8. press esc, enter :wq or :q!
9. rm -rf folderName :- delete the folder and all the files in the folder  ## -r means recursively -f means force
10. unzip path of the file (~/Downloads/fileName) :- unzip the file to current folder
11. mv folderName NewfolderName :- rename the folder name






Git order:
1. git version - check the git version :- check the git version or install
2. git config --global user.name "XXXX XXX" :- set the user name
3. git config --global user.email "xxx@xxx.xxx" :- set the user email
4. git config --global --list :- check the user name and user email
5. git clone repo's https address
6. git status :- check current branch status
7. git add "file.name" - add files to staging area
8. git commit -m "message" :- add the commit to local
9. git push origin main
10. git init xxxxx - creat a repo locally
11. git add -A :- add all the updated files to staging
12. git branch -m newName :-   "-m" tells get to move or rename the current branch to the name we just specified
13. git init -b branchmain(main) repoName :- "-b" will to allow to specify main as default branch for this repository
14. git config --global --list :- check the config settings
  for examople:
    filter.lfs.required=true
    filter.lfs.clean=git-lfs clean -- %f
    filter.lfs.smudge=git-lfs smudge -- %f
    filter.lfs.process=git-lfs filter-process
    user.name=Jiao Jian
    user.email=jj.jianjiao@gmail.com
15. git config --global init.defaultBranch main :-set the defaultBranch to main in config settings
  after this setting, using: git config --global --list, we will see a new line like this: init.defaultbranch=main
16. git commit -am "XXXXXX" :- -a arguments automatically stages all changes, So git commit -am "message" is euqal to runing git add . and git commit -m "message"
17. git log --a
18. git log --oneline
19. git config --global core.editor "notepad++.exe -multiInst -nosession" :- set the notepat++ as the user level default editor
20. git ls-files :- get all the tracked files in repository
# reset staging command
21. git restore --staged xxxx.xx :-  move the file from staging area to un-staging area
      && git reset HEAD xxx.xx :- same as above
22. git checkout -- xxx.xx / (i try to use "git checkout fileName", it works)   ##give up the modified file version and revert back to the unmodified version
      && git restore file name
# rename and move files
23. git mv old-file-name new-file-name ## rename the file name using git command
24. git mv file-name relative-path ## for example: git mv file.Name .. or git mv file.name FolderName
## git add -A/./u
25. git add -A ## stages all  (modified, new, delete)
26. git add . ##stages all in same path (only add all at current path and below)
27. git add -u ## stages modified and deleted, without new (add all tracked files without new)
## git remove files
28. git rm fileName ## only works the file which is tracked by repository
## git help
29. git help log ## help page, press q key will quit.
30. git log ## check the commit history, type Q to quit
31. git log --abbrev-commit
32. git log --oneline --graph --
33. git log commit-code commit-code ## show the A>= and >B commit log
34


Git Basics Overview:
1. Starting a Project
  a. fresh (no source yet)
  b. existing source locally
  c. GitHub project(Fork and clone)
2. Basic Workflow (add, commit, push & pull)
3. working with Files (rename, move & delete)
4. History and Aliases
5. ignoring Unwanted Files





Git and GitHub story
-Git
  1. Default still "master"
  2. Transition to something else - perhaps one day
  3. options for other default branch names
-Github
  1. Default now "main" (new repos only)
  2. Can be reset back to "master"
  3. more immediate transition

Option 1:
  1. Set default branch back to master
  2. Settings -> Repositories -> Repository default branch
    a. Change to master and Update
  3. After, change back to main (if desired)
Option 2:
  1. Github: leave the new default as main
  2. Git:
    a. Update Git (if needed)
    b. Existing repos - change master to main
      Before pushing to Github
    c. Change default branch to main
      or your company's standard
