//validate

var form = {
	validate: document.getElementById("validate"),
	name: document.getElementById("name"),
	email: document.getElementById("email"),
	pass: document.getElementById("pass"),
	date: document.getElementById("date")
};

//form submit
form.validate.addEventListener("submit", CheckForm);

//form submit validation
var reEmail = /^[a-z0-9._%*]+@[a-z0-9.*]+\.[a-z]{2,4}$/;
function CheckForm(e){
	
	var msg = "";
	
	//name
	if((form.name.value == "") || (!reEmail.test(form.email.value) || form.email.value == "") || (form.pass.value < 8 || form.pass.value == "") || (form.date.value == "")){
		swal('Something is missing');
	}
	
	//message
	else{
		if(form.email.value){
		sweetAlert({title: 'All done!',
		html:
        'Email was sen to: <pre><code>' +
          JSON.stringify(form.email.value) +
        '</code></pre>',
		confirmButtonText: 'Okay!'
		
		
		
		
		});
	}
	}
	
	
	e.preventDefault();
}