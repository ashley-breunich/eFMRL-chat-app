# eFMRL Chat

## Synopsis

eFMRL Chat is an app similar to Slack allowing users and developers to communicate and view messages instantly. However, eFMRL stands out because the user will only view the last 15 messages giving the user or developer an opportunity to focus on specific topics that matter. In a short time, the content will disappear and a new topic will emerge. The following packages were utilized throughout the project: 

##### * **IAM Management** for account management and permissions
##### * **DynamoDB** for persistence
##### * **CloudWatch** for logging
##### * **API Gateway** for exposing API endpoints coded up in our Node.js project
##### * **AWS Lambda** for managing our serverless lambda functions
##### * **serverless CLI**
##### * **AWS SDK for Node.js**
##### * **Express**
##### * **Socket.io**
##### * **Superagent**
##### * **johnfellows/aws-tools”: “^1.0.5"**
##### * **React”: “^16.7.0"**
##### * **React-dom”: “^16.7.0"**
##### * **React-scripts”: “2.1.3"**
##### * **socket.io-client”: “^2.2.0"**

## Motivation

eFRML chat was created due to the fact that users in the business industry and developers utilized Slack and realized that myriad of messages was loaded in a specific chat room with several topics instead of one specific topic. 

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In order to make edits to this application for your own use, you will need a basic understanding of JavaScript, [Socket.io](https://socket.io/docs/), and [React](https://reactjs.org/). 

If you need to make edits to these files, fork [the socket.io client](https://github.com/ashley-breunich/final-chat-app) repo, clone it down to your computer, and install all of the dependecies (npm install). In order to run it locally, type 'npm start' into your CLI. It will start up on port 3001. 

This repository is currently connected to a socket.io server hosted on Heroku. In order to make edits to the server-side code, fork and clone [this repo](https://github.com/edpuzino/chat-app). In order to run the server locally, type 'nodemon' into your CLI and leave it running while your client code is also running. 

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Accessing the Site

Anyone can log in and interact with the site at [www.efmrlchat.com](https://dolzevpkmrz8a.cloudfront.net/).

### Setup
#### `.env` requirements
* `NODE PATH` - NODE_PATH=src (for testing purposes)

## Code Examples

![react state](/src/assets/react-state.png)
React State Management

![socket io example](/src/assets/socket-io-example.png)
Socket.io Example

## Modules

### `app.js`
#### Exported Values and Methods

##### `Class App`

###### `render() -> div`
--> Header Component

--> Chatter Component

### `header.js`
#### Exported Values and Methods

##### `Header - Functional Component`
<-- props

--> header which include an img tag

### `if.js`
#### Exported Values and Methods

##### `If - Functional Component`
<-- props

--> props.children if TRUE or null if FALSE

### `moniker.js`
#### Exported Values and Methods

##### `Moniker - Functional Component`
<-- props

--> form with an input and a p tag

### `monikerLS.js`
#### Exported Values and Methods

##### `MonikerLS Class`
<-- props

--> div with headers (h2 and h3) and two buttons

### `rooms.js`
#### Exported Values and Methods

##### `Rooms Class`
<-- props

--> h2 and iterates over buttons that acts as the room option navigation

### `chat.js`
#### Exported Values and Methods

##### `Chatter Class`
Controls the overall app state and interacts with the socket.io server (this is the only component that does so)

##### `updateWords()`
<-- words

Sets the state: wordCount & words

It also controls the number of messages shown. It shifts the oldest value off the array once the wordCount is greater than 15.

##### `updateNicknames()`
<-- nickname

Sets the state: tempNames

It also controls the number of nicknames shown. It shifts the oldest value off the array once the wordCount is greater than 15.

##### `updateTimestamps()`
<-- timestamp

Sets the state: timestamps

It converts the timestamp to the correct timezone and also controls the number of timestamps shown. It shifts the oldest value off the array once the wordCount is greater than 15.

##### `updateRooms()`
<-- event

Sets the state: previousRoom & currentRoom

It emits 'room' with the current room value (event.target.value) and the previous room value (this.state.currentRoom).

##### `handleSubmit()`
<-- event

It prevents default (reloading) and resets the form details.

It also emits 'submit' with the typed form input and the current room.

##### `handleNewWords()`
<-- event

Sets the state: typedInput

##### `handleName()`
<-- event

Sets the state: moniker

##### `clearLSandRefresh()`
<-- event

Clears local storage and refreshes the window.

##### `handleNameSubmit()`
<-- event

It prevents default

Sets the state: moniker

Sets local storage

It emits 'new user' with the name value. If the name comes back true from the server (meaning it is not a name currently in the name array), it sets the loggedIn state to TRUE and emits 'room' with the current and previous room names. If the name comes back false from the server (meaning it is a duplicate name of someone already in the array), it sets the error state and forces the user to log in again. 

##### `render()`
--> MonikerLS Component

--> Moniker Component 

--> all of the content of the chat (the room column and the chat column)

## Testing
The React components of this application are tested with Enzyme. The testing that was completed made sure certain elements were rendering properly. 

## Contributors

### Product Manager: 
[Juan Betancourt](https://www.linkedin.com/in/juan11/) 

### Developers:

##### _**UI Team**_
[Ashley Breunich](https://www.linkedin.com/in/ashley-breunich/) 

[James Denton](https://www.linkedin.com/in/jamesmorgandenton/)

[Brandon Haynes](www.linkedin.com/in/brandonhaynes100 )

[Matt McQuain](https://www.linkedin.com/in/matthew-mcquain/)

##### _**Dev OPS Team**_
[Hai Le](https://www.linkedin.com/in/hai-le-50a726163/)

[Hollie Thomas](https://www.linkedin.com/in/holliemthomas/)

##### _**Server Team**_
[Michael Kermes](https://www.linkedin.com/in/mkermes/)

[James McDaniel](https://www.linkedin.com/in/james-l-mcdaniel/)

[Ed Puzino](https://www.linkedin.com/in/edward-puzino/)

##### _**Database Team**_
[Kevin O'Halloran](https://www.linkedin.com/in/kevin-ohalloran/)

[Chris Kozlowski](https://www.linkedin.com/in/kozlowskicd)

## License
#### MIT License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.