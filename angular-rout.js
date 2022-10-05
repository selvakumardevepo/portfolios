
application.config(function($routeProvider) {

	$routeProvider
	.when("/", {
        templateUrl : "pages/profile.html"
    })
	.when("/whatsapp",{
		templateUrl : "pages/whatsapp.html"
	})
	.when("/git",{
		templateUrl : "pages/git.html"
	})
	.when("/youtube",{
		templateUrl : "pages/youtube.html"
	})
	.when("/telegram",{
		templateUrl : "pages/telegram.html"
	})
	.when("/linkedin",{
		templateUrl : "pages/linkedin.html"
	})
	.when("/codepen",{
		templateUrl : "pages/codepen.html"
	})
	.when("/calculatro",{
		templateUrl : "pages/calculatro.html"
	});
	
});