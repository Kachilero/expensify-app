# Expesify 
A simple expenses application written in [React](https://reactjs.org).

This repo follows along with Andrew J. Mead's [Complete React Web Developer Course](https://mead.io/).
The goal of the course is to build out this app and deploy it with [Heroku](https://www.heroku.com) while learning all of the concepts of React.

## Next Steps
- Connecting to [Firebase](https://firebase.google.com)
- Firebase with [Redux](https://redux.js.org)
- Styling and next the future

## Updates
- 12.2.218: Finished the basics of the app as well as testing. Have deployed the app to Heroku.

## List on NPM scrips
Use any of the following to build/deploy.
```json
    "dev-server": "webpack-dev-server",
    "express-server": "node server/server.js",
    "build:dev": "webpack",
    "build:prod": "webpack -p --env production",
    "build-watch": "webpack --watch",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch",
    "test": "jest --config=jest.config.json",
    "test-watch": "npm test -- --watch",
    "start": "node server/server.js",
    "heroku-postbuild": "npm run build:prod"
```

## List of libraries and technologies
For easy referrence

- [MomentJS](https://momentjs.com) - Parse, validate, manipulate and display dates and times in Javascript
- [NumeralJS](http://numeraljs.com) - A Javascript library for formatting and manipulating numbers
