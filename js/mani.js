var validation = new Validation();

getEle = (id) => {
  return document.getElementById(id);
};

checkFaulsForm = () => {
  let isValid = true;
  var fName = getEle("firstName").value;
  var lName = getEle("lastName").value;
  var email = getEle("email").value;
  var pass = getEle("password").value;

  isValid &=
    validation.checkEmpty(
      fName,
      "firstName",
      "exampleInputFirstName",
      "First Name cannot be empty"
    ) &&
    validation.checkName(
      fName,
      "firstName",
      "exampleInputFirstName",
      "Looks like this is not an first name"
    );

  isValid &=
    validation.checkEmpty(
      lName,
      "lastName",
      "exampleInputLastName",
      "Last Name cannot be empty"
    ) &&
    validation.checkName(
      lName,
      "lastName",
      "exampleInputLastName",
      "Looks like this is not an last name"
    );

  isValid &=
    validation.checkEmpty(
      email,
      "email",
      "exampleInputEmail",
      "Email cannot be empty"
    ) &&
    validation.checkEmail(
      email,
      "email",
      "exampleInputEmail",
      "Looks like this is not an email"
    );

  isValid &=
    validation.checkEmpty(
      pass,
      "password",
      "exampleInputPassword",
      "Password cannot be empty"
    ) &&
    validation.checkPass(
      pass,
      "password",
      "exampleInputPassword",
      "Looks like this is not an password"
    );

  if (isValid) {
    console.log("Succes");
  }
};
