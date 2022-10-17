## Protractor - Cucumber - Type script framework

# Please note -
1. For the demo purpose I have used different style of page object method to capture the elements.
2. I have intentionally built one of the test to fail, to demonstrate failed scenario (Scenario name: Perform ebay advance search and look for expected product - THIS TEST IS BUILD TO DEMONSTRATE FAILED SCENARIO)

# To Get Started

# Pre-requisites
1. Install NodeJS globally in the system
2. Chrome browsers installed

# Setup Scripts
1. Clone\unzip the repository to a folder.

2. Go to the folder and run following command from terminal/command prompt.

        npm install 

3. Run below command should download the chrome & gecko driver binaries locally.

        npm run webdriver-update

*** Notes - Sometimes you can get error when downloading resources from internet. If there is any failure please run this again

4. The start your selenium server.  
    
         npm run webdriver-start

5. The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.

         npm run build

6. Now Run the below command which will launch the Chrome Browser and will runs the scripts.   

        npm test

7. After the test - Go to  ../EBAY WEB AUTOMATION/reports/html folder and open "cucumber_reporter.html" report, to look at execution result.