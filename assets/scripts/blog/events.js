// handlebars reference
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onGetPosts = event => {
  event.preventDefault()
  api.getPosts()
    .then(ui.getPostsSuccess)
    .catch(ui.failure)
}

const onGetMyPosts = event => {
  event.preventDefault()
  console.log(event)
  api.getMyPosts()
    .then(ui.getMyPostsSuccess)
    // .then()
    .catch(ui.failure)
}

const onGetComments = event => {
  event.preventDefault()
  api.getComments()
    .then(ui.getCommentsSuccess)
    .catch(ui.failure)
}

// const onGetCommentsOfAPost = event => {
//   event.preventDefault()
//   api.getCommentsOfAPost('event.post.id???????????')
//     .then(ui.getCommentsOfAPostSuccess)
//     .catch(ui.failure)
// }

// const onShowPost = event => {
//   event.preventDefault()
//   api.showPost()
//     .then()
//     .catch()
// }

const onUpdatePost = event => {
  api.updatePost()
    .then()
    .catch()
}
const onUpdateComment = event => {
  api.updateComment()
    .then()
    .catch()
}
const onCreateComment = event => {
  api.createComment()
    .then()
    .catch()
}
const onCreatePost = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createPost(formData)
    .then(ui.createPostSuccess)
    .catch(ui.failure)
}
const onDeletePost = event => {
  if (event) {
    event.preventDefault()
  }
  const button = $(event.target)
  const id = button.data('id')
  // if (button.attr('class') !== 'btn') {
  //   // debugger
  //   button = button.parent()
  // }
  // onClearCharacters()
  api.deletePost(id)
    .then(ui.deletePostSuccess)
    .catch(ui.failure)
    // const postID = $(event.target).closest('div').data('id')
}

module.exports = {
  onGetPosts,
  onGetMyPosts,
  onGetComments,
  // onShowPost,
  onUpdatePost,
  onUpdateComment,
  onCreateComment,
  onCreatePost,
  onDeletePost
  // onGetCommentsOfAPost
}
