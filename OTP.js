// const otp = Math.floor((Math.random() +1) * 2000) ;

let otp2;

document.getElementById("otpgen").innerHTML = `OTP Generator : "Click Generate"`;

function newotp(){

 otp2 =Math.floor((Math.random() +1) * 2000) ;

 //to clear input-field
document.getElementById("userinp").value = "";
document.getElementById("otpgen").innerHTML = `OTP Generator : "${otp2}"`;

}





function submit(){
    let userConfirm = document.getElementById("userinp").value;
    userConfirm = Number(userConfirm);
    console.log(userConfirm)

    if(otp2 == userConfirm){
        alert(`${otp2} OTP Verified✅`);
    }else{
        alert(`Enter valid OTP`);
    }
}



