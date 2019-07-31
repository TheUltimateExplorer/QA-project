
function form_validation_function()
{
	var isValid = true;

	if(textName.value == null || textName.value == "") {
		document.getElementById("error-name").innerHTML = "Name is required";
		isValid = false;
	}
	else {
		document.getElementById("error-name").innerHTML = "";
	}
	if(textEmail.value == null || textEmail.value == "") {
		document.getElementById("error-email").innerHTML = "Email is required!!";
		isValid = false;
	}
	else {
		var regexEmail = /^[0-9a-zA-Z\-._]+\@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;
		if (!regexEmail.test(textEmail.value))
		{
			isValid = false;
			document.getElementById("error-email").innerHTML = "Invalid e-mail address!!";
		}
		else {
			document.getElementById("error-email").innerHTML = "";
		}
	}
	if (textPhone.value != null && textPhone.value != "") {
		var regexPhone = /^([+]\d) (\d){3} (\d){3} (\d){4}$/;
		if (!regexPhone.test(textPhone.value))
		{
			document.getElementById("error-phone").innerHTML = "Invalid phone number!!";
            isValid = false;
		}
		else {
			document.getElementById("error-phone").innerHTML = "";
		}
	}
	if(textMake.value == null || textMake.value == "") {
		document.getElementById("error-make").innerHTML = "Vehicle Make is required";
		isValid = false;
	}
	else {
		document.getElementById("error-make").innerHTML = "";
	}
	if(textModel.value == null || textModel.value == "") {
		document.getElementById("error-model").innerHTML = "Vehicle Model is required";
		isValid = false;
	}
	else {
		document.getElementById("error-model").innerHTML = "";
	}
	if(textYear.value == null || textYear.value == "") {
		document.getElementById("error-year").innerHTML = "Vehicle Year is required";
		isValid = false;
	}
	else {
		var regexYear = /^[1-2](\d){3}$/;
		if (!regexYear.test(textYear.value))
		{
			isValid = false;
			document.getElementById("error-year").innerHTML = "Invalid Year Entered!!";
		}
		else {
			document.getElementById("error-year").innerHTML = "";
		}
	}
	
	{
		var myObj, myJSON, text, obj;
		myObj = {name:textName.value,email:textEmail.value,phone:textPhone.value,address:textAddress.value,
		vehiclemake:textMake.value,year:textYear.value,model:textModel.value};
		myJSON = JSON.stringify(myObj);
		localStorage.setItem("customerdetails", myJSON);
	}
	return isValid;
}