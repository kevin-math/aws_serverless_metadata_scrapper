# Serverless Metadata Scrapping From A Given URL

#### This is a serverless service which can be used to scrape OG Metadata from a given URL



## Features

- Provide a valid url of a webpage in the below given format through the body of the API request to 
obtain the OG metadata of the webpage

    ```sh
        { url : "<your_url_here>" }
    ```
    
    ```sh
        API EndPoint :  "https://a6mc19ckbg.execute-api.us-east-1.amazonaws.com/dev/metadata"
    ```


## Tech

This service uses the following services and tools:

- [Serverless Framework] - For Cloudformation Deployment
- [AWS Lambda] - Serverless Function
- [DynamoDb] - Serverless NoSQL Database


## Requirements to run the service locally on your machine.


### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

### Serverless

  - #### To install Serverless on your machine and to run it offline, run the below mentioned npm command.

        $ npm install serverless serverless-offline -g


  - #### To run the service offline, navigate to the directory where the serverless.yml exists and run the below command.

        $ sls offline
        
        
  - #### To deploy any changes

        $ sls deploy

### AWS CLI        
  - #### Note: If you dont have aws-cli configured in you system, make sure you configure the aws credentials before the deployment stage. Once you have aws-cli installed, run the below command to configure the credentials

        $ aws confgure        
        

    


