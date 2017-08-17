
Template.userPosts.helpers({
	userPosts: function() {
		return UserPosts.find();
	},
});