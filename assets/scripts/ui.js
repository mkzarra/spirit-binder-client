const store = require('./store')

const renderWhiskeys = data => {
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
    </div><br>
  `)
    $('#whiskey-index').append(whiskeyHTML)
  })
}

const clearFormFields = function (formId) {
  $(formId).each(function() {
    this.reset()
  })
}

const onSignUpSuccess = () => {
  $('#sign-up-form-section').hide()
  clearFormFields()
  $()
}

const onSignUpFailure = error => {
  $('#message').text(`Error on Sign Up: ${error}`)
}

const onSignInSuccess = data => {
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
  $('#show-update-forms').css('display', 'block')
  $('#show-whiskey-form-field').css('display', 'block')
  $('#show-whiskey-button').css('display', 'block')
  clearFormFields()
}

const onSignInFailure = error => {
 $('#message').text(`Error on Sign In: ${error}`)
}

const onSignOutSuccess = () => {
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
  $('#delete-button').css('display', 'none')
  $('#delete-form-field').css('display', 'none')
  $('#show-update-forms').css('display', 'none')
  $('#show-whiskey-form-field').css('display', 'none')
  $('#show-whiskey-button').css('display', 'none')
  $('.clear-index').css('display', 'none')
  $('#message').css('display', 'none')
  $('.text-input-create').css('display', 'none')
  $('.text-input-update').css('display', 'none')
  $('.ajax-forms').css('display', 'none')
}

const onSignOutFailure = error => {
  $('#message').text(`Error on Sign Out: ${error}`)
}

const onChangePasswordSuccess = () => {
  $('#changePasswordModal').modal('hide')
  $('#change-password-form-section').hide()  
  clearFormFields()
}

const onChangePasswordFailure = error => {
  $('#message').text(`Error on Changing Password: ${error}`)
}

const onGetBottlesSuccess = data => {
  $('#message').css('display', 'none')
  renderWhiskeys(data)
}

const onGetBottlesFailure = error => {
  $('#message').text('Unable to show bottles. Try a less specific search')
  $('#message').css('color', 'red')
  $('#message').text(`failure on get bottles: ${error}`)
}

const onFindBottleSuccess = data => {
  $('.clear-index').css('display', 'none')
  const whiskey = data.whiskey
  $('#message').text(`Whiskey ${whiskey.id}:`)
  const whiskeyHTML = (`
    <div class="clear-index">
    <li class="whiskey-name">${whiskey.name}</li>
    <li>Region: ${whiskey.region}</li>
    <li>Age: ${whiskey.age}</li>
    <li>Price: ${whiskey.price}</li>
    <li>Class: ${whiskey.classification}</li>
    <li>Description: ${whiskey.description}</li>
    </div>
   `)
  $('#whiskey-index').append(whiskeyHTML)
  $('#message').css('color', "#00aafa")
}

const onFindBottleFailure = error => {
  $('#message').text(`failed to fined bottles: ${error}`)
}

const onCreateSuccess = data => {
  $('.clear-index').css('display', 'none')
  const whiskey = data.whiskey
  $('#message').text(`Whiskey ${whiskey.id} has been created:`)
  const whiskeyHTML = (`
    <div class="clear-index">
    <li class="whiskey-name">${whiskey.name}</li>
    <li>Region: ${whiskey.region}</li>
    <li>Age: ${whiskey.age}</li>
    <li>Price: ${whiskey.price}</li>
    <li>Class: ${whiskey.classification}</li>
    <li>Description: ${whiskey.description}</li>
    </div>
   `)
  $('#whiskey-index').append(whiskeyHTML)
  $('#message').css('color', "#00aafa")
}

const onCreateFailure = error => {
  $('#message').text('could not create. failure is:', error)
  $('#message').css('color', 'red')
}

const onDeleteSuccess = () => {
  $('#message').text('you have deleted a whiskey')
  $('#message').css('color', '#00aafa')
}

const onDeleteFailure = error => {
  $('#message').text('could not delete. failure is:', error)
  $('#message').css('color', 'red')
}

const onUpdateBottleSuccess = (data) => {
  $('.clear-index').css('display', 'none')
  const whiskey = data.whiskey
  $('#message').text(`Whiskey ${whiskey.id} has been updated:`)
  const whiskeyHTML = (`
    <div class="clear-index">
    <li class="whiskey-name">${whiskey.name}</li>
    <li>Region: ${whiskey.region}</li>
    <li>Age: ${whiskey.age}</li>
    <li>Price: ${whiskey.price}</li>
    <li>Class: ${whiskey.classification}</li>
    <li>Description: ${whiskey.description}</li>
    </div>
   `)
  $('#whiskey-index').append(whiskeyHTML)
  $('#message').css('color', '#00aafa')  
}

const onUpdateBottleFailure = error => {
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
