const postTemplate = require('../templates/posts.handlebars')
// const store = require('../store')

const clearForms = () => {
  $('form').trigger('reset')
}

const createPostSuccess = data => {
  clearForms()
  console.log(data)
}

const getPostsSuccess = data => {
  clearForms()
  console.log(data)
  const showPostsHtml = postTemplate({ posts: data.posts })
  $('#posts').html(showPostsHtml)
  // debugger
}

const getMyPostsSuccess = data => {
  clearForms()
  console.log(data)
  const showPostsHtml = postTemplate({ posts: data.posts })
  $('#posts').html(showPostsHtml)
}
const updatePostSuccess = data => {
  clearForms()
  console.log(data)
}

const createCommentSuccess = data => {
  clearForms()
  console.log(data)
}

const deleteCommentSuccess = data => {
  clearForms()
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
  updatePostSuccess,
  deleteCommentSuccess
  // onGetCommentsOfAPost
}
