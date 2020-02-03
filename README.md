### To Run Project:

Please use node version 10.9.0

### Libraries Used for Project Build and Server-Side Routing:

* babel
* express
* hbs
* react
* webpack
* nodemon

### `npm install`

Installs all corresponding node modules for project and build.

### `npm start`

Runs the node server; which listens on port 8081 (based on the config.js file in the root directory). I've created a
node server which listens for request on the client files and connects to Clinical Interventions API on the
server-side.

### `npm run dev`

In another Terminal window; run the build files to generate the React scripts to render the UI on the Client side.

### Future Work

I've created a server to listen to requests on the server side and handle these requests and API routing on the
server files. My goal was to persist a file which logs all the client request terms and keeps the Clinical Trials API
responses in one file or database.

I would have liked to be able to route interventions data to the client
using server-side rendering. This feature would allow the user to view a list of historical terms that they can
reference without having to access the external Clinical Trials API but historical references on the server.