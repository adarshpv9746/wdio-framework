sudo apt-get update
npm i latest-version
sudo apt-get --only-upgrade install google-chrome-stable
version=$(google-chrome-stable --version | awk '{ print $3 }'| cut -d'.' -f1)
npm install chromedriver@$version --save-dev
sudo npm install @wdio/allure-reporter --save-dev
# if you have Chrome 104 installed on your machine do
#npm install chromedriver@104 --save-dev