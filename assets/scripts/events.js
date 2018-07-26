const spiritApi = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')
const spiritUi = require('./ui')
const store = require('./store')

const activateSearchBar = function (event) {
  event.preventDefault()
  $('#search-bar').css('display', 'inline-block')
}
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

const onGetBottles = function (event) {
  event.preventDefault()
  spiritApi.getBottles()
    .then(spiritUi.onGetBottlesSuccess)
    .catch(spiritUi.onGetBottlesFailure)
}

const onFindBottle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  spiritApi.findBottle(data)
      .then(spiritUi.onFindBottleSuccess)
      .catch(spiritUi.onFindBottleFailure)
}

const onCreateBottle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const whiskeys = data.whiskeys
  if (whiskeys.name === '') {
    $('#message').text('Name is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.region === '') {
    $('#message').text('Region is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.age === null) {
    $('#message').text('Age is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.price === null) {
    $('#message').text('Price is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.classification === '') {
    $('#message').text('Class is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.description === '') {
    $('#message').text('Description is required')
    $('#message').css('color', 'red')
    return false
  }
  spiritApi.createBottle(data)
    .then(spiritsUi.onCreateSuccess)
    .catch(spiritUi.onCreateError)
}

const onDeleteBottle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const whiskeys = data.whiskeys
  if (whiskeys.id.length !== 0) {
    spiritApi.destroyBottle(whiskeys.id)
      .then(spiritUi.onDeleteSuccess)
      .catch(spiritUi.onDeleteFailure)
  }
}

const onUpdateBottle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const whiskeys = data.whiskeys
  if (whiskeys.name === '') {
    $('#message').text('Name is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.region === '') {
    $('#message').text('Region is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.age === null) {
    $('#message').text('Age is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.price === null) {
    $('#message').text('Price is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.classification === '') {
    $('#message').text('Class is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.description === '') {
    $('#message').text('Description is required')
    $('#message').css('color', 'red')
    return false
  }
  if (whiskeys.id.length !== 0) {
    spiritApi.updateBottle(data)
      .then(spiritUi.onUpdateBottleSuccess)
      .catch(spiritUi.onUpdateBottleFailure)
  }
  
}

module.exports = {
  activateSearchBar,
  onEngageSignUpModal,
  onEngageSignInModal,
  onEngagePasswordChangeModal,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetBottles,
  onFindBottle,
  onCreateBottle,
  onDeleteBottle,
  onUpdateBottle
}