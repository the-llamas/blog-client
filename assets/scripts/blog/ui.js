const postTemplate = require('../templates/posts.handlebars')
// const store = require('../store')

const clearForms = () => {
  $('form').trigger('reset')
}

const createPostSuccess = data => {
  clearForms()
  $('.myModal').modal('hide')
}

const getPostsSuccess = data => {
  clearForms()
  const showPostsHtml = postTemplate({ posts: data.posts })
  $('#posts').html(showPostsHtml)
  // debugger
}

// const getMyPostsSuccess = data => {
//   clearForms()
//   const showPostsHtml = postTemplate({ posts: data.posts })
//   $('#posts').html(showPostsHtml)
// }

const updatePostSuccess = data => {
  clearForms()
  $('.updatePostModal').modal('hide')
}

const updateCommentSuccess = data => {
  clearForms()
  $('.updateCommentModal').modal('hide')
}
const createCommentSuccess = data => {
  clearForms()
  $('.createCommentModal').modal('hide')
}

const deleteCommentSuccess = data => {
  clearForms()
}

// const showCommentsHtml = commentTemplate({ comments: data.comments })
//  $('#comments').html(showCommentsHtml)
const failure = data => {}

// const onGetCommentsOfAPost = data => {
//   const showCommentsHtml = commentTemplate({ comments: data.comments })
//   $('#comments').html(showCommentsHtml)
// }

module.exports = {
  getPostsSuccess,
  createCommentSuccess,
  createPostSuccess,
  // getMyPostsSuccess,
  failure,
  updatePostSuccess,
  deleteCommentSuccess,
  updateCommentSuccess
  // onGetCommentsOfAPost
}
