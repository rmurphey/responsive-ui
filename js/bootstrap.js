var 	root = 'js/',
	scripts = {
		"home" : {
			"scripts" : [ "thickbox.js" ],
			"init" : function() {
				alert('home init');
			}
		},
		"registration" : {
			"scripts" : [ "validate.js", "form.js", "app.js" ],
			"init" : function() {
				alert('reg init');
			}
		}
	};

jQuery(document).ready(function() {
	$.each($('body').attr('class').split(' '), function(i, c) {
		var config = scripts[c];
		if (!config) { return; }
		$.each(config.scripts, function(i, s) {
			$LAB.script(root + s).wait();
		});
		$LAB.wait(config.init);
	});
});
