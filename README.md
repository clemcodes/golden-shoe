# Golden Shoe

## Built with
React, CSS3, React-Bootstrap, Node.js, Express.js, MongoDB

## Get Started
This project uses ES Modules in the backend, so make sure you have at least Node v14.6+ to run the project

### Env Variables
Create a .env file in the root directory and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
```

### Install Dependencies & Run
Run the following commands to install all the dependencies and run the prototype, given `node` and `npm` is available:
1. Change to client folder - `npm install`
2. Change back to the root directory - `npm install`
3. To run both frontend(:3000) and backend(:5000) - `npm run dev`


### Seed Database
You can use the following commands to seed the database
```
// To import data
npm run data:import

// To destroy data
npm run data:destroy
```
