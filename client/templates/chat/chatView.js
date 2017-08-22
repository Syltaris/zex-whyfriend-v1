
Template.chatView.helpers({
  username: function() {
    return Meteor.user().username;
  },
});
