$(document).ready(function() {

	var Modals = {
		about: $('#editAboutMod'),
		addPhoto: $('#addPhotoMod')
	};

	$(Modals.about).on('shown.bs.modal', function(event) {
		var aboutText = $('#aboutText').text();
		var modal = $(this);
		var entry = modal.find('textarea');
		var form = modal.find('.form-group');
		var submitBtn = $("#submitAboutEdit");
		var label = modal.find('.control-label');
		var originalLabelTxt = label.text(); 

		$(entry).text(aboutText);
		$(entry).focus();

		$(entry).bind('input propertychange', function() {
			if(!$.trim($(entry).val())) { 
				$(form).addClass("has-error");
				label.text("This is a required field.");
				$(submitBtn).prop("disabled",true);
			} else {
				$(form).removeClass("has-error");
				$(label).text(originalLabelTxt);
				$(submitBtn).prop("disabled",false);
			}
		});

		$(submitBtn).click(function() {
			if(!$(form).hasClass("has-error")) {
				// post changes
			}
		});
	});

	$(Modals.addPhoto).on('shown.bs.modal', function(event) {
		//do stuff
	});
});