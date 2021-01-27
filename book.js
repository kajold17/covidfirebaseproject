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

var fname = document.getElementById("firstName");
var lname = document.getElementById("lastName");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phoneNumber");

var birthDate = document.getElementById("birthDate");
var height = document.getElementById("height");
var weight = document.getElementById('weight')
var gender= document.getElementById("genderRadios");
var asthma= document.getElementById("asthmaRadios");


const db = firebase.firestore();
const users_db = db.collection('users');


users_db.doc(email).set({
	first_name : fname.val(),
	last_name : lname.val(),
	email : email.val(),
	phoneNumber : phoneNumber.val(),
	DOB : birthDate.val(),
	height: height.val(),
	weight: weight.val(),
	gender: gender.val(),
	asthma: asthma.val()
})
.then(() => console.log('updated info'))
.catch(err => console.error(err))