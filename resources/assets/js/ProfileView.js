function ProfileView() {
	View.call(this);

	this.Init = function() {
		var Components = new ProfileComponents();
		var CSRF = this.CSRF;
		var USER_ID = this.USER_ID;

		$(Components.Modals.AddPhoto).on('shown.bs.modal', function(e) {
			var modal = $(this);
			var dropArea = modal.find('.file-dropper');
			var urlField = modal.find('#photoFromUrlField');
			var fileSelect = modal.find("#photoFromFileField");
			var imgPreview = modal.find('.img-preview-list');
			var noPhotosLabel = imgPreview.find('h6');
			var urlFormGroup = modal.find('.form-group').first();
			var urlStatusSymbol = modal.find('#urlStatus');
			var removePreviewBtn = modal.find('.btn-xs');
			var submitBtn = modal.find('#submitPhotoUpload');

			FileHandler.init();
			updatePreview();

			function updatePreview() {
				var thumbs = $(imgPreview).find('img');
				if(!thumbs.length) {
					$(noPhotosLabel).show();
					$(removePreviewBtn).hide();
					$(submitBtn).prop("disabled",true);
				} else if($(noPhotosLabel).is(":visible")) {
					$(noPhotosLabel).hide();
					$(removePreviewBtn).hide();
				}
			}

			function attachThumbnail(thumb) {
				$(imgPreview).prepend(thumb);
				$(submitBtn).prop("disabled",false);
				updatePreview();
			}

			$(urlField).bind('input change', function(e) {
				var value = $(this).val();
				if(!$.trim(value)) {
					FormDecorator.clear(urlFormGroup,urlStatusSymbol);
				} else if(value.match(Patterns.imgUrl())) {
					ImageFactory(value)
						.thumbnail(function(img){
							FormDecorator.okThenClear(urlFormGroup,urlStatusSymbol);
							attachThumbnail(img);
							$(urlField).val('');
						},function(err){
						FormDecorator.error(urlFormGroup,"Image failed to load.",urlStatusSymbol);
					});
				} else {
					FormDecorator.warn(urlFormGroup,"Invalid image URL",urlStatusSymbol);
				}
			});

			$(imgPreview).on('click','img', function() {
				$(this).hasClass("selected") ? 
					$(this).removeClass("selected") : $(this).addClass("selected");
				$(removePreviewBtn).show();
			});

			$(removePreviewBtn).on('click', function(){
				var thumbs = $(imgPreview).children();
				for(var i = 0; i < thumbs.length; i++) {
					if($(thumbs[i]).hasClass("selected")) {
						$(thumbs[i]).remove();
						updatePreview();
					}
				}
			});

			$(fileSelect).on('change', function(e) {
				FileHandler.read(e,"\\image.*",function(dat){
					ImageFactory(dat)
						.thumbnail(function(img){
							attachThumbnail(img);
					});
				});
			});

			$(dropArea).on('dragover', function(e) {
				e.stopPropagation();
				e.preventDefault();
				FileHandler.copy(e);
				$(this).addClass("drop");
			});

			$(dropArea).on('dragleave', function(e) {
				$(this).removeClass("drop");
			});

			$(dropArea).on('drop', function(e) {
				e.stopPropagation();
				e.preventDefault();
				FileHandler.readDropped(e, "\\image.*", function(dat) {
					ImageFactory(dat)
						.thumbnail(function(img){
							attachThumbnail(img);
					});
				});
				$(this).removeClass("drop");
			});

			$(submitPhotoUpload).on('click', function(){
				var thumbs = $(imgPreview).find('img');
				var imgdat = [];
				for(var i = 0; i < thumbs.length; i++) {
					imgdat[i] = $(thumbs[i]).attr("src");
				}

				AjaxHandler(function(resp){
					$("#uploadNotify").text(resp.upload_count + " photo(s) uploaded successfully");
					$(thumbs).remove();
					updatePreview();
				},CSRF,USER_ID)
					.post("photos/upload",{"photos":imgdat});
				
			});
		});

		$(Components.Modals.AddPhoto).on('hidden.bs.modal', function(e) {
			$(this).find('#photoFromUrlField').off('input change');
			$(this).find('#photoFromFileField').off('change');
			$(this).find('#submitPhotoUpload').off('click');
			$(this).find('#uploadNotify').text("");
			$(this).find('.file-dropper').off('dragover dragleave drop');
			$(this).find('.img-preview-list').off('click','img');
		});

		$(Components.Modals.About).on('shown.bs.modal', function(e) {
			var aboutText = $('#aboutText').text();
			var modal = $(this);
			var entry = modal.find('textarea');
			var form = modal.find('.form-group');
			var submitBtn = $("#submitAboutEdit");

			$(entry).text(aboutText);
			$(entry).focus();

			$(entry).bind('input change', function() {
				if(!$.trim($(entry).val())) { 
					FormDecorator.error(form,"This is a required field.");
					$(submitBtn).prop("disabled",true);
				} else {
					FormDecorator.clear(form);
					$(submitBtn).prop("disabled",false);
				}
			});

			$(submitBtn).click(function() {
				if(!$(form).hasClass("has-error")) {
					var reqDat = { "data":$(entry).val() };
					AjaxHandler(function(data){
						$( $.parseHTML( data ) ).appendTo( "#aboutText" );
						FormDecorator.ok($(form),"Update sucessful");
						$(submitBtn).prop("disabled",true);
					},CSRF,USER_ID).post("about",reqDat);
				}
			});
		});

		$(Components.Modals.About).on('hidden.bs.modal', function(e) {
			FormDecorator.clear($(this).find(".form-group"));
		});

		$(Components.Modals.ViewPhoto).on('shown.bs.modal', function(e) {
			var senderId = $(this).find('#sender').val();
			var itemTemplate = $(this).find('.item').first();
			var carouselContent = $(this).find(".carousel-inner");
			var controlLeft = $(this).find(".left");
			var controlRight = $(this).find(".right");
			var tempCache = itemTemplate;
			$(itemTemplate).remove();

			function renderPhoto(photo) {
				var nextPhoto = $(itemTemplate).clone();
				if(photo.id == senderId){
					$(nextPhoto).addClass("active");
				}
				$(nextPhoto).prepend(photo);
				$(carouselContent).append(nextPhoto);
			}

			
			function findPhotos() {
				var userPhotos = $(".user-photos").find("a").find("img").clone();
				$(userPhotos).removeClass("img-thumbnail").addClass("img-responsive");
				for(var i = 0; i < userPhotos.length; i++) {
					renderPhoto(userPhotos[i]);
				}
			}

			findPhotos();

			$(this).on('hide.bs.modal',function(e){
				$(this).find('.item').remove();
				$(this).append(tempCache);
			});
		});

		$(Components.Modals.ViewPhoto).on('hidden.bs.modal',function(e){
			$(this).find('#sender').val('');
		});

		$(Components.Content.Photos).ready(function(){
			function renderUserPhoto(photo) {
				var anchor = $('<a></a>').attr("href","#");
				$(anchor).append(photo);
				$(".user-photos").append(anchor);
			}

			$(".user-photos").on('click','a', function(e){
				e.stopPropagation();
				e.preventDefault();
				var targetId = $(this).find("img").attr("id");
				$(Components.Modals.ViewPhoto).find("#sender").val(targetId);
				$(Components.Modals.ViewPhoto).modal("show");
			});

			function getPhotos(){
				$(".user-photos").find("img").remove();
				$.get("photos/get",{"id":USER_ID},function(data){
					for(var key in data.photos){
						ImageFactory(data.photos[key]['photo_src'],data.photos[key]['photo_id'])
							.thumbnail(function(img){
								renderUserPhoto(img);
						});
					}
				});
			}

			$(Components.Content.About).ready(function(){
				var content = $("#aboutText");
				var data = $(content).text();
				$(content).empty();
				$( $.parseHTML( data ) ).appendTo( "#aboutText" );
			});
			getPhotos();
		});
	}
}