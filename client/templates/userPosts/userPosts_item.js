
Template.userPosts_item.helpers({
	title: function() {
		return this.postContent.title;
	},
	desc: function() {
		return this.postContent.desc;
	},
	authorName: function() {
		return this.authorName;
	},
	datePosted: function() {
		return this.datePosted.toDateString();
	},
	location: function() {
		return this.location;
	},
});