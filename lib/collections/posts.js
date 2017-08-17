/*
*	Contains all posts by users.
*	Data format is as follows:
*		_id: postId,
*		authorName: String, poster's username,
*		datePosted: Object instanceof Date, date of publication,
*		postContent: 
*			title: String, title of post,
*			desc: String, description/summary of post,
*			content: String, full content of post
*			image: ???URI???, full image of post,
*		tags: Object of Strings, tags of post
*/

UserPosts = new Mongo.Collection('userPosts');

UserPosts.allow({
	insert: function() {
		return true;
	},
});