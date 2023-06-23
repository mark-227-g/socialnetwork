# socialnetwork

NoSQL Social Network API

Challenge 18

## Author

Mark Edwards

## Deployment

clone git repository ```https://github.com/mark-227-g/socialnetwork```

This runs in expressjs

* npm install
* npm run seed
* npm start

## Usage

use insomnia to test
Example:

* Get all
  * get http://localhost:3001/api/thought
* Get by id
  * get http://localhost:3001/api/thought/1
* Create
  * post http://localhost:3001/api/thought
  * Update
    * put http://localhost:3001/api/thought/6
  * Delete
    * http://localhost:3001/api/categories/6

### Video
  
* [Video Part 1](https://github.com/mark-227-g/socialnetwork/images/video1.mov)
* [Video Part 2](https://github.com/mark-227-g/socialnetwork/images/video1.mov)
* [Video Part 3](https://github.com/mark-227-g/socialnetwork/images/video1.mov)
* [Video Part 4](https://github.com/mark-227-g/socialnetwork/images/video1.mov)
* [Video Part 5](https://github.com/mark-227-g/socialnetwork/images/video1.mov)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

```

## Technology used

* expressjs
* node.js
* MongoDB
* Mongoose
* insomnia
* ORM
* CU Week "18 - NoSQL" for sample code

## References

* [node.js documentation](https://nodejs.org/dist/latest-v19.x/docs/api/)
* [npm documentation](https://docs.npmjs.com)
* [expressjs](https://expressjs.com)
* [MongoDB](https://www.mongodb.com/docs/)
* [Mongoose](https://mongoosejs.com)
* [github](https://github.com/mark-227-g/ecommerce)
  