// handlebars reference
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onGetPosts = event => {
  if (event) {
    event.preventDefault()
  }
  api.getPosts()
    .then(ui.getPostsSuccess)
    .then(() => {
      $('#posts').find('button[user!="' + store.user._id + '"]').hide()
      $('.add-comment-to-post').show()
      if (!store.user || store.user._id === '888') {
        $('#posts').find('button').hide()
        $('.add-comment-to-post').hide()
      } else {
        $('.add-comment-to-post').show()
      }
    })
    .catch(ui.failure)
}

// const onGetMyPosts = event => {
//   event.preventDefault()
//   api.getMyPosts()
//     .then(ui.getMyPostsSuccess)
//     // .then()
//     .catch(ui.failure)
// }

// const onShowPost = event => {
//   event.preventDefault()
//   api.showPost()
//     .then()
//     .catch()
// }

const onEditPostButton = event => {
  event.preventDefault()
  const button = $(event.target)
  // if (button.attr('class') !== 'btn') {
  //   button = button.parent()
  // }
  const post = button.parent()
  const id = button.data('id')
  const form = $('#update-post').children()
  form.eq(0).val(id)
  form.eq(1).val(post.attr('title'))
  form.eq(2).val(post.attr('text'))
}

const onAddCommentToPost = event => {
  event.preventDefault()
  const button = $(event.target)
  // if (button.attr('class') !== 'btn') {
  //   button = button.parent()
  // }
  const id = button.data('id')
  const form = $('#create-comment').children()
  form.eq(0).val(id)
}

const onEditCommentButton = event => {
  event.preventDefault()
  const button = $(event.target)
  // if (button.attr('class') !== 'btn') {
  //   button = button.parent()
  // }
  const id = button.data('id')
  const form = $('#update-comment').children()
  form.eq(0).val(id)
  form.eq(1).val(button.attr('text'))
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
  if (event) {
    event.preventDefault()
  }
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.comment.id
  api.updateComment(formData, id)
    .then(ui.updateCommentSuccess)
    .then(onGetPosts)
    .catch(ui.failure)
}

const onCreateComment = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createComment(formData)
    .then(ui.createCommentSuccess)
    .then(onGetPosts)
    .catch(ui.failure)
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

const onDeleteCommment = event => {
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
  api.deleteComment(id)
    .then(ui.deleteCommentSuccess)
    .then(onGetPosts)
    .catch(ui.failure)
    // const postID = $(event.target).closest('div').data('id')
}

module.exports = {
  onGetPosts,
  // onGetMyPosts,
  // onGetComments,
  // onShowPost,
  onEditPostButton,
  onUpdatePost,
  onUpdateComment,
  onCreateComment,
  onCreatePost,
  onDeletePost,
  onAddCommentToPost,
  onDeleteCommment,
  onEditCommentButton
  // onGetCommentsOfAPost
}
