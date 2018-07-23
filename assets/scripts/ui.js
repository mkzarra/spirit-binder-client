const store = require('./store')
const events = require('./events')

const whiskeyImages = ['../../../redemption-bourbon.png', '../../../lagavulin16_400x400.progressive.jpg', '../../../hibiki-japanese-harmony.jpg']

const clearFormFields = function (formId) {
  $(formId).each(function() {
    this.reset()
  })
}

const onSignUpSuccess = function () {
  $('#sign-up-form-section').hide()
  clearFormFields()
  $()
}

const onSignUpFailure = function (error) {
  console.error('Error on Sign Up:', error)
}

const onSignInSuccess = function (data) {
  $('#sign-out-modal').css('display', 'inline-block')
  $('#change-password-modal').css('display', 'inline-block')
  $('#sign-up-modal').css('display', 'none')
  $('#sign-in-modal').css('display', 'none')
  clearFormFields('#sign-in-form')
  store.user = data.user
  $('#signInModul').modal('hide')
  $('#filter-select').css('display', 'inline-block')
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

const onGetBottlesSuccess = function (data) {
  console.log(data)
  for (let i = 0; i < whiskeyImages.length; i++) {
    $('<div class="item"><img src="' + whiskeyImages[i] + '" class="images"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner')
    $('<li data-target="#whiskeyCarousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators')
  }
  $('.item').first().addClass('active')
  $('.carousel-indicators > li').first().addClass('active')
  $('#whiskeyCarousel').css('display', 'block')
  $('#whiskeyCarousel').carousel()
  // let userEmail = store.user.email
  // let whiskeys = data.whiskeys
  // whiskeys.forEach(function (whiskey) {
  //   let li3 = document.createElement("li")
  //   li3.appendChild(document.create)
  // })
}

const onGetBottlesFailure = function (error) {
  $('#message').text('Unable to show bottles. Try a less specific search')
  $('#message').css('color', 'red')
  console.error('Failure on Get Bottles:', error)
}

const onFindBottleSuccess = function () {
  // for (let i = 0; i < whiskeyImages.length; i++) {
  //   $('<div class="item"><img src="' + whiskeyImages[i] + '"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner')
  //   $('<li data-target="#whiskeyCarousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators')
  // }
  // $('.item').first().addClass('active')
  // $('.carousel-indicators > li').first().addClass('active')
  // $$('#whiskeyCarousel').carousel()
}

const onFindBottleFailure = function (error) {
  $('#message').text('We may not have what you are looking for try a less specific search to find something similar')
  $('#message').css('color', 'red')
  console.error('Failed to find bottle:', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onGetBottlesSuccess,
  onGetBottlesFailure,
  onFindBottleSuccess,
  onFindBottleFailure
}