# Llama Blogging Platform
Front-end [ [Repo](https://github.com/the-llamas/Front-End---Blog) / [Deployed](https://the-llamas.github.io/Front-End---Blog) ]

Back-end [ [Repo](https://github.com/the-llamas/blog-api) / [Deployed](https://blog-api-back-end.herokuapp.com) ]
​
## Summary
This is a blogging plaform for blogging about llamas!
Users can view posts, create posts, and interact by adding comments to any users posts
​
## Technologies used
- Express
- Node.js + NPM
- Javascript
- MongoDB
- Mongoose
- Webpack
- Bootstrap
- Git
- GitHub
​
## Planning
Our initial planning process began with creating our Entity Relationship Diagram. Since our project required a user to have a relationship with blogs, and additionally for blogs to have relationships with both the user and comments, we initally planned on creating our blog collection first. Then upon blog collection creation success, we would make the collection for the comments and move forward from there.

## Process
​We first built the relationships between the user and blogs using mongoose in our Blog model. Once we had created the model, routes, imported the routes in our server, and used our routes for the Blog collection, we then moved on to creating our comment collection. Creating all of the requirements for the comments.

## Problem Solving Strategy
​Our problem solving strategy first began with asking outher teamates to review our work for errors. If this step was unsuccessful, we would then use a search engine or class documents to help us solve our problem.

On day 2 of the project, our team encountered a problem with updating a specific comment on a post that belonged to the user logged in. We solved this problem by using populate() available from mongoose.

On days 2-3 our team experienced trouble getting the edit/delete/new-comment buttons to show only on particular posts at varying times. The logic was updated so the user always has a token, but when signed out, it becomes an invalid token, allowing it to be referenced, but never equal to any of the tokens associated with a user. This eliminated indexing errors, but the overarching error was a missing ‘require’

## Wireframes
<img src="https://i.imgur.com/DXaBLZ5.png" width="100%" alt="Wireframes">

## User stories
- As a user, I want to sign up with email and password.
- As a user, I want to sign in with email and password.
- As a user, I want to change my password.
- As a user, I want to sign out.
- As a user, I want to see all blog posts and comments.
- When signed in, I want to create blog posts.
- When signed in, I want to comment on any blog post.
- When signed in, I want to update my blog posts and comments.
- When signed in, I want to delete my blog posts and comments.
​
## ERD
<img src="https://i.imgur.com/Mz3lQ1r.png" width="100%" alt="ERD">

## API Routes
| Verb   | URI Pattern        | Request Body      | Headers   | Action              |
|--------|--------------------|-------------------|-----------|---------------------|
| POST   | `/sign-up`         | **credentials**   | N/A       | user sign-up        |
| POST   | `/sign-in`         | **credentials**   | N/A       | user sign-in        |
| DELETE | `/sign-out`        | N/A               | **Token** | user sign-out       |
| PATCH  | `/change-password` | **passwords**     | **Token** | change-password     |
|        |                    |                   |           |                     |
| GET    | `/posts`           | N/A               | N/A       | index posts         |
| GET    | `/posts/:id`       | N/A               | N/A       | show single post    |
| POST   | `/posts`           | `post: {}`        | **Token** | create post         |
| PATCH  | `/posts/:id`       | post              | **Token** | update post         |
| DELETE | `/posts/:id`       | N/A               | **Token** | remove post         |
|        |                    |                   |           |                     |
| GET    | `/comments`        | N/A               | **Token** | index post comments |
| GET    | `/comments/:id`    | N/A               | **Token** | show post comment   |
| POST   | `/comments`        | `comment: {}`     | **Token** | create post comment |
| PATCH  | `/comments/:id`    | comment           | **Token** | update post comment |
| DELETE | `/comments/:id`    | N/A               | **Token** | delete post comment |

## Unsolved Problems
In the future our team would like to solve the following problems:

  - Ability for users to upload avatars
  - Ability for users to ‘follow’ other users
  - Show posts by post title or keywords
  - Show posts by user
  - More CSS
  - Ability to favorite or like posts/comments
