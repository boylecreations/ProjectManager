/************** MOAR CUSTOM STUFF *********************/


/*************  NEXT BTN NAV ****************/

$(".return-btn").click(function() {
	window.location.hash = '#projects';
});

/************* NEXT BTN CHANGE ***************/

//abg to aarm
$("#abg-btn").click(function() {
	window.location.hash = '#aarm';
});
//aarm to river
$("#aarm-btn").click(function() {
	window.location.hash = '#river';
});
//river to toh
$("#river-btn").click(function() {
	window.location.hash = '#toh';
});
//toh to plc
$("#toh-btn").click(function() {
	window.location.hash = '#plc';
});
//plc to kvcc
$("#plc-btn").click(function() {
	window.location.hash = '#kvcc';
});
//kvcc to dynamic
$("#kvcc-btn").click(function() {
	window.location.hash = '#dynamic';
});
//dynamic to dream
$("#dynamic-btn").click(function() {
	window.location.hash = '#dream';
});
//dream to abg
$("#dream-btn").click(function() {
	window.location.hash = '#abg';
});


/******** PORT BUTTON HASH CHANGE ******/


//abg to aarm
$("#abg-open").click(function() {
	window.location.hash = '#abg';
});
//aarm to river
$("#aarm-open").click(function() {
	window.location.hash = '#aarm';
});
//river to toh
$("#river-open").click(function() {
	window.location.hash = '#river';
});
//toh to plc
$("#toh-open").click(function() {
	window.location.hash = '#toh';
});
//plc to kvcc
$("#plc-open").click(function() {
	window.location.hash = '#plc';
});
//kvcc to dynamic
$("#kvcc-open").click(function() {
	window.location.hash = '#kvcc';
});
//dynamic to dream
$("#dynamic-open").click(function() {
	window.location.hash = '#dynamic';
});
//dream to abg
$("#dream-open").click(function() {
	window.location.hash = '#dream';
});


/******** On Hash Change URL ******/


if (window.location.hash == "#abg") {
     $('#myModal1').modal('show');
}
if (window.location.hash == "#aarm") {
     $('#myModal2').modal('show');
}
if (window.location.hash == "#river") {
     $('#myModal3').modal('show');
}
if (window.location.hash == "#toh") {
     $('#myModal4').modal('show');
}
if (window.location.hash == "#plc") {
     $('#myModal5').modal('show');
}
if (window.location.hash == "#kvcc") {
     $('#myModal6').modal('show');
}
if (window.location.hash == "#dynamic") {
     $('#myModal7').modal('show');
}
if (window.location.hash == "#dream") {
     $('#myModal8').modal('show');
}

/******** Apply Modal Classes ******/


$(document).on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
$(document).on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })


/* ==================================================
   Contact Form
==================================================*/

//var CHAKRA = window.CHAKRA || {};

//CHAKRA.contactForm();

//CHAKRA.contactForm = function(){
	$("#contact-submit").on('click',function() {
		$contact_form = $('#contact-form');
		//alert('yay');
		
		var fields = $contact_form.serialize();
		
		$.ajax({
			type: "POST",
			url: "php/contact.php",
			data: fields,
			dataType: 'json',
			success: function(response) {
				
				if(response.status){
					$('#contact-form input').val('');
					$('#contact-form textarea').val('');
				}
				
				$('#response').empty().html(response.html);
			}
		});
		return false;
		alert('yay');
	});
//}
//
