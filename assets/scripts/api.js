const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + `/sign-up`,
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    data
  })
}

const changePassword = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getBottles = function () {
  return $.ajax({
    url: config.apiUrl + `/whiskeys`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findBottle = function (data) {
  return $.ajax({
    url: config.apiUrl + `/whiskeys`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data.whiskeys
  })
}

const createBottle = function () {
  return $.ajax({
    url: config.apiUrl + `/whiskeys`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const destroyBottle = function (id) {
  return $.ajax({
    url: config.apiUrl + `/whiskeys/` + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBottle = function (data) {
  return $.ajax({
    url: config.apiUrl + `/whiskeys/` + data.whiskeys.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getBottles,
  findBottle,
  createBottle,
  destroyBottle,
  updateBottle
}