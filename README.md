# Project Management System


## :computer: Prerequisites

* postgreSQL
* nodeJS version ^5.0.0
* npm latest version
* expect


## :computer: Installing Prerequisites

#### On Ubuntu:
* postgreSQL - [pgSQL installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04)
~~~
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
~~~
* nodeJS - [nodeJS installation guide](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
~~~
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
~~~
* npm  - [npm installation guide](https://docs.npmjs.com/getting-started/installing-node)
~~~
sudo npm install npm -g //npm automatically comes with node, we do this to check if npm is the already on the latest version
~~~
* updating node and npm via npm - [update guide](https://davidwalsh.name/upgrade-nodejs)
~~~
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
~~~
* expect - used for script input automation \(Not necessary but makes life easier. Create a file based on this sample [expect.exp](https://github.com/PJHRobles/cdc-pms/blob/master/expect.sample.exp) then save it as expect.exp. Do not forget to change the password in the file to match your machine credentials before running the script. Current directory must be inside the repository when executing the commands.\)
~~~
sudo apt-get install expect
chmod 755 expect.exp         //make expect.exp and setup_database.sh executable
chmod 755 setup_database.sh
~~~


## Installing modules/dependencies

Install bower package manager globally via npm
~~~
sudo npm install bower -g
~~~
Install mocha globally via npm for testing rest api
~~~
sudo npm install mocha -g
~~~
Install current npm dependencies via npm package manager
~~~
npm install
~~~
Install frontend dependencies via bower
~~~
cd public
bower install
cd ..
~~~
Import sql files to your database
~~~
npm run database-setup
~~~


## Running the App
You need to create a configuration file (config.js) based on the [config sample](https://github.com/PJHRobles/cdc-pms/blob/master/backend/es6/config/config_sample.js) on the same directory before you can run the app. Modify the database management system username, password and name to match your machine credentials. config.js has been included in our ignored files. This is to ensure that no personal/sensitive credentials won't be pushed into our repository. After creating the configuration file, you can now start the app.
~~~
npm start
~~~

### Running tests
Stream test output into test.log then check the file for the result
~~~
npm run test > test.log
~~~
