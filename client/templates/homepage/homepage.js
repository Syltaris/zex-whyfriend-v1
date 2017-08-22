
Template.homepage.helpers({
  allPostsCount: function() {
    return UserPosts.find().count();
  },
});
