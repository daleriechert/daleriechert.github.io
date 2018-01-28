var userFeed = new Instafeed({
			get: 'user',
			userId: '6985370173',
			clientId:'24dfc9c2d8c84ef39e6274cf77c7b06f',
			accessToken: '6985370173.1677ed0.3f97c25606eb468bbefa998af97d7d90',
			resolution: 'low_resolution',
			limit: '9',
			template: '<div class="col-md-4 my-4"><div class="thumbnail"><a href="{{link}}"><img style="width:100%" src="{{image}}" /></a></div><div class="caption my-2"><p>{{caption}}</p></div><div class="caption small"><p>{{model.created_time}}<br>{{location}}</p></div></div></div>',
			filter: function(image) {

				var date = new Date(image.created_time*1000);

				m = date.getMonth();
				d = date.getDate();
				y = date.getFullYear();

				var month_names = new Array ( );
				month_names[month_names.length] = "January";
				month_names[month_names.length] = "February";
				month_names[month_names.length] = "March";
				month_names[month_names.length] = "April";
				month_names[month_names.length] = "May";
				month_names[month_names.length] = "June";
				month_names[month_names.length] = "July";
				month_names[month_names.length] = "August";
				month_names[month_names.length] = "September";
				month_names[month_names.length] = "October";
				month_names[month_names.length] = "November";
				month_names[month_names.length] = "December";

				var thetime = month_names[m] + ' ' + d + ', ' + y;

				image.created_time = thetime;

				return true;
}
		});
		userFeed.run();