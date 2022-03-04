/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition =`Git is a repository langage that allows you to take a snapshot or copy of your code and store it on your local computer`
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition =`GitHub is a website owned by Microsoft that lets anyone upload and store their code for free. you can use git on your local computer to "push" your code to GitHub where it will not get lost, and you will always have copies of it. you can push as many copies as you want`
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
var gitInitDefinition = `git init is the first step to setting up a local repo on your computer. it initilizes the repository, preparing it to hold and save your directory of coding files`
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
var gitCloneDefinition = `git clone is used to point to an existing repo and make a clone or copy of that repo in a new directory, at another location.`
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
var gitStatusDefinition = `git status is used to see where you are at in the process of saving your code to your local repo. it can tell you if you have added and or commited the updated files letting you know which changes have been staged`
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
var gitAddDefinition = `The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit.`

var gitAddCode = `git add .`
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
var gitCommitDefinition = `git commit captues a snapshot of the projects currently staged changes.snapshots can be thought of as "safe" versions of a project`

var gitCommitCode = `git commit -m 'initial commit'`
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
var gitPushDefinition = `git push takes the local repo and sends it to git hub using the url to sync at github and stores a copy of your files on git hub`