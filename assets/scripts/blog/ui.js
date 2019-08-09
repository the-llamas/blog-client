const postTemplate = require('../templates/posts.handlebars')
const commentTemplate = require('../templates/comments.handlebars')
// const store = require('../store')

const createPostSuccess = data => {
  console.log(data)
}

const getPostsSuccess = data => {
  console.log(data)
  const showPostsHtml = postTemplate({ posts: data.posts })
  $('#posts').html(showPostsHtml)
}

const getCommentsSuccess = data => {
  console.log(data)
  const showCommentsHtml = commentTemplate({ comments: data.comments })
  $('#comments').html(showCommentsHtml)
}

const getMyPostsSuccess = data => {
  console.log(data)
  const showPostsHtml = postTemplate({ posts: data.posts })
  $('#posts').html(showPostsHtml)
}

const failure = data => console.log('fail data', data)

// const onGetCommentsOfAPost = data => {
//   console.log(data)
//   const showCommentsHtml = commentTemplate({ comments: data.comments })
//   $('#comments').html(showCommentsHtml)
// }

module.exports = {
  getPostsSuccess,
  createPostSuccess,
  getCommentsSuccess,
  getMyPostsSuccess,
  failure
  // onGetCommentsOfAPost
}
