// TODO: refactor this...DRY
Template.chatList_item.helpers({
  otherUserName: function() {
    var theOne = this.participants.find(x => x.userId != Meteor.userId());
    return theOne.userName;
  },
  roomIdToGo: function() {
    return this._id;
  },
  selectedChatUser: function() {
    var theOne = this.participants.find(x => x.userId != Meteor.userId());
    return Session.get('selectedChatUser') === theOne.userName ? 'active' : '';
  },
});

Template.chatList_item.events({
  'click .chatUser': function() {
    console.log('ran');
    Session.set('selectedChatUser', this.participants.find(x => x.userId != Meteor.userId()).userName);
  }
});
