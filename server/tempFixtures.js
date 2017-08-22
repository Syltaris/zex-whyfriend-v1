/*
*	Contains all posts by users.
*	Data format is as follows:
*		_id: postId,
*		author_id: String, poster's _id
*		authorName: String, poster's username,
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

if (UserPosts.find().count() <= 0) {
	var now = new Date().getTime();

	for (var i=0; i<6; i++) {
		UserPosts.insert({
			authorName: 'l33th4x000r'+i,
			author_id: 'PWZ6b9RFqtJn7kxZE',
			location: 'Beijing, Smog City',
			timePref: {
				fromTime: new Date(now + i*3600*1000),
				toTime: new Date(now + i*36*3600*1000),
			},
			datePosted: new Date(now - 8 * 3600 * 1000),
			postContent: {
				title: 'ASL222?',
				desc: 'Spam is healthy.',
				content: 'Lorem ipsum dolor sit amet, ',
			},
			tags: ['food', 'beer', 'booze'],
			declinedUsers: [],
		});
	}

	UserPosts.insert({
		authorName: 'Sash Gray',
		author_id: 'PWZ6b9RFqtJn7kxZE',
		location: 'Shanghai, Xujiahui',
		timePref: {
			fromTime: new Date(now + 3600*1000),
			toTime: new Date(now + 36*3600*1000),
		},
		datePosted: new Date(now + 1 * 3600 * 1000),
		postContent: {
			title: 'Extraordinary Request',
			desc: 'Looking for local Chinese female',
			content: 'Lorem ipsum dolor sit am',
		},
		tags: ['food', 'group'],
		declinedUsers: [],
	});

	// UserPosts.insert({
	// 	authorName: 'Reek Morph',
	// 	location: 'Shanghai, Jingan',
	//
	// 	datePosted: new Date(now - 1 * 3600 * 1000),
	// 	postContent: {
	// 		title: 'Simple Request',
	// 		desc: 'Looking for local expat male',
	// 	},
	// 	tags: ['beer', 'booze', 'food'],
	// });
	//
	// UserPosts.insert({
	// 	authorName: 'l33th4x0r',
	// 	location: 'Beijing, Peking Duck',
	//
	// 	datePosted: new Date(now - 8 * 3600 * 1000),
	// 	postContent: {
	// 		title: 'ASL?',
	// 		desc: 'Spam is healthy.',',
	// 	},
	// 	tags: ['food', 'beer', 'booze'],
	// });
	//
	// UserPosts.insert({
	// 	authorName: 'Scott Mikes',
	// 	location: 'Shanghai, Fudan',
	//
	// 	datePosted: new Date(now - 19 * 3600 * 1000),
	// 	postContent: {
	// 		title: 'Simple Requestto',
	// 		desc: 'Looking for local expat male',
	// 	},
	// 	tags: ['beer', 'booze', 'food'],
	// });
}
