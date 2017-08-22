/*
*	This contains methods that will allow
*	filtering, searching, changing views
* 	of the different posts.
*/

Template.userPosts.helpers({
	userPosts: function() {
		return UserPosts.find(
			{
				authorName: {$ne: Meteor.user().username},
				declinedUsers: {$ne: Meteor.userId()},
			}
		);
	},
	allPostsCount: function() {
		return UserPosts.find().count();
	},
});
