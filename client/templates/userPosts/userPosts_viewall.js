
Template.postsViewAll.helpers({
  userOwnPosts: function() {
    console.log(UserPosts.find(
      {
        authorName: Meteor.user().username,
      }
    ).fetch());
    return UserPosts.find(
      {
        authorName: Meteor.user().username,
      }
    );
  },
});
