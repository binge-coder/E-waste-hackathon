# For contributors
## Things you need
- install npm and node : https://www.freecodecamp.org/news/how-to-install-node-js-and-npm-on-windows-2/
- github desktop app (this is recommended... unless you are okay with typing git commands in your terminal). 
- You must know basic git concepts like fork, clone, commit, pull requests, etc. If you don't know this then just take a crash course or something.
## See this before anything
- https://medium.com/@jonathanmines/the-ultimate-github-collaboration-guide-df816e98fb67 (don't mindlessly execute every step you see in this article. I have already made the repository so you don't need to do it, I hope that's obvious)
> tldr: If you’re a collaborator, go to the Github Repo page, Git Clone the project, and cd into the directory. Don’t fork it! Forking will copy it in a new Repo to your Github page, but you don’t want that — you want to collaborate on the same Github Repo with your teammates.

## Get started
- clone this repo
- open a terminal in the cloned folder (or open cloned folder in vs code and start terminal from there). Then write this
```
npm install
```
- this installs all the necessary packages needed to run this website on system for development
- now run this command
```
npm run dev
```
- this will run the development server on `http://localhost:5173/` (just enter this in your browser url bar)
```
http://localhost:5173/
```
- you can see the changes you make to the file in real time (its recommended to turn on **autosave** in vscode)
- push changes to remote branch once you're done (fancy way of saying push you code to online github storage, very easy to do with github desktop)
## Side notes
- I encourage anyone to edit this to make things easier for team members who are still having issues with collaborating

Installing mongodb 

Refer to this video for installation

https://www.youtube.com/watch?v=gB6WLkSrtJk