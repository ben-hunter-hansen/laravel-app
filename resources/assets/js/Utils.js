var FileHandler = {
	init: function() {
		jQuery.event.props.push("dataTransfer");
	},
	copy: function(e) {
		e.dataTransfer.dropEffect = 'copy';
	},
	read: function(e, pattern, callback) {
		var files = e.target.files;
		for(var i = 0, file; file = files[i]; i++) {
			if(file.type.match(pattern)) {
				var reader = new FileReader();
				reader.onload = function(ev) {
					callback(ev.target.result);
				}
				reader.readAsDataURL(file);
			}
		}
	},
	readDropped: function(e,pattern,callback) {
		var files = e.dataTransfer.files;
		for(var i = 0, file; file = files[i]; i++) {
			if(file.type.match(pattern)) {
				var reader = new FileReader();
				reader.onload = function(ev) {
					callback(ev.target.result);
				}
				reader.readAsDataURL(file);
			}
		}
	}
}

var Patterns = {
	imgUrl: function() {
		return new RegExp(/(https?:\/\/.*\.(?:png|jp?g))/i);
	}
}

var ImageFactory = function(src,id) {
	return {
		src: src,
		id: id,
		thumbnail: function(onload,onerror) {
			var img = new Image();
			img.src = src;
			img.className = 'img-thumbnail';
			id ? img.id = id : 0;
			img.onload = function(){
				onload(img);
			}
			img.onerror = function() {
				onerror(src);
			}
		},
		responsive: function(onload,onerror) {
			var img = new Image();
			img.src = src;
			img.className = 'img-responsive';
			id ? img.id = id : 0;
			img.onload = function() {
				onload(img);
			}
			img.onerror = function() {
				onerror(src);
			}
		}
	}
}

var AjaxHandler = function(oncompl,csrf,id) {
	return {
		csrf: csrf,
		oncompl: oncompl,
		id: id,
		post: function(url,data) {
			data["_token"] = csrf;
			data["id"] = id;
			$.ajax({
				type: "POST",
				url: url,
				data: data
			}).done(function(response){
				oncompl(response);
			});
		}
	}
}

var FormDecorator = {
	warn: function(group,msg,symbol) {
		$(group).removeClass("has-error has-success");
		$(group).addClass("has-warning");
		if(symbol) {
			$(group).addClass("has-feedback");
			$(symbol).removeClass("glyphicon-ok glyphicon-remove");
			$(symbol).addClass("glyphicon-warning-sign");
			$(symbol).show();
		}

		if(msg) {
			var helper = $(group).find(".help-block").first();
			$(helper).text(msg);
		}
	},
	ok: function(group,msg,symbol) {
		$(group).removeClass("has-error has-warning");
		$(group).addClass("has-success");
		if(symbol) {
			$(group).addClass("has-feedback");
			$(symbol).removeClass("glyphicon-warning-sign glyphicon-remove");
			$(symbol).addClass("glyphicon-ok");
			$(symbol).show();
		}

		if(msg) {
			var helper = $(group).find(".help-block").first();
			$(helper).text(msg);
		}
	},
	error: function(group, msg, symbol) {
		$(group).removeClass("has-warning has-success");
		$(group).addClass("has-error");
		if(symbol) {
			$(group).addClass("has-feedback");
			$(symbol).removeClass("glyphicon-warning-sign glyphicon-remove");
			$(symbol).addClass("glyphicon-remove");
			$(symbol).show();
		}

		if(msg) {
			var helper = $(group).find(".help-block").first();
			$(helper).text(msg);
		}
	},
	okThenClear: function(group, symbol) {
		$(group).removeClass("has-error has-warning");
		$(group).addClass("has-success");
		if(symbol) {
			$(group).addClass("has-feedback");
			$(symbol).removeClass("glyphicon-warning-sign glyphicon-remove");
			$(symbol).addClass("glyphicon-ok");
			$(symbol).show("fast", function() {
				$(symbol).hide("slow", function() {
					$(group).removeClass("has-warning has-success has-error has-feedback");
				});
			});
		} else {
			$(group).removeClass("has-warning has-success has-error has-feedback");
		}
	},
	clear: function(group,symbol) {
		$(group).removeClass("has-warning has-success has-error has-feedback");
		if(symbol) {
			$(symbol).removeClass("glyphicon-ok glyphicon-remove glyphicon-warning-sign");
			$(symbol).hide();
		}

		var helper = $(group).find(".help-block").first();
		if(helper) {
			$(helper).text("");
		}
	}
}