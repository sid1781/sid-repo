Cypress-Parallelization with circleCI
pre-requirement :Github repo(With cypress and mocha-reporter insatlled)
Steps:
Create a folder in your local machine.say example cypress-parallel-run
Install the cypress to folder which we have created.
Steps to install cypress
      npm init (Enter the required feilds to create a package.json)
      npm install cypress --save-dev
      npm install
      npx cypress open(This will create a cypress folder for u)
Once the installation is done now install the mocha-reporter
      npm install cypress-multi-reporters --save-dev 
Now its time to login to Circleci tool 
https://circleci.com/signup/ 
While logging in it will ask git repo 
authenticate with the github repo
once you successfully logged in with ur repo it will go circle ci dashboard.
Now its time to login to cypress cloud.
Login here alos with github
https://cloud.cypress.io/login
Once your successfully logged in it will show the dashboard of cypress.
Now we are good install circle ci in our local machine 
run below command and install circle ci
npm ci  
now it time to update the .cirlce/config.yml --update this yml file as we are having in github
different cominations for yml file can be found in below link
https://circleci.com/docs/collect-test-data/
https://github.com/cypress-io/circleci-orb

with this changes and steps we should able to achive the parallel testing

NOTE: When we login to cypress cloud it will ask to set-up project that we should be able to create. once we are done with that we need to take project id and record key  and we need to paste the project id inside the cypress.config.js and record key we need to paste in package.json command 
      We need to create  command called parallel inside package.json with record key
      cypress run --record --key=cb8959cf-2004-4eb8-b0c1-513867ab197c --ci-build-id 1  --parallel
When we login to circleCi. we need to go to project setting inside this enviroment variable and inside that we need to set the env variable as CYPRESS_RECORD_KEY
