const store = require('./store')
const events = require('./events')

const clearFormFields = function (formId) {
  $(formId).each(function() {
    this.reset()
  })
}

const onRegisterSuccess = function () {
  $('#sign-up-form-section').hide()
  clearFormFields()
  $()
}

const onRegisterFailure = function (error) {
  console.error('Error on Register:', error)
}

const onSignInSuccess = function (data) {
  $('#sign-out-modal').css('display', 'inline-block')
  $('#change-password-modal').css('display', 'inline-block')
  $('#sign-up-modal').css('display', 'none')
  $('#sign-in-modal').css('display', 'none')
  clearFormFields('#sign-in-form')
  store.user = data.user
  $('#signInModul').modal('hide')
  clearFormFields()
}

const onSignInFailure = function (error) {
  console.error('Error on Sign In:', error)
}

const onSignOutSuccess = function () {
  store.user = null
  $('#sign-out-modal').css('display', 'none')
  $('#sign-up-modal').css('display', 'inline-block')
  $('#sign-in-modal').css('display', 'inline-block')
  $('#change-password-modal').css('display', 'none')
}

const onSignOutFailure = function (error) {
  console.error('Error on Sign Out:', error)
}

const onChangePasswordSuccess = function () {
  $('#change-password-form-section').hide()  
  clearFormFields()
}

const onChangePasswordFailure = function (error) {
  console.error('Error on Change Password:', error)
}

const onGetBottlesSuccess = function () {
  
}

const onGetBottlesFailure = function (error) {
  $('#message').text('Unable to show bottles. Try a less specific search')
  $('#message').css('color', 'red')
  console.error('Failure on Get Bottles:', error)
}

const onFindBottleSuccess = function () {

}

const onFindBottleFailure = function (error) {
  $('#message').text('We may not have what you are looking for try a less specific search to find something similar')
  $('#message').css('color', 'red')
  console.error('Failed to find bottle:', error)
}

module.exports = {
  onRegisterSuccess,
  onRegisterFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onGetBottlesSuccess,
  onGetBottlesFailure
}