
Template.postsViewAll.helpers({
  userOwnPosts: function() {
    return UserPosts.find(
      {
        authorName: Meteor.user().username,
      }
    );
  },
});
