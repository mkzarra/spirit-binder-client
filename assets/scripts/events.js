const spiritApi = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')
const spiritUi = require('./ui')
// const store = require('./store')



const activateCreateFields = function (event) {
  event.preventDefault()
  $('#create-whiskey').css('display', 'block')
  $('#create-whiskey-fields').css('display', 'block')
  $('.text-input-create').css('display', 'block')
  $('#create-button').css('display', 'block')
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
  spiritApi.signOut()
    .then(spiritUi.onSignOutSuccess)
    .catch(spiritUi.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  spiritApi.changePassword(data)
    .then(spiritUi.onChangePasswordSuccess)
    .catch(spiritUi.onChangePasswordFailure)
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
  console.log(data)
  debugger
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
  } else {
    console.log(store.whiskeys)
    debugger
    this.push(store.whiskeys)
    spiritApi.createBottle()
      .then(spiritUi.onCreateSuccess)
      .catch(spiritUi.onCreateError)
  }
}

const onDeleteBottle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
    spiritApi.destroyBottle(data.whiskeys.id)
      .then(spiritUi.onDeleteSuccess)
      .then(spiritUi.onGetBottlesSuccess)
      .catch(spiritUi.onDeleteFailure)
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
  activateCreateFields,
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