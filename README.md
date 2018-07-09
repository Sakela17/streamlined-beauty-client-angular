Streamlined Beauty App
============================
This project was built while studying for Engineering Immersion program at [Thinkful](https://www.thinkful.com/bootcamp/atlanta/).
The goal was to learn Angular 6 independently and build something new with it in one week. Due to time constraints, I chose to refactor the client I previously built with React/Redux.
That helped me to focus on learning the new technology vs. doing everything that building a new app entails.

[View Live](https://streamlinedbeauty-angular.netlify.com/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.
#### Development
* Install [Node](https://nodejs.org/en/), which comes with [NPM](https://www.npmjs.com/)
* Install [Angular](https://angular.io/) `npm install -g @angular/cli`
* Navigate to desired directory and run ```git clone https://github.com/Sakela17/streamlined-beauty-app.git``` to clone this repo
* `cd` into the project's folder and run `npm install` to install dependencies
* Run `ng serve --open` to run the app in the dev mode
* Open [http://localhost:4200](http://localhost:4200) to view it in the browser
* To set up the server, please refer to this [readme](https://github.com/Sakela17/streamlined-beauty-app-api) for the instructions
* Proceed to deployment steps once the server has been deployed
#### Deployment
* Create a production build by running ```npm run build```
* Install [Netlify CLI](https://www.netlify.com/docs/cli/) globally with `npm install -g netlify-cli`
* Create a Netlify app ```netlify create```. This will automatically add a file called ```.netlify``` to the root dir
* Create ```.gitignore``` file and add ```.netlify``` and ```/node_modules``` 
* Deploy the app by running ```netlify deploy -p ./dist -t <YOUR_ACCESS_TOKEN> -s <YOUR_SITE_ID>```  
  - to get ```<YOUR_ACCESS_TOKEN>``` run ```cat ~/.netlify/config```  
  - get ```<YOUR_SITE_ID>``` (without quotes) from ```.netlify``` file in the root dir

## Built With
 
 [Angular CLI](https://github.com/angular/angular-cli)
 
 [Angular6](https://angular.io/)
 
