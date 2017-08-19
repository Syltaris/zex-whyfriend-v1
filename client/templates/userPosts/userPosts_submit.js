
Template.postsSubmit.helpers({

});

Template.postsSubmit.events({
	'submit .post-submit': function(e) {
		e.preventDefault();

		var data = e.target;

		var postAttributes = {
			location: $(e.target).find('[name=location]').val(),
			timePref: [data.fromTime.value, data.toTime.value],
			desc: data.description.value,
		};

		Meteor.call('postsInsert', postAttributes, function(error, result) {
			console.log(result);
		});
	}
});