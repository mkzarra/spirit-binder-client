const config = require('./config')
const store = require('./store')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + `/sign-up`,
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const searchByName = data => {
  return $.ajax({
    url: config.apiUrl + `/whiskeys`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data.whiskeys
  })
}

const getBottles = () => {
  return $.ajax({
    url: config.apiUrl + `/whiskeys`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findBottle = id => {
  return $.ajax({
    url: config.apiUrl + `/whiskeys/` + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createBottle = data => {
  return $.ajax({
    url: config.apiUrl + `/whiskeys/`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const saveBottle = data => {
  return $.ajax({
    url: config.apiUrl + '/favorite/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      favorite: {
        id: data.id,
        user_id: store.user.id,
        whiskey_id: data.whiskey_id
      }
    }
  })
}

const deleteFavorite = id => {
  return $.ajax({
    url: config.apiUrl + `/favorite/` + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      favorite: {
        whiskey_id,
        user_id: store.user.id
      }
    }
  })
}

const updateBottle = data => {
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
  searchByName,
  getBottles,
  findBottle,
  createBottle,
  saveBottle,
  deleteFavorite,
  updateBottle
}
