README.txt

Profile Page Deployement

1. Install Git on Laptop
	a. www.macports.org
	b.open terminal on laptop

		$sudo port install git-core +svn +doc +bash_completion +gitweb

		The basic git cms begin as
		
		$git config

		--global

		. /etc/gitconfig   -----contains values for evrey user on the sysand thier  

								repos	




		C. Set up your username and email ---git uses this info for every commit
		
		$git congig --global user.name "yourusername"

		$git config --global user.email youremailaddress


		D. Set up Editor

		$git config --global core.editor editorname

		E. Set up Diff Tool
			see ch 7 for custom 	


		F. Check Settings
		
		$git config --list

		$git help < verb >

		$git < verb > --help

		$git help config 


2. To clone in laptop
	
	open terminal on mac

	$git clone <https:// address here from your repo on git hub>

	this will immediatley download your clone

	$ ls      to list your files

	$ cd     your folder

	to edit readme.tx if there is one 

	$ pico readme.txt

	this opens the editor in terminal and you can edit the readme file	

	after edit is complete run the following to commit back up to github

     $ git add -A
     
     $ git commit -m "update readme file"
     [master 5aefef9] update readme file
     2 files changed, 22 insertions(+), 1 deletion(-)
     create mode 160000 graphicalGraffiti

     $ git push

     warning: push.default is unset; its implicit value is changing in
     Git 2.0 from 'matching' to 'simple'. To squelch this message
     and maintain the current behavior after the default changes, use:

     git config --global push.default matching

     To squelch this message and adopt the new behavior now, use:

     git config --global push.default simple

    See 'git help config' and search for 'push.default' for further information.
    (the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
    'current' instead of 'simple' if you sometimes use older versions of Git)


   Username for 'https://github.com': lion21

  Password for 'https://lion21@github.com': 
  
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 591 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
To https://github.com/lion21/graphicalGraffiti.git
   2b188fd..5aefef9  master -> master
Susans-MacBook-Pro:graphicalGraffiti susantodd$ 



	$git status
	$git add -A
	$commit -m 'fixed that problem'
	$git push prodServer master	
	$git remote add prodServer ssh://myusername @ xxxx.xxxx.xxxx.xxxx/var/repos/mobilDev.git
	$enter your password






								
