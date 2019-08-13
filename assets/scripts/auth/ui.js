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
const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
  }, 5000)
}
const signUpSuccess = responseData => {
  successMessage('You signed up successfully!')
  $('.myModal').modal('hide')
  hideMessaging()
}
const signUpFailure = responseData => {
  failureMessage('Sign up failed!')
  hideMessaging()
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
  $('#new-post').show()
  store.user = responseData.user
  successMessage('You signed in successfully!')
  hideMessaging()
  // successMessage(store.user.token)
}
const signInFailure = () => {
  failureMessage('Sign in failed!')
  hideMessaging()
}
const signOutSuccess = responseData => {
  $('form').trigger('reset')
  $('.myModal').modal('hide')
  successMessage('You signed out successfully!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#new-post').hide()
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
  hideMessaging()
}
const signOutFailure = responseData => {
  failureMessage('Sign out failed!')
  hideMessaging()
}
const changePasswordSuccess = responseData => {
  successMessage('You changed your password!')
  $('.myModal').modal('hide')
  hideMessaging()
}
const changePasswordFailure = responseData => {
  failureMessage('Password not changed!')
  hideMessaging()
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
