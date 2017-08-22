
Template.chatList_item.helpers({
  otherUserName: function() {
    var theOne = this.participants.find(x => x.userId != Meteor.userId());
    return theOne.userName;
  },
  roomIdToGo: function() {
    return this._id;
  },
});
