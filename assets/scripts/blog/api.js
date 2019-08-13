const config = require('../config')
const store = require('../store')

const getPosts = () => {
  return $.ajax({
    url: config.apiUrl + '/posts'
  })
}

const getComments = () => {
  return $.ajax({
    url: config.apiUrl + '/comments'
  })
}

// const showPost = function () {
//   return $.ajax({
//     url: config.apiUrl + '/posts/:id',
//     method: 'GET'
//   })
// }

// const getMyPosts = () => {
//   return $.ajax({
//     url: config.apiUrl + '/posts-user/' + store.user._id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const getCommentsOfAPost = () => {
  return $.ajax({
    url: config.apiUrl + '/comments-???'
  })
}
const createPost = formData => {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createComment = formData => {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePost = id => {
  return $.ajax({
    url: config.apiUrl + '/posts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteComment = id => {
  return $.ajax({
    url: config.apiUrl + '/comments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePost = (formData, id) => {
  // debugger
  return $.ajax({
    url: config.apiUrl + '/posts/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateComment = (formData, id) => {
  // debugger
  return $.ajax({
    url: config.apiUrl + '/comments/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updateComment = (formData, id) => {
//   return $.ajax({
//     url: config.apiUrl + '/posts/' + id,
//     method: 'PATCH',
//     data: formData,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  getPosts,
  getComments,
  // showPost
  createComment,
  // getMyPosts,
  getCommentsOfAPost,
  createPost,
  deletePost,
  deleteComment,
  updatePost,
  updateComment
}
