curl(['js/bulkloader'], function(BulkLoader){

	//bulkloader example
	var loadExample = new BulkLoader({
		assets: ["images/300.jpg","images/400.jpg","images/600.jpg","images/900.jpg", "images/5300.jpg"],
		onComplete: function(images){
			console.log("images done");
			
			var example = document.getElementById("example");
			for(var i = 0; i < images.length; i++){
				example.appendChild(images[i]);
			}
		},
		onProgress: function(options){
			//an image is finished
			console.log(options.percentage + '%');
			console.log(options.loaded + " of " + options.total + " images were loaded.");
			console.log("#" + options.id + ":");
			console.log("data:", options.data);

			switch(options.id){
				case 2:
					console.log("The third image was finished loading")
				break;
			}
		}
	});

});