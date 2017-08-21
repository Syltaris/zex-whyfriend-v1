
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
});

// root
Router.route('/', {
	name: 'homepage',
	waitOn: function() {
		return Meteor.subscribe('userPosts');
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
