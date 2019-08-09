// handlebars reference
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onGetPosts = event => {
  if (event) {
    event.preventDefault()
  }
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

const onEditButton = event => {
  event.preventDefault()
  const button = $(event.target)
  // if (button.attr('class') !== 'btn') {
  //   button = button.parent()
  // }
  const post = button.parent()
  const id = button.data('id')
  const form = $('#update-post').children()
  form.eq(1).val(id)
  form.eq(2).val(post.attr('title'))
  form.eq(3).val(post.attr('text'))
}

const onUpdatePost = event => {
  if (event) {
    event.preventDefault()
  }
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.post.id
  api.updatePost(formData, id)
    .then(ui.updatePostSuccess)
    .then(onGetPosts)
    .catch(ui.failure)
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
    .then(onGetPosts)
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
    .then(onGetPosts)
    .catch(ui.failure)
    // const postID = $(event.target).closest('div').data('id')
}

module.exports = {
  onGetPosts,
  onGetMyPosts,
  onGetComments,
  // onShowPost,
  onEditButton,
  onUpdatePost,
  onUpdateComment,
  onCreateComment,
  onCreatePost,
  onDeletePost
  // onGetCommentsOfAPost
}
