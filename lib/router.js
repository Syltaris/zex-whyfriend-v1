
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
});

// root
Router.route('/', {
	name: 'homepage',
	waitOn: function() {
		return [Meteor.subscribe('userPosts'), Meteor.subscribe('chatrooms')];
	},
});

Router.route('/submit', {
	name: 'postsSubmit',
});

Router.route('/my_requests', {
	name: 'postsViewAll',
	waitOn: function() {
		return Meteor.subscribe('userOwnPosts', Meteor.user().username);
	},
});

Router.route('/chat/:roomIdToGo', {
	name: 'chatView',
});

// TODO: enforce restriction
Router.route('/my_chats/:room_id?', {
	name: 'chatsViewAll',
	waitOn: function() {
		return Meteor.subscribe('chatrooms');
	},
	data: function() {
		console.log(Chatrooms.find({participants: {$elemMatch: {userId: Meteor.userId()}}}).fetch());
		return {
			ownChatRooms: Chatrooms.find({participants: {$elemMatch: {userId: Meteor.userId()}}}),
			roomId: this.params.room_id,
			username: Meteor.user().username,
		};
	},
});

var requireLogin = function() {
		if (!Meteor.user()) {
			if (Meteor.loggingIn()) {
				this.render('loading');
			} else {
				this.render('accessDenied');
			}
		} else {
			this.next();
		}
};

Router.onBeforeAction(requireLogin);
