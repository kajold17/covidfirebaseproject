// $(function(){
// 	$.validator.setDefaults({
// 		highlight: function(element){
// 			$(element)
// 			.closest('.form-group')
// 			.addClass('has-error')
// 		},
// 		unhighlight: function(element){
// 			$(element)
// 			.closest('.form-group')
// 			.removeClass('has-error')
// 		}
// 	});

// // 	$.validate({
// 		rules:
// 		{	
// 		    password: "required",
// 			birthDate: "required",
// 			weight: {
// 			    required:true,
// 			    number:true
// 			},
// 			height:  {
// 			    required:true,
// 			    number:true
// 			},
// 			email: {
// 				required: true,
// 				email: true
// 			}
// 		},
// 			messages:{			
// 				email: {
// 				required: true,
// 				email: true
// 			}
// 		},
// 				password: {
// 					required: " Please enter password"
// 				},
// 				birthDate: {
// 					required: " Please enter birthdate"
// 				},
// 				email: {
// 					required: ' Please enter email',
// 					email: ' Please enter valid email'
// 				},
// 				weight: {
// 					required: " Please enter your weight",
// 					number: " Only numbers allowed"
// 				},
// 				height: {
// 					required: " Please enter your height",
// 					number: " Only numbers allowed"
// 				},
// 			}

// 	});
// });



//-----------Ready data-----------------//


function bookslot() {
	var fname = document.getElementById("firstName").value;
	var lname = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var phoneNumber = document.getElementById("phoneNumber").value;

	var birthDate = document.getElementById("birthDate").value;
	var height = document.getElementById("height").value;
	var weight = document.getElementById('weight').value;
	var gender = document.getElementById("genderRadios").value;
	var asthma = document.getElementById("asthmaRadios").value;


	const db = firebase.firestore();
	const users_db = db.collection('users');
	users_db.doc('email').set({
		first_name: fname,
		last_name: lname,
		email: email,
		phoneNumber: phoneNumber,
		DOB: birthDate,
		height: height,
		weight: weight,
		gender: gender,
		asthma: asthma
	})
		.then(() => console.log('updated info'))
		.catch(err => console.error(err))
}