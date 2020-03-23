# Write a REST API
In this assignment we will be writing a simple REST API. Both GET and POST methods will be used

## Steps
1. Clone the Repo
2. Complete the assigned coding tasks. Commit OFTEN!
3. Push to your repo

## Assignment
For this assignment you will be writing a simple REST API. You will need 3 API routes (URI's) 2 GET routes and 1 POST route. All the routes will return JSON formated data.

Using the express framework you will need to create the following routes:

### /api
A **HTTP GET** request will return any JSON formated data. Typically this is a validation message to make sure the user is accessing the API correctly

### /api/data
A **HTTP GET** request should return a JSON object with a data property and some fake data.

A **HTTP POST** request should return a JSON object with a query property containing the data request.

An **example** for the HTTP POST request:
POST data:

````{"data" : "QueryGoesHere" }````

The API would return:

````{"query" : "QueryGoesHere"}````


## Tips
- Don't forget to ````npm install```` after cloning :stuck_out_tongue:
- Use ````npm start```` to start the server. This will use a command line tool called [nodemon](http://nodemon.io/). Nodemon will watch for changes in the project folder and restart the server **AUTOMATICALLY** when you save a file. :smile:
- Use ````npm test``` to run the tests.
- When in doubt. Google it.

