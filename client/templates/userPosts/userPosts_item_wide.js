
Template.userPosts_item_wide.events({
  'click .delete': function() {
    UserPosts.remove(this._id);
  },
});
