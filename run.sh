rm -r allure-report/; mkdir allure-report/
rm -r allure-results/; mkdir allure-results/
npx wdio wdio.conf.js 
#gnome-terminal -- ngrok http 8800
allure generate allure-results/ && allure open -p 8800
