# Weather CityWatch (Reactjs, Bootstrap) 
## Description
* This is the repository that holds the source code of [Weather CityWatch](https://weathercitywatch.netlify.app/). It has been developed using Reactjs and bootstrap.

## Deployed at
* [weathercitywatch.netlify.app](https://weathercitywatch.netlify.app/)

## Setup/Installation Requirements
##### Install Dependencies

```
npm install
```

##### Run React Development Server

```
npm run start
```

##### To Build for Production

```
npm run build
Know how to host at heroku.com - https://dev.to/destrodevshow/how-to-deploy-react-app-to-heroku-in-5-minutes-3dni

⚠️ To deploy to heroku consider moving package-lock.json outside the project folder then you can perform this commands: git add . && git commit -m"deploy to heroku" && git push heroku master
⚠️ Then after the application has been published and the hosting link works RETURN THE package-lock.json to the project folder.
⚠️ Source: https://github.com/bazelbuild/rules_nodejs/issues/2452
```

## How It Was Built
##### Create React App
```
npx create-react-app
npm i --save bootstrap
```
##### Dependencies
* Bootstrap

### src folder structure
```
src/
  Components/
    FormInputComponent.jsx     ResultsCardComponent.jsx
    InstructionsComponent.jsx  WelcomeMessageComponent.jsx
    ResultsCardComponent.css
  App.css
  App.test.js
  index.css
  logo.svg 
  setupTests.js
  App.jsx
  index.js 
  reportWebVitals.js
```

## License and Copyright Information.
See [my MIT LICENSE](https://github.com/kimanicharles911/weather_citywatch/blob/master/LICENSE.txt) for details.