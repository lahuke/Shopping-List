$(document).ready(function() {
	$('#user-input').submit(function(event) {
		event.preventDefault();
		var something = $('#input-box').val();
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert("It's hard to shop without a list! Please enter an item.")
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.all-items ul').append("<li class='current-item'> "+ something + "</li>");	
		}
		// resets the textbox after item is entered
		$('#user-input')[0].reset();
	});

});

//functions to delete and strikethrough code when checkbox and trashcan are clicked
assignlisteners();
function assignlisteners() {
	$('ul').on('click', '.current-item', function(event) {
		$(this).toggleClass('linethrough');
	});
}
deleteItem();
function deleteItem() {
	$('ul').on('dblclick', '.current-item', function(event) {
		$(this).remove();
	});
}