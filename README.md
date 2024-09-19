Here’s the revised README without the acceptance criteria section:

---

# Social Network API

## Description
The Social Network API is a Node.js application designed to provide backend functionality for a social networking platform. Built using Express.js, MongoDB, and Mongoose, this API allows users to create and manage their profiles, share thoughts, react to friends’ thoughts, and build a friend list. The application follows the NoSQL approach to handle large amounts of unstructured data efficiently.

## User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Getting Started

1. **Installation**:
   - Clone the repository.
   - Navigate to the project directory and install dependencies using `npm install`.
   - Ensure MongoDB is installed and running locally.
   - Update your environment variables with your MongoDB connection string in a `.env` file.
   - Start the application using `npm start`.

2. **Models**:
   - **User Model**:
     - `username`: String, unique, required, trimmed.
     - `email`: String, required, unique, valid email format.
     - `thoughts`: Array of ObjectId values referencing the Thought model.
     - `friends`: Array of ObjectId values referencing the User model.
     - Virtual field `friendCount` to retrieve the length of the friends array.
   - **Thought Model**:
     - `thoughtText`: String, required, 1-280 characters.
     - `createdAt`: Date, default to current timestamp with a getter to format the timestamp.
     - `username`: String, required.
     - `reactions`: Array of nested documents using the reactionSchema.
     - Virtual field `reactionCount` to retrieve the length of the reactions array.
   - **Reaction Schema** (subdocument):
     - `reactionId`: ObjectId, default to new ObjectId.
     - `reactionBody`: String, required, 280 characters max.
     - `username`: String, required.
     - `createdAt`: Date, default to current timestamp with a getter to format the timestamp.

## API Routes
- **/api/users**:
  - GET all users
  - GET a single user by _id with populated thoughts and friends data
  - POST a new user
  - PUT to update a user by _id
  - DELETE to remove a user by _id
- **/api/users/:userId/friends/:friendId**:
  - POST to add a new friend to a user's friend list
  - DELETE to remove a friend from a user's friend list
- **/api/thoughts**:
  - GET all thoughts
  - GET a single thought by _id
  - POST to create a new thought
  - PUT to update a thought by _id
  - DELETE to remove a thought by _id
- **/api/thoughts/:thoughtId/reactions**:
  - POST to create a reaction stored in a thought’s reactions array
  - DELETE to remove a reaction by its reactionId

## Walkthrough Video
A walkthrough video demonstrating the functionality of the Social Network API, including the API routes, can be viewed [here](https://link-to-your-video).

## License
This application is licensed under the MIT License.

## Contribution
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Repository
Check out the repository for this project [here](https://github.com/your-unique-repo-name).

## Contact
For questions, suggestions, or further information, reach out via email at [fredony.ernesto@gmail.com](mailto:fredony.ernesto@gmail.com). You can also find me on GitHub at [fredonyernesto](https://github.com/fredonyernesto).

## Demo
Please check out the demo [here](localhost:3001/api/thoughts/66eb6a158e39900f7a5e0d19/reactions/);