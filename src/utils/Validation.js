

const checkValidation=(login,name,email,password)=>{
const isEmailValid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
const isPasswordValid=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
const isNameValid= /^[\\p{L} .'-]+$/.test(name);
if(!isEmailValid) return "Email is not valid"
if(!isPasswordValid) return "Password is not valid";
if(!login && login!=="")if(!isNameValid)  return "Name is not valid"

return null;

}

export default checkValidation;