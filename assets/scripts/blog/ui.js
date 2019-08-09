const postTemplate = require('../templates/posts.handlebars')
// const store = require('../store')

const createPostSuccess = data => {
  console.log(data)
}

const getPostsSuccess = data => {
  console.log(data)
  const showPostsHtml = postTemplate({ posts: data.posts })
  $('#posts').html(showPostsHtml)
}

const getMyPostsSuccess = data => {
  console.log(data)
  const showPostsHtml = postTemplate({ posts: data.posts })
  $('#posts').html(showPostsHtml)
}
const updatePostSuccess = data => {
  console.log(data)
}

const createCommentSuccess = data => {
  console.log(data)
}
// const showCommentsHtml = commentTemplate({ comments: data.comments })
//  $('#comments').html(showCommentsHtml)
const failure = data => console.log('fail data', data)

// const onGetCommentsOfAPost = data => {
//   console.log(data)
//   const showCommentsHtml = commentTemplate({ comments: data.comments })
//   $('#comments').html(showCommentsHtml)
// }

module.exports = {
  getPostsSuccess,
  createCommentSuccess,
  createPostSuccess,
  getMyPostsSuccess,
  failure,
  updatePostSuccess
  // onGetCommentsOfAPost
}
