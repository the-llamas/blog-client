const store = require('../store')
// const events = require('./events')

const successMessage = message => {
  $('form').trigger('reset')
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  // Clear getFormFields
  $('form').trigger('reset')
}
const signUpSuccess = responseData => {
  successMessage('You signed up successfully!')
  $('.myModal').modal('hide')
}
const signUpFailure = responseData => {
  failureMessage('Sign up failed!')
}
const signInSuccess = responseData => {
  $('form').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#modalButton').text('Change-Password/Sign-Out')
  $('#exampleModalLabel').text('Change-Password/Sign-Out')
  $('.myModal').modal('hide')
  $('#update-post').show()
  $('#show-post').show()
  $('#create-comment').show()
  $('#create-post').show()
  $('#update-comment').show()
  $('#change-password').show()
  $('#posts').show()
  $('#create-post').show()
  $('#index-posts').show()
  store.user = responseData.user
  successMessage('You signed in successfully!')
  // successMessage(store.user.token)
}
const signInFailure = () => {
  failureMessage('Sign in failed!')
}
const signOutSuccess = responseData => {
  $('form').trigger('reset')
  $('.myModal').modal('hide')
  successMessage('You signed out successfully!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#index-posts').hide()
  store.user = {}
  store.user._id = '888'
  $('#update-post').hide()
  $('#show-post').hide()
  $('#create-comment').hide()
  $('#create-post').hide()
  $('#update-comment').hide()
  $('#posts').show()
  $('#modalButton').text('Sign In / Sign Up')
  $('#exampleModalLabel').text('Sign In / Sign Up')

}
const signOutFailure = responseData => {
  failureMessage('Sign out failed!')
}
const changePasswordSuccess = responseData => {
  successMessage('You changed your password!')
  $('.myModal').modal('hide')
}
const changePasswordFailure = responseData => {
  failureMessage('Password not changed!')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
