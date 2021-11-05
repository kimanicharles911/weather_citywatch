# Weather CityWatch (Reactjs, Bootstrap, Jest, react-testing-library) 
## Description
* This is the repository that holds the source code of [Weather CityWatch](https://weathercitywatch.netlify.app/). It has been developed using Reactjs and bootstrap.

## Deployed at
* [weathercitywatch.netlify.app](https://weathercitywatch.netlify.app/)

## Setup/Installation Requirements
##### Install Dependencies

```sh
npm install
```

##### Run React Development Server

```sh
npm run start
```

##### To Build for Production

```sh
npm run build
Know how to host at heroku.com - https://dev.to/destrodevshow/how-to-deploy-react-app-to-heroku-in-5-minutes-3dni

⚠️ To deploy to heroku consider moving package-lock.json outside the project folder then you can perform this commands: git add . && git commit -m"deploy to heroku" && git push heroku master
⚠️ Then after the application has been published and the hosting link works RETURN THE package-lock.json to the project folder.
⚠️ Source: https://github.com/bazelbuild/rules_nodejs/issues/2452
```

## Testing
```sh
npm run test
```

##### Unit Tests
```sh
src/
  components/
    __tests__/
      Async.test.js
```
##### Snapshot Tests
```sh
src/
  __tests__/
    ResultsCardComponent.test.js
    FormInputComponent.test.js
```

## How It Was Built
##### Create React App
```sh
npx create-react-app
npm i --save bootstrap
npm i react-test-renderer
npm i --save-dev enzyme
npm i --save-dev @wojtekmaj/enzyme-adapter-react-17
npm i --save-dev jest-fetch-mock
```
##### Dependencies
* Bootstrap
* Enzyme
* Enzyme Adapter React 17
* React Test renderer
* Jest Fetch Mock

### src folder structure
```sh
src/
  components/
    FormInputComponent.jsx     
    ResultsCardComponent.jsx
    InstructionsComponent.jsx  
    WelcomeMessageComponent.jsx
    ResultsCardComponent.css
  __tests__/
    Async.test.js
    ResultsCardComponent.test.js
    FormInputComponent.test.js
    __snapshots__/
      FormInputComponent.test.js.snap
      ResultsCardComponent.test.js.snap
  App.css
  index.css
  logo.svg 
  setupTests.js
  App.jsx
  index.js 
  reportWebVitals.js
```

## License and Copyright Information.
See [my MIT LICENSE](https://github.com/kimanicharles911/weather_citywatch/blob/master/LICENSE.txt) for details.