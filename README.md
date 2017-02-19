# ANDigital FourSquare Search Dev Test

## Installation
```bash
git clone git@github.com:alexjfno1/andigital-foursquare-search.git
cd andigital-foursquare-search/
npm install
```

## Start
```bash
npm start
```
Navigate to localhost:1234

## Run tests
```bash
npm test
```

## Approach
1. I began by doing some API investigation after signing up to FourSquare and found the `/venues/explore` endpoint to be the most suitable.

2. I started with my own base React with Redux app the help speed up the initial setup of the app. [https://github.com/alexjfno1/react-redux-starter](https://github.com/alexjfno1/react-redux-starter)

3. Broke the task into 2 simple requirements.
  1. As a customer I want to be able to search for popular and recommended places using a place name.
  2. As a customer I want to see a list of popular and recommended places based on my search.
  
4. Used the requirements to build the product until they were met.

5. Used TDD throughout the development of the product to give confidence and help refactorings.

## Technology used
### Frameworks & Libraries
* React
* Redux
* SCSS
* ES6 (ES2015)

### Build Tools
* Webpack
* Babel

## What I would improve
1. Create a server side endpoint for the client side app to call in order to proxy the search request. This would allow the ClientID and ClientSecret to be stored in Environment Variables as you don't want these to be exposed. (I have put left them in this project in order for the app to be in a working state without any setup).

2. I would add some browser driven tests (probably selenium based) in order to test the integration with the real API.

3. Add some more detailed error messages for the customer. E.g. Location not found for search term.

4. Possibly display more information about each result but this would depend on more detailed requirements.
