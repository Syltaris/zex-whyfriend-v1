
var SUMMARY_LIMIT = 20;

Template.userPosts_item.helpers({
	username: function() {
		return this.authorName;
	},
	location: function() {
		return this.location;
	},
	timePreference: function() {
		return 'from ' + this.timePref.fromTime + ' to ' + this.timePref.toTime;
	},
	summary: function() {
		if (this.postContent.desc.length > SUMMARY_LIMIT) {
			return this.postContent.desc.slice(0, SUMMARY_LIMIT) + '...';
		}

		return this.postContent.desc;
	},
	datePosted: function() {
		return this.datePosted.toDateString();
	},
	title: function() {
		return this.postContent.title;
	},
});

Template.userPosts_item.events({
	'click .check': function(e) {
			e.preventDefault();

			var postToView = UserPosts.findOne({_id: this._id});
			console.log(postToView);

			Modal.show('postsView', postToView);
	},
	'click .decline': function(e) {
		e.preventDefault();

		var postToDecline = UserPosts.findOne({_id: this._id});

		postToDecline.declinedUsers.push(Meteor.userId());
		UserPosts.update(postToDecline._id, {$set: {declinedUsers: postToDecline.declinedUsers}});
	},
});
