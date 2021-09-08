Hello, 
This is my portfolio!If you want to check out! https://srinithi95.github.io/
I've created this with React JS and I have used Jackson template(https://colorlib.com/wp/template/jackson/) 
It is deployed with github Pages (Thanks to github :D)
I did face some challenges while hosting it with github pages, So some things to keep in mind while hosting it in github pages -

1)When you are ready to deploy your react app, make sure to change your package.json file with,
   -> Add the homepage field — value will be in the following format — https://{github_id}.github.io/{github_repo}
   -> Add predeploy and deploy fields under scripts
2) Run the "npm run deploy", it will create a new branch gh-pages.
3) Change source to "gh-branch" which would be "master" branch by default. (Repository settings -> Github Pages -> Source)
4) Add a ReadMe file in the "gh-branch"
5) Select a jekyll theme ( Even if you are not going to use, select one or it may cause some problem viewing your website -Happened to me)

Your website should be up and running!! 
 


