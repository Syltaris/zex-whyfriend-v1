
Router.configure({
	layoutTemplate: 'layout',
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
