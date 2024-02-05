# Project 12 - Build an analytics dashboard with React 

## 1. General information
This repo contains all the source code to install and lauch the project

## 2. Getting started

### Prerequisite
- [NodeJS](https://nodejs.org/en/) 
- [Yarn](https://yarnpkg.com/getting-started/install) 
- [Visual Studio Code](https://code.visualstudio.com/) or another IDE

### Dependencies
- [React](https://fr.reactjs.org/) 
- React-dom 
- React-router-dom 
- [Recharts](https://recharts.org/en-US/) 

## 3. Launching the project (with Docker)
### 3.1 Backend Api
- [ ] Fork the repository of backend api : [P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
- [ ] Clone it on your computer : `git clone`
- [ ] Install the dependencies: `yarn install`

- [ ] The `docker image build --no-cache -t micro-api .` command will allow you to build your image
- [ ] The `docker container run --name micro-api -p 3000:3000 -dt micro-api` yarn command will allow you to
      create your Docker container and run your image on port 3000
- [ ] The `docker container stop micro-api` command will allow you to stop your micro-api
- [ ] The `docker container rm micro-api` command will allow you to delete your micro-api container
- [ ] Finally, if you have VsCode, you can easily launch your project in a docker environment with `npm start` command

:sparkles: Magic happens on port **3000** :sparkles:

### 3.2 Front-end app
- [ ] Clone this repository on your computer : [Sportsee App](https://github.com/nivoix/SportSee)
- [ ] Install the dependencies : `npm install`
- [ ] Run the Backend api on port 3000 by default : `npm start`
- [ ] You will see this message : Something is already running on your port 3000. Would you like to run the app on another port instead (Y/N)
- [ ] Type: `Y` 
- [ ] The application run on port **3001**

## 4. Endpoints
### 4.1 Possible endpoints
This project includes four endpoints that you will be able to use:

- http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
- http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
- http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

### 4.2 Examples of queries
- http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
- http://localhost:3000/user/18 - Retrieves user 18's main information.

:warning: **Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**
