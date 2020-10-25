heroku:

git init

heroku git:remote -a edu-test-tool

heroku buildpacks:set heroku/python


heroku buildpacks:add --index 1 heroku/nodejs

firebase:
npm install -g firebase-tools
firebase login
firebase init
firebase deploy