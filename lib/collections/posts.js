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
			authorName: 'PLACEHOLDER',
			location: postAttributes.location,
			datePosted: new Date(),
			timePref: {
				fromTime: postAttributes.timePref.fromTime, 
				toTime: postAttributes.timePref.toTime, 
			},
			postContent: {
				title: 'Extraordinary Request',
				desc: postAttributes.desc,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur eget magna congue vestibulum. Curabitur dictum consectetur magna quis posuere. Curabitur molestie sem in est lacinia, at tempor sem varius. Aliquam eleifend fermentum eros vitae luctus. Donec convallis ultrices dolor luctus gravida. Proin ac magna ut enim maximus consequat. Etiam at porttitor quam, ac scelerisque purus. Pellentesque euismod euismod metus. Donec fermentum vehicula lorem, a condimentum nisi lobortis quis. Donec in vehicula lectus. Sed imperdiet sapien nec risus finibus, at aliquet nulla tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque tempor, quam eu pretium ultrices, elit urna condimentum nunc, eu gravida turpis nisi quis justo. Etiam luctus massa auctor elit malesuada, et tristique felis placerat. Donec convallis at quam eu lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lobortis euismod molestie. Duis sollicitudin nisi eget orci vulputate commodo. Donec non rutrum justo, ac ullamcorper ipsum. Integer bibendum leo ut dignissim rutrum. Nunc ac vehicula libero. Sed auctor a leo et pellentesque. Integer non blandit lectus, id semper arcu.',
			},
			tags: ['food', 'group'],
		});
	},
});