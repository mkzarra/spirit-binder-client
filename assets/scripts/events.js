const spiritApi = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')
const spiritUi = require('./ui')

const activateCreateFields = event => {
  event.preventDefault()
  $('#create-whiskey').css('display', 'block')
  $('#create-whiskey-fields').css('display', 'block')
  $('.text-input-create').css('display', 'block')
  $('#create-button').css('display', 'block')
}

const activateUpdateFields = event => {
  event.preventDefault()
  $('#update-whiskey').css('display', 'block')
  $('#udpate-whiskey-fields').css('display', 'block')
  $('.text-input-update').css('display', 'block')
  $('#update-button').css('display', 'block')
}

const onEngageSignUpModal = event => {
  event.preventDefault()
  $('#signUpModal').modal('show')
}

const onEngageSignInModal = event => {
  event.preventDefault()
  $('#signInModal').modal('show')
}

const onEngagePasswordChangeModal = event => {
  event.preventDefault()
  $('#changePasswordModal').modal('show')
}

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  spiritApi.signUp(data)
    .then(spiritUi.onSignUpSuccess)
    .catch(spiritUi.onSignUpFailure)
  $('#signUpModal').modal('hide')
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  spiritApi.signIn(data)
    .then(spiritUi.onSignInSuccess)
    .catch(spiritUi.onSignInFailure)
  $('#signInModal').modal('hide')
}

const onSignOut = event => {
  event.preventDefault()
  spiritApi.signOut()
    .then(spiritUi.onSignOutSuccess)
    .catch(spiritUi.onSignOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  spiritApi.changePassword(data)
    .then(spiritUi.onChangePasswordSuccess)
    .catch(spiritUi.onChangePasswordFailure)
}

const onGetBottles = event => {
  event.preventDefault()
  spiritApi.getBottles()
    .then(spiritUi.onGetBottlesSuccess)
    .catch(spiritUi.onGetBottlesFailure)
}

const onFindBottle = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.whiskeys.id.length !== 0) {
  spiritApi.findBottle(data.whiskeys.id)
      .then(spiritUi.onFindBottleSuccess)
      .catch(spiritUi.onFindBottleFailure)
  } else {
    $('#message').text('Please provide id')
    $('#message').css('color', 'red')
  }
}

const onCreateBottle = event => {
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
  } else {
    spiritApi.createBottle(data)
      .then(spiritUi.onCreateSuccess)
      .catch(spiritUi.onCreateError)
  }
}

const onDeleteBottle = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
    spiritApi.destroyBottle(data.whiskeys.id)
      .then(spiritUi.onDeleteSuccess)
      .catch(spiritUi.onDeleteFailure)
}

const onUpdateBottle =  event => {
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
  activateUpdateFields,
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
