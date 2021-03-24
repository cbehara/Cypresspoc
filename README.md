# Cypresspoc


#Intoduction
Nearly 176 organizations like NASA, Revolut, CircleCI, etc., are depending on Cypress for the End-End testing, Integrated testing, and unit testing. We can say that Cypress will be ruling the testing phase for a few more years.

People often get confused between the Selenium and Cypress. Both have different architecture. Selenium and Cypress run on the same application where the testing process is done.

While performing the tests in Selenium, we have to often download the additional library files, selenium wrapper, framework, assertion library which are the dependencies. But in Cypress, all the required files will get automatically downloaded once you install the command

npm install cypress
Additionally, you can use all the cool features of Cypress if you have an updated Node.js. In real-time, the Cypress has full control in the back and front end because it constantly communicates and synchronizes with the node.js.

Cypress controls the network traffic by automatically changing the code associated with the browser. It also links with the OS of the PC for better automation purposes.

By using Cypress you can monitor the test result internally and externally, record the test, screenshot the test result, and so on. Cool isn't it?. Let's discuss the cool features of Cypress after installing this tool.
======================================================================================================================================================================

#Installation of Cypress
Since Cypress is associated with node.js, it supports any type of Operating System.

Cypress can be installed only if you have node.js installed in your Windows or macOS.

Navigate to: https://nodejs.org/en/download/
Download the package according to your operating system.
download-nodejs
#Install the downloaded node.js file.
Once the installation is completed, set the environmental path in PC to recognize the node.js globally inside the PC. For this, you have to identify the path in which node.js is stored.
file-path-nodejs
After copying the path, go to System properties>select the environmental variable>select new in the system variables.
Give the variable name as NODE_HOME and in the variable value paste the copied path.
environmental-path-nodejs
After setting the environmental path go to the C drive>admin folder. In the admin folder, create a new folder named Cypress-Io. In the Cypress-Io folder, create a new folder named project. And in the project folder create another folder named Cypress automation testing.
========================================================================================================================================================================
#Installation of VS Code:
We need a platform to write our code. Visual Studio code platform is one of the most popular editors created by Microsoft to write the javascript.

Navigate to https://code.visualstudio.com/
Download the VS Code according to your operating system.
download-vs-code
Install the VS Code like any other .exe file, go along with the recommended setting only.
Launch the VSCode, and UI will look like below.
VS code-desktop-view
============================================================================================================================================================================
#Generating package.json
Open VS code which we have already installed in our PC
In the VS code go to file >open folder.
Select the empty folder name Cypress Automation Testing which we have already created in the Admin folder.
install-json-package-creation
After opening the file in the VS Code, Open the terminal in the VS Code using view>terminal or a Command prompt and type npm init. This command creates the package.json. While installing the package.json the terminal asks for the package name. You can give any name as a package name in lower case. Here I have given the name as automation.
Success-package-json
========================================================================================================================================================================
#Installing Cypress
After creating the package.json we are now good to install the Cypress.
For installing Cypress give the command npm install cypress --save-dev in the same terminal where we created the installed.json package.
This installation process takes a few minutes. Kindly be patient till all the files are extracted.
install-sucess-cypress
If you have completed these steps then you have the Cypress tool in your Operating System.
========================================================================================================================================================================
#Extraction and Launching of the Cypress Test runner
After the successful installation of cypress, we have to invoke the Test runner.

Type the below command in the terminal.

node_modules\.bin\cypress open​
[OR]

npx cypress open
If any error occurs while opening the cypress in the windows operating system, check the slash which is used in the command line. Always in windows, use backslash '\' for any commands.
After that, you will find a new folder named cypress automatically generated in the file system and you can see it in the explorer panel.
test-runner-launch
After giving the command it takes a few seconds to launch the test runner. A dialogue box will appear as below, saying an example folder is created that contains the Testing programs. These programs are mainly available for user reference.
automatic-example-folder
After this, the test runner is automatically launched, containing the sample test programs. The Test runner will look like the below image,
test-runner-example-page

Now let's try to run any one of the test programs in the examples folder and understand how the automation works.

Example test program execution in cypress
Select any one of the .js files present in the examples folder in the test runner. Here I have selected the aliasing.spec.js file.
After selecting the file, The test runner is automatically prompted along with the browser. Cypress executes in the same run loop as the application.
execution-test-programSuccessfully we now know how to launch the test runner. Let's try to explore some of the Cypress folders.
