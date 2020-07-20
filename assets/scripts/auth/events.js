const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store =require('../store')


const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports= {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
