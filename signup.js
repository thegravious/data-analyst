let username = document.getElementById("username")
let emailAddress = document.getElementById("emailAddress")
let password = document.getElementById("password")
let passwordConfirmation = document.getElementById("passwordConfirmation")
let btn1 = document.getElementById("btn1")


userDetails = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

const getDetails = () => {
    userDetails.username = username.value
    userDetails.email = emailAddress.value
    userDetails.password = password.value
    userDetails.passwordConfirmation = passwordConfirmation.value
    console.log(userDetails.password.length)

    let token = localStorage.getItem("userDetails")
    let token1 = JSON.parse(token)
    console.log(token1)

    if (token1) {
        if (userDetails.password === userDetails.passwordConfirmation && userDetails.password.length > 0 && userDetails.email != token1.email) {
            localStorage.setItem("userDetails", JSON.stringify(userDetails))
            alert("Account Created Successfully")
            window.location.href = "login.html";
        } else {
                alert("Email already exist")
        }
    } else {
        localStorage.setItem("userDetails", JSON.stringify(userDetails))
        alert("Account Created Successfully")
        window.location.href = "login.html";
    }


    // if(token && token1.email != userDetails.email){
    //         if(userDetails.password === userDetails.passwordConfirmation && userDetails.password.length > 0){
    //             localStorage.setItem("userDetails" , JSON.stringify(userDetails))
    //             alert("Account Created Successfully")
    //             window.location.href = "/login.html";
    //         }else{
    //             alert("password error")
    //         }
    // }else{
    //     alert("Email already exist")
    // }


}


btn1.addEventListener("click", (e) => {
    e.preventDefault()
    getDetails()
})


