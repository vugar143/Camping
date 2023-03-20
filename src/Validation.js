function Validation(signForm) {
    console.log(signForm);
    let error = {};
    const email_pattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const password_pattern =
      /^(?=.*\d) (?=.*[a-z]) (?=.*[A-Z] ) [a-zA-Z0-9]{6,}$/;
    if (signForm.email === "") {
      error.email = "Email yaz gorax";
    } else if (!email_pattern.test(signForm.email)) {
      error.email = "Email uygun doyul";
    }
    // if (signForm.password === "") {
    //   error.password = " Sifre bosdu";
    // } else if (!password_pattern.test(signForm.password)) {
    //   error.password = "Sifre en az 6";
    // }
    if (
      signForm.matchPassword === "" ||
      String(signForm.matchPassword) !== String(signForm.password)
    ) {
      error.matchPassword = "Sifre eyni deyil";
    }
    console.log(error);
    return error;
  }
  export default Validation;