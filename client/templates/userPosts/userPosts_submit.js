
Template.postsSubmit.helpers({

});

Template.postsSubmit.events({
	'submit .post-submit': function(e) {
		e.preventDefault();

		var data = e.target;

		var toTime = parseInt(data.toTime.value);
		var fromTime = parseInt(data.fromTime.value);

		check(fromTime, Number);
		check(toTime, Number);

		var postAttributes = {
			location: $(e.target).find('[name=location]').val(),
			timePref: {
				toTime: toTime,
				fromTime: fromTime,
			},
			desc: data.description.value,
		};

		Meteor.call('postsInsert', postAttributes, function(error, result) {
			console.log(result);

			if (error) {
				alert(error.reason);
			}

			Router.go('homepage');
		});
	},
});
