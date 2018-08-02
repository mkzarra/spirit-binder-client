const store = require('./store')
// const events = require('./events')

// const whiskeyImages = ['../../../redemption-bourbon.png', '../../../lagavulin16_400x400.progressive.jpg', '../../../hibiki-japanese-harmony.jpg']


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
  $('#sign-out-modal').css('display', 'block')
  $('#change-password-modal').css('display', 'block')
  $('#sign-up-modal').css('display', 'none')
  $('#sign-in-modal').css('display', 'none')
  clearFormFields('#sign-in-form')
  store.user = data.user
  $('#signInModul').modal('hide')
  $('#filter-select').css('display', 'block')
  $('#search-form').css('display', 'block')
  $('#search-bar').css('display', 'block')
  $('#show-create-forms').css('display', 'block')
  $('#delete-button').css('display', 'block')
  $('#delete-form-field').css('display', 'block')
  clearFormFields()
}

const onSignInFailure = function (error) {
  console.error('Error on Sign In:', error)
}

const onSignOutSuccess = function () {
  store.user = null
  $('#signOutModal').modal('show')
  $('#sign-out-modal').css('display', 'none')
  $('#sign-up-modal').css('display', 'block')
  $('#sign-in-modal').css('display', 'block')
  $('#change-password-modal').css('display', 'none')
  $('#filter-select').css('display', 'none')
  $('#search-by-name').css('display', 'none')
  $('#search-bar').css('display', 'none')
  $('#create-button').css('display', 'none')
  $('#show-create-forms').css('display', 'none')
}

const onSignOutFailure = function (error) {
  console.error('Error on Sign Out:', error)
}

const onChangePasswordSuccess = function () {
  $('#changePasswordModal').modal('hide')
  $('#change-password-form-section').hide()  
  clearFormFields()
}

const onChangePasswordFailure = function (error) {
  console.error('Error on Change Password:', error)
}

const onGetBottlesSuccess = function (data) {
  console.log(data)
  $('.clear-index').css('display', 'none')
  data.whiskeys.forEach(whiskeys => {
    const whiskeyHTML = (`
    <div class="clear-index">
    <li class="whiskey-name">${whiskeys.name}</li>
    <li>Region: ${whiskeys.region}</li>
    <li>Age: ${whiskeys.age}</li>
    <li>Price: ${whiskeys.price}</li>
    <li>Class: ${whiskeys.classification}</li>
    <li>Description: ${whiskeys.description}</li>
    </div>
  `)
    $('#whiskey-index').append(whiskeyHTML)
  })
  $('#filter-select').css('display', 'none')
  // for (let i = 0; i < whiskeyImages.length; i++) {
  //   $('#whiskeyCarousel').addClass('carousel slide')
  //   $('<div class="item"><img src="' + whiskeyImages[i] + '" class="images"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner')
  //   $('<li data-target="#whiskeyCarousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators')
  // }
  // $('.item').first().addClass('active')
  // $('.carousel-indicators > li').first().addClass('active')
  // $('#whiskeyCarousel').css('display', 'block')
  // $('#whiskeyCarousel').carousel()
}

const onGetBottlesFailure = function (error) {
  $('#message').text('Unable to show bottles. Try a less specific search')
  $('#message').css('color', 'red')
  console.error('Failure on Get Bottles:', error)
}

const onFindBottleSuccess = function (data) {
  store.whiskeys = data.whiskeys
  $('.clear-index').css('display', 'none')
  $('#filter-select').css('display', 'block')
  data.whiskeys.forEach(whiskeys => {
    const whiskeyHTML = (`
    <div class="clear-index">
    <li class="whiskey-name">${whiskeys.name}</li>
    <li>Region: ${whiskeys.region}</li>
    <li>Age: ${whiskeys.age}</li>
    <li>Price: ${whiskeys.price}</li>
    <li>Class: ${whiskeys.classification}</li>
    <li>Description: ${whiskeys.description}</li>
    </div>
  `)
    $('#whiskey-index').append(whiskeyHTML)
  })
  
  // search by name
  // if name is not unique, show all with that name.
  // show filter options
}

const onFindBottleFailure = function (error) {
  $('#message').text('We may not have what you are looking for try a less specific search to find something similar')
  $('#message').css('color', 'red')
  console.error('Failed to find bottle:', error)
}

// const findWhiskeysByName = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     if (array[i][key] === value) {
//       return array[i]
//     }
//   }
//   return null
// }

const onCreateSuccess = function (data) {
  const whiskeyHTML = (`
  <div class="clear-index">
    <li class="whiskey-name">${data.whiskeys.name}</li>
    <li>Region: ${data.whiskeys.region}</li>
    <li>Age: ${data.whiskeys.age}</li>
    <li>Price: ${data.whiskeys.price}</li>
    <li>Class: ${data.whiskeys.classification}</li>
    <li>Description: ${data.whiskeys.description}</li>
    <button id="delete-button" class="ajax-actions" type="submit">Remove</button>
    </div>
  `)
  $('#whiskey-index').append(whiskeyHTML)
  store.whiskeys = data.whiskeys
}

const onCreateFailure = function (error) {
  $('#message').text('could not create. failure is:', error)
  $('#message').css('color', 'red')
}

const onDeleteSuccess = function () {
  $('#message').text('you have deleted a whiskey')
  $('#message').css('color', 'aqua')
}

const onDeleteFailure = function (error) {
  $('#message').text('could not delete. failure is:', error)
  $('#message').css('color', 'red')
}

const onUpdateBottleSuccess = function () {
  $('#message').text('you have updated a whiskey')
  $('#message').css('color', 'aqua')
}

const onUpdateBottleFailure = function (error) {
  $('#message').text('could not update. failure is:', error)
  $('#message').css('color', 'red')
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
  onFindBottleFailure,
  onCreateSuccess,
  onCreateFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateBottleSuccess,
  onUpdateBottleFailure
}