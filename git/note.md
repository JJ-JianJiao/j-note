# Basic Commands:
1. pwd : print current working directory path
2. mkdir : make directory
    a. mkdir -p folder1/folder2/folder3 : add _-p_, the system will create more folder even the folders do not exist
3. echo "xxxxxx" >> xxx.txt ：create a file and add the content to it:
4. cat xxx.txt : display the content of the files
5. nano file.name : if the file exists, open nano editor and edit the file or create the file first
6. cd ~ : ~ means the root
7. cd ~/.gitconfig : to check the global config setting of git
8. press esc, enter :wq or :q!
9. rm -rf folderName : delete the folder and all the files in the folder. (_-r means recursively_, _-f means force_)
10. unzip ~/Downloads/fileName (path of the file) : unzip the file to current folder
11. mv folderName NewfolderName : rename the folder name
12. mv folderName path/ : move the file to the folder

# Git Commands:
## Basic Git Commands:
1. which git : get the location of git
  a. reinstall git : sudo xcode-select --install
2. git version : check the git version
3. git config --global user.name "XXXX XXX" : set the user name
4. git config --global user.email "xxx@xxx.xxx" : set the user email
5. git config --global --list : check the user name and user email
6. git status : check current branch status

## clone a prject/repository
1. git clone repo's https address : clone a git repo from git hub server


## add changes to staged area


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
32. git log --oneline --graph
33. git log commit-code commit-code ## show the A>= and >B commit log
34. git log --since="3 days ago"
35. git log -- fileName ## will get the commit relative with the specific files
36. git log --follow -- pathOfFile ##commit history for the specific file going through the renames
## git Alias For example, want to show the git log + parameters "git log --all --graph --decorate --oneline"
37. git config --global alias.xxx(name) "content(log --all --graph --decorate --oneline)"

## git diff
38. git diff  :- compare the working directory and staging area
39. git difftool # will run the git different visual merge and diff tool
40. Set diff tool (perforce - P4Merge - Helix Visual Merge Tool)
    a. git config --global mergetool.p4merge.path /path
    b. git config --global merge.tool p4merge
    c. git config --global difftool.p4merge.path /path
    d. git config --global diff.tool p4merge
    e. git config --global difftool.prompt false ##　to avoid everytime open it will have prompt.
    f. git config --global mergetool.prompt false

##compare working dir vs repository (last commit)
41. git diff HEAD :- HEAD as parameter will compare working directory vs last commit on this branch
42. git difftool HEAD :- HEAD as parameter will compare working directory vs last commit on this branch

## comparisons Staging Area vs Repository
43. git diff --staged HEAD
44. git difftool --staged HEAD

## Comparisons List to One File
45. git diff -- fileName :- only compare the specific file
46. git difftool -- filename :- only compare the specific file

## Comparisons between commits
47. git diff commitID commitID :- compare the commits
48. git diff HEAD HEAD^ :- compare HEAD and HEAD--
49. git difftool HEAD HEAD^

## comparisons local vs remote
50. git diff master origin/master
51. git difftool master origin/master

## Branch and Merge
52. git branch -a :- will list local and remote branches
  a. git branch :will list all the local branches
53. git branch branchName :- create a branch
54. git checkout branchName :- move to the specific branch
55. git branch -m mynewbranch newbranch :- rename the branch A to branch B (-m : move)
56. git branch -d branchName :- -d for delete + name of branch
57. git branch -b branchName : will create a new branch and checkout then
58. git merge changeBranch : this parameter is the branch with changes and merge into current branch

##Happy path: Fast Forward
57. fast forward means: the target branch will fill with the changed branch and there is no changes ahead the target branch。 　we can not see the merge action in the graph commit log. it will not show the feature

## Happy path w/o fast forward
58. git merger changeBranch --no-ff : --no-ff model is normal merge, can save the branch merge history and it is good for checking the merge history. it will create a new merge id.

## automatic merges
59. git merge changesBranch -m "comments"

## merge conflict & resolution
60. using p4merge( merge tool ) is very a good graphic tool to deal with the conflict files. and when merging has conflict, git will in the merging|conflict status.

## Rebasing (rewind the branch and flattended our branch)
61. git rebase branchName
62. git rebase --abort :-out of the rebase.
63. git rebase --continue :- after resolve the rebase conflicts
64. git fetch origin master
65. git pull --rebase origin master


##stashing (by default, the git statsh command will only stash the tracked file)
66. git stash :- hide the changes base on the current commit
67. git stash apply :- will release the stash to current branch
68. git stash list :- WIP means working in progress, show the current stash list
69. git stash drop:- it will drop the last stash

## stash untracked / pop
70. git stash -u :- will stash the untracked files
71. git stash drop / apply : will delete/stash the last stash
72. git stash pop :- poping the stack (apply and then drop)
73. git stash save "name" :- save the stash and give it a name
74. git stash show stash@{index} :- will check the selected stash for review.
75. git stash apply stash@{index}
76. git stash drop stash@{index}
77. git stash clear :- will empty the stash list

## apply stash to a new branch
78. git stash branch BranchName :- create and switch to a branch and apply the stash to the new branch and drop the stash list

## git tagging  tags are just nothing more than labels
79. git tag TagName :- create a lightweight tag, it is simply just a marker on a particular commit
80. git tag --list :- check the tags we have
81. git tag --delete TagName :- delete a tag

## annotated tag : is similar to the lightweight tag, but it has a little extra information. Major milestone or version numbers.
82. git tag -a TagName(v-1.0) :-   "-a" means create a annotated tag

## compare tags
83. git commit --amend :- re-edit the commend content of latest commit
84. git tag TagName -m "content"
85. git diff TagName TagName2
86. git difftool TagName TagName2

## Git Tagging a previous commit
87. git tag -a TagName commitID

## updating an existing tag
88. git tag -a TagName -f commitID :- force move the tag to newCommitID
89. git show TagName :- will display the commit information based on the tagName

## push tag to github
90. git push origin TagName
91. git push origin
92. git push origin :TagName :- delete the tag from github

## Rebase and Reflog - time travel with git (traverse branch using HEAD)
1. git reflog :- wiil show the HEAD log history. Git log show the history and git reflog shows the log (show the log everything we have done)
2. git reset HEAD^ :- move the HEAD up one step
3. git reset HEAD~Index :- move the HEAD up index steps
4. git reset commitID :- move the HEAD to the specific commit

## reset - three different resets (default: mixed, soft:, hard:)
1. git reset --hard : will back the the commit and remove all the things in staging and working area (give up all the changes locally)
2. git reset --soft: will put the different between the commits to staged area (we can use git reset --soft to combine the commits points)
3. git reset --mixed: will pul the different to working area/or if we want to move all the staged file to working area

## git diff branches
1. git diff branchName branchName2

## cherry pick //https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html(ref) IF we need the all commits in the branch, we use merge. If we need the commits (few changes) in the branch, we could use cherry-pick.
1. git cherry-pick commitID
2. git cherry-pick commitID commitID2
3. git cherry-pick A..B :- (A,B]
4. git cherry-pick A^..B :- [A,B]

## Push branch to remote
1. git push origin branchName
2. git push origin --delete branchName
Example: delete the branch : remote/dev/JunitTest
: git push dev --delete JunitTest

##git ignore
38. Git Ignore pattern examples
  Specific files: My files.ext
  File pattern: *.ext
  Folder: my-folder/
39.

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
