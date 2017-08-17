/*
*	This contains methods that will allow
*	filtering, searching, changing views 
* 	of the different posts.
*/

Template.userPosts.helpers({
	userPosts: function() {
		return UserPosts.find();
	},
});