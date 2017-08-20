
Template.postsView.helpers({
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
    return this.postContent.desc;
  },
  datePosted: function() {
    return this.datePosted.toDateString();
  },
  title: function() {
    return this.postContent.title;
  },
});
