/*
*	Contains all posts by users.
*	Data format is as follows:
*		_id: postId,
*		authorName: String, poster's username,
*		author_id: String, poster's userId
*		datePosted: Object instanceof Date, date of publication,
*		timePref: [fromTime, toTime],
*		postContent:
*			title: String, title of post,
*			desc: String, description/summary of post,
*			content: String, full content of post
*			image: ???URI???, full image of post,
*		tags: Object of Strings, tags of post
*		declinedUsers: Array, IDs of users who declined the request
*/

UserPosts = new Mongo.Collection('userPosts');

UserPosts.allow({
	insert: function() {
		return true;
	},
	remove: function() {
		return true;
	},
	update: function() {
		return true;
	},
});

Meteor.methods({
	postsInsert: function(postAttributes) {
		UserPosts.insert({
			authorName: Meteor.user().username,
			author_id: Meteor.userId(),
			location: postAttributes.location,
			datePosted: new Date(),
			timePref: {
				fromTime: new Date(Date.now() + postAttributes.timePref.fromTime * 60 * 1000),
				toTime: new Date(Date.now() + postAttributes.timePref.toTime * 60 * 1000),
			},
			postContent: {
				title: 'Extraordinary Request',
				desc: postAttributes.desc,
				content: 'Lorem ipsum dolor sit amet, llentesque. Intmper arcu.',
			},
			tags: ['food', 'group'],
			declinedUsers: [],
		});
	},
});
