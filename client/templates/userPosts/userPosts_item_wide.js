
Template.userPosts_item_wide.events({
  'click .delete': function() {
    UserPosts.remove(this._id);
  },
});

Template.userPosts_item_wide.helpers({
	username: function() {
		return this.authorName;
	},
	location: function() {
		return this.location;
	},
	timePreference: function() {
		return 'from ' + this.timePref.fromTime.toISOString()
     + ' to ' + this.timePref.toTime.toISOString();
	},
	summary: function() {
		return this.postContent.desc;
	},
	datePosted: function() {
		return this.datePosted.toDateString();
	},
	title: function() {
		return this.postContent.title;
	},
});
