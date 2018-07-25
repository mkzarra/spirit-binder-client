const spiritApi = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')
const spiritUi = require('./ui')
const store = require('./store')

const onEngageSignUpModal = function (event) {
  event.preventDefault()
  $('#signUpModal').modal('show')
}

const onEngageSignInModal = function (event) {
  event.preventDefault()
  $('#signInModal').modal('show')
}

const onEngagePasswordChangeModal = function () {
  event.preventDefault()
  $('#changePasswordModal').modal('show')
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  spiritApi.signUp(data)
    .then(spiritUi.onSignUpSuccess)
    .catch(spiritUi.onSignUpFailure)
  $('#signUpModal').modal('hide')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  spiritApi.signIn(data)
    .then(spiritUi.onSignInSuccess)
    .catch(spiritUi.onSignInFailure)
  $('#signInModal').modal('hide')
}

const onSignOut = function (event) {
  event.preventDefault()
  $('#signOutModal').modal('show')
  spiritApi.signOut()
    .then(spiritUi.signOutSuccess)
    .catch(spiritUi.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  spiritApi.changePassword(data)
    .then(spiritUi.onChangePasswordSuccess)
    .catch(spiritUi.onChangePasswordFailure)
  $('#changePasswordModal').modal('hide')
}

const onGetBottles = function () {
  spiritApi.getBottles()
    .then(spiritUi.onGetBottlesSuccess)
    .catch(spiritUi.onGetBottlesFailure)
}

const onFindBottle = function (event) {
  event.preventDefault()
  spiritApi.findBottle(whiskey.id)
    .then(spiritUi.onFindBottleSuccess)
    .catch(spiritUi.onFindBottleFailure)
}

module.exports = {
  onEngageSignUpModal,
  onEngageSignInModal,
  onEngagePasswordChangeModal,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetBottles,
  onFindBottle
}