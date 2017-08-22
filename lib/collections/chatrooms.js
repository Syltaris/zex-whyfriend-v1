/*
* Contains all the chatrooms created by cesarve:simple-chat.
* Data format is as follows:
*   _id: room's ID,
*   participants: [person1, person2, <...>], participants IDs
*                   person obj is : {_id, username}
*/

Chatrooms = new Mongo.Collection('chatrooms');

Chatrooms.allow({
  insert: function() {
    return true;
  },
});

Meteor.methods({
  addRoom: function(roomAttributes) {
    Chatrooms.insert({
      participants: [{
        userId: Meteor.userId(),
        userName: Meteor.user().username,
      },
      {
        userId: roomAttributes.otherUserId,
        userName: roomAttributes.otherUserName,
      }],
    });
  },
});
