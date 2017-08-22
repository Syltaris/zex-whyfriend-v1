
var SUMMARY_LIMIT = 20;

Template.userPosts_item.helpers({
	username: function() {
		return this.authorName;
	},
	location: function() {
		return this.location;
	},
	timePreference: function() {
		return 'from ' + this.timePref.fromTime.getHours()
    + ':' + this.timePref.fromTime.getMinutes()
    + ' on ' + this.timePref.toTime.toDateString();
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
	'click .contact': function(e) {
		e.preventDefault();

		// check if room already exists, if not, create and add to chatrooms
		if (Chatrooms.find({participants: {$elemMatch: {userId: Meteor.userId()}}}).count() <= 0) {
			console.log('did add new room');
			var params = {
				otherUserId: this.author_id,
				otherUserName: this.authorName,
			};
			Meteor.call('addRoom', params, function(err, res) {
				if (err) {
					alert(err.reason);
				}
			});
		}

		var roomIdToGo = Chatrooms.findOne({participants: {$elemMatch: {userId: Meteor.userId()}}});

		console.log('going to router');
		console.log(roomIdToGo);

		Router.go('chatView', {
			roomIdToGo: roomIdToGo._id,
		});
	},
	'click .decline': function(e) {
		e.preventDefault();

		var postToDecline = UserPosts.findOne({_id: this._id});

		postToDecline.declinedUsers.push(Meteor.userId());
		UserPosts.update(postToDecline._id, {
			$set: {
				declinedUsers: postToDecline.declinedUsers,
			},
		});
	},
});
