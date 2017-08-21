/*
*	Contains all posts by users.
*	Data format is as follows:
*		_id: postId,
*		authorName: String, poster's username,
*		datePosted: Object instanceof Date, date of publication,
*		timePref: [fromTime, toTime],
*		postContent:
*			title: String, title of post,
*			desc: String, description/summary of post,
*			content: String, full content of post
*			image: ???URI???, full image of post,
*		tags: Object of Strings, tags of post
*		declinedUsers: Array, users who declined the request
*/

UserPosts = new Mongo.Collection('userPosts');

UserPosts.allow({
	insert: function() {
		return true;
	},
	remove: function() {
		return true;
	},
});

Meteor.methods({
	postsInsert: function(postAttributes) {
		UserPosts.insert({
			authorName: Meteor.user().username,
			location: postAttributes.location,
			datePosted: new Date(),
			timePref: {
				fromTime: postAttributes.timePref.fromTime,
				toTime: postAttributes.timePref.toTime,
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
