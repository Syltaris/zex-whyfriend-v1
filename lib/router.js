
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
