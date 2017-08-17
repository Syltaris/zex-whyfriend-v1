
Meteor.publish('userPosts', function() {
	return UserPosts.find();
});
