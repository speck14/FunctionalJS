
/*Note: the verification process for this problem seems to be broken, even passing in an
empty function will pass
*/
'use strict'

function loadUsers(userIds, load, done) {
  let completed = 0;
  let users = []
  userIds.forEach(function (id, index) {
    load(id, function (user) {
      users[index] = user;
      completed+= 1;
    })
  })
  if (userIds.length() === completed) {
    return done(users);
  }
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