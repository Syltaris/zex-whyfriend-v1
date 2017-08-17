
Template.userPosts_item.helpers({
	title: function() {
		return this.postContent.title;
	},
	desc: function() {
		return this.postContent.desc;
	},
});