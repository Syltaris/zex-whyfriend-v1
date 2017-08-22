
Meteor.publish('userPosts', function() {
	return UserPosts.find();
});

Meteor.publish('userOwnPosts', function(username) {
	return UserPosts.find({authorName: username});
});

Meteor.publish('chatrooms', function() {
	return Chatrooms.find();
});
