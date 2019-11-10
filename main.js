$(document).ready(function () {
	var key;
	var result = document.getElementById('results');


	$('#my_form').submit(function (event) {
		event.preventDefault();

//To get Search_box value....
		key = $('#search_box').val();
		if (key == '') {
			alert("enter something");

		} else {
//To check if search keyword is based on isbn or not....

			if (document.getElementById('keywords').checked) {
				$.get("https://www.googleapis.com/books/v1/volumes?q=" + key, callback);
			} else if (document.getElementById('isbn').checked) {
				$.get("https://www.googleapis.com/books/v1/volumes?q=+isbn:" + key, callback);
			} else {
				alert("please select any search option");
			}
			var url, img, title, author, isbn, description;
			console.log(key);
			result.innerHTML = "";

//To get response for the search....

			function callback(response) {
				if (response.items) {
					for (var i = 0; i < response.items.length; i++) {
						var item = response.items[i];

			        	title = "<h1>Title:" + item.volumeInfo.title + "</h1>";
						var isbn_idx = item.volumeInfo.industryIdentifiers.findIndex(item => item.type == "ISBN_13");
						author = "<h2>Authors:" + item.volumeInfo.authors + "</h2>";
						description = "<h2>Description:" + item.volumeInfo.description + "</h2>";

						isbn = "<h3>ISBN:" + item.volumeInfo.industryIdentifiers[isbn_idx].identifier + "</h3>";
						url = item.volumeInfo.imageLinks.thumbnail;
						img = "<img src=" + url + ">";


						result.innerHTML += title + author + description + isbn + img;
					}
				} else {
					alert("Result not found");
				}

			}
		}


	});

});