
Template.homepage.helpers({
  allPostsCount: function() {
    return UserPosts.find().count();
  },
  panel_colour: function() {
    switch (Session.get('postsView-type')) {
      case 'locals':
        return 'panel-default';
      case 'expats':
        return 'panel-danger';
      case 'guides':
        return 'panel-warning';
      case 'bowners':
        return 'panel-success';

      default:
        return 'panel-default';
    }
  },
  activeClass: function(type) {
    return type === Session.get('postsView-type') ? 'active' : '';
  },
});

Template.homepage.events({
  'click .all': function(e) {
    e.preventDefault();
    Session.set('postsView-type', 'all');
  },
  'click .locals': function(e) {
    e.preventDefault();
    Session.set('postsView-type', 'locals');
  },
  'click .expats': function(e) {
    e.preventDefault();
    Session.set('postsView-type', 'expats');
  },
  'click .guides': function(e) {
    e.preventDefault();
    Session.set('postsView-type', 'guides');
  },
  'click .bowners': function(e) {
    e.preventDefault();
    Session.set('postsView-type', 'bowners');
  },
});
