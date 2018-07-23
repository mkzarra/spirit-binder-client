'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const events = require('./events')

$(() => {
  $('#sign-up-modal').on('click', events.onEngageSignUpModal)
  $('#sign-in-modal').on('click', events.onEngageSignInModal)
  $('#change-password-modal').on('click', events.onEngagePasswordChangeModal)
  $('#sign-out-modal').on('click', events.onSignOut)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#filter-select').on('click', events.onGetBottles)
  // $('#specify').on('click', events.)
})

module.exports = {
  events
}