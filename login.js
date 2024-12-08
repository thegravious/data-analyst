let username = document.getElementById("username")
let password = document.getElementById("password")
let btn1 = document.getElementById("btn1")


console.log("work")


const getDetails = () => {
    let token = localStorage.getItem("userDetails")
    let token1 = JSON.parse(token)

    console.log(token1)

    if(!token1){
        window.location.href = "signup.html";
    }else{
        if(username.value == token1.email ||username.value == token1.username && password.value == token1.password){
            window.location.href = "index.html";
        }else{
            alert("Incorrect Passord or Email")
        }
    }
}

btn1.addEventListener("click", (e)=> {
    e.preventDefault()
    getDetails()
})