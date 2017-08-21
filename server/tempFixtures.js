/*
*	Contains all posts by users.
*	Data format is as follows:
*		_id: postId,
*		authorName: String, poster's username,
*		location: String, author's country,state,
*		datePosted: Object instanceof Date, date of publication,
*		postContent:
*			title: String, title of post,
*			desc: String, description/summary of post,
*			content: String, full content of post,
*			image: ???URI???, full image of post,
*		tags: Array of Strings, tags of post
*/

if (UserPosts.find().count() <= 0) {
	var now = new Date().getTime();

	for(var i=0; i<6; i++) {
		UserPosts.insert({
			authorName: 'l33th4x000r'+i,
			location: 'Beijing, Smog City',

			datePosted: new Date(now - 8 * 3600 * 1000),
			postContent: {
				title: 'ASL222?',
				desc: 'Spam is healthy.',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis augue posuere, varius felis ac, auctor dolor. Quisque at ligula scelerisque, ornare nulla et, vulputate orci. Pellentesque nisl arcu, dignissim in ullamcorper eu, finibus sit amet enim. Praesent ac laoreet ligula. Mauris elit odio, egestas ac orci sed, ultrices tempus dui. Nam placerat placerat leo, eu laoreet odio bibendum eget. Cras euismod enim sed tellus porta vestibulum. Nam quis quam ac urna vulputate aliquet. Donec a finibus tellus. Sed quis leo leo. Donec rutrum turpis at condimentum commodo. Cras interdum nisl ac magna volutpat, sed ultrices mi hendrerit. Aenean purus erat, vulputate sit amet nisl vel, fringilla laoreet lacus. Quisque rutrum facilisis ipsum et fringilla. Ut et risus vitae tortor luctus consequat quis sit amet lectus. Maecenas a eros vestibulum, pretium nulla eget, euismod arcu. Duis pellentesque massa mi. Nulla justo ligula, eleifend non tincidunt ac, sagittis volutpat ipsum. Suspendisse potent',
			},
			tags: ['food', 'beer', 'booze'],
			declinedUsers: [],
		});
	}

	UserPosts.insert({
		authorName: 'Sash Gray',
		location: 'Shanghai, Xujiahui',
		datePosted: new Date(now + 1 * 3600 * 1000),
		postContent: {
			title: 'Extraordinary Request',
			desc: 'Looking for local Chinese female',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur eget magna congue vestibulum. Curabitur dictum consectetur magna quis posuere. Curabitur molestie sem in est lacinia, at tempor sem varius. Aliquam eleifend fermentum eros vitae luctus. Donec convallis ultrices dolor luctus gravida. Proin ac magna ut enim maximus consequat. Etiam at porttitor quam, ac scelerisque purus. Pellentesque euismod euismod metus. Donec fermentum vehicula lorem, a condimentum nisi lobortis quis. Donec in vehicula lectus. Sed imperdiet sapien nec risus finibus, at aliquet nulla tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque tempor, quam eu pretium ultrices, elit urna condimentum nunc, eu gravida turpis nisi quis justo. Etiam luctus massa auctor elit malesuada, et tristique felis placerat. Donec convallis at quam eu lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lobortis euismod molestie. Duis sollicitudin nisi eget orci vulputate commodo. Donec non rutrum justo, ac ullamcorper ipsum. Integer bibendum leo ut dignissim rutrum. Nunc ac vehicula libero. Sed auctor a leo et pellentesque. Integer non blandit lectus, id semper arcu.',
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
	// 		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis augue posuere, varius felis ac, auctor dolor. Quisque at ligula scelerisque, ornare nulla et, vulputate orci. Pellentesque nisl arcu, dignissim in ullamcorper eu, finibus sit amet enim. Praesent ac laoreet ligula. Mauris elit odio, egestas ac orci sed, ultrices tempus dui. Nam placerat placerat leo, eu laoreet odio bibendum eget. Cras euismod enim sed tellus porta vestibulum. Nam quis quam ac urna vulputate aliquet. Donec a finibus tellus. Sed quis leo leo. Donec rutrum turpis at condimentum commodo. Cras interdum nisl ac magna volutpat, sed ultrices mi hendrerit. Aenean purus erat, vulputate sit amet nisl vel, fringilla laoreet lacus. Quisque rutrum facilisis ipsum et fringilla. Ut et risus vitae tortor luctus consequat quis sit amet lectus. Maecenas a eros vestibulum, pretium nulla eget, euismod arcu. Duis pellentesque massa mi. Nulla justo ligula, eleifend non tincidunt ac, sagittis volutpat ipsum. Suspendisse potent',
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
	// 		desc: 'Spam is healthy.',
	// 		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis augue posuere, varius felis ac, auctor dolor. Quisque at ligula scelerisque, ornare nulla et, vulputate orci. Pellentesque nisl arcu, dignissim in ullamcorper eu, finibus sit amet enim. Praesent ac laoreet ligula. Mauris elit odio, egestas ac orci sed, ultrices tempus dui. Nam placerat placerat leo, eu laoreet odio bibendum eget. Cras euismod enim sed tellus porta vestibulum. Nam quis quam ac urna vulputate aliquet. Donec a finibus tellus. Sed quis leo leo. Donec rutrum turpis at condimentum commodo. Cras interdum nisl ac magna volutpat, sed ultrices mi hendrerit. Aenean purus erat, vulputate sit amet nisl vel, fringilla laoreet lacus. Quisque rutrum facilisis ipsum et fringilla. Ut et risus vitae tortor luctus consequat quis sit amet lectus. Maecenas a eros vestibulum, pretium nulla eget, euismod arcu. Duis pellentesque massa mi. Nulla justo ligula, eleifend non tincidunt ac, sagittis volutpat ipsum. Suspendisse potent',
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
	// 		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis augue posuere, varius felis ac, auctor dolor. Quisque at ligula scelerisque, ornare nulla et, vulputate orci. Pellentesque nisl arcu, dignissim in ullamcorper eu, finibus sit amet enim. Praesent ac laoreet ligula. Mauris elit odio, egestas ac orci sed, ultrices tempus dui. Nam placerat placerat leo, eu laoreet odio bibendum eget. Cras euismod enim sed tellus porta vestibulum. Nam quis quam ac urna vulputate aliquet. Donec a finibus tellus. Sed quis leo leo. Donec rutrum turpis at condimentum commodo. Cras interdum nisl ac magna volutpat, sed ultrices mi hendrerit. Aenean purus erat, vulputate sit amet nisl vel, fringilla laoreet lacus. Quisque rutrum facilisis ipsum et fringilla. Ut et risus vitae tortor luctus consequat quis sit amet lectus. Maecenas a eros vestibulum, pretium nulla eget, euismod arcu. Duis pellentesque massa mi. Nulla justo ligula, eleifend non tincidunt ac, sagittis volutpat ipsum. Suspendisse potent',
	// 	},
	// 	tags: ['beer', 'booze', 'food'],
	// });
}
