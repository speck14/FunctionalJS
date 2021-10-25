'use strict'

function loadUsers(userIds, load, done) {
  let users = []
  userIds.forEach(function (id, index) {
    load(id, function (user) {
      users[index] = user;
      if (users.length === userIds.length) {
        return done(users)
    }
  })
  })
}

module.exports = loadUsers

/*
userIDs - array of numeric user IDs
load- function used to load user objects
done- function that expects an array of user objects (as retrieved from 'load')

Using a for-loop:
  for (let i = 0; i < userIds.length; i++) {
    users[i] = load(userIds[i])
  }
*/