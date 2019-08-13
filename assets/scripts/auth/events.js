const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const blogEvents = require('../blog/events')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then(() => {
      api.signIn(formData)
        .then(ui.signInSuccess)
        .then(blogEvents.onGetPosts)
        .catch(ui.signInFailure)
    })
    .catch(ui.signUpFailure)

}
const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .then(blogEvents.onGetPosts)
    .catch(ui.signInFailure)
}
const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.signOutSuccess)
    .then(blogEvents.onGetPosts)
    .catch(ui.signOutFailure)
}
const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword
}
