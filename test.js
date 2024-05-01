const nameSubmitButton = document.querySelector(".add-name-button")
const loggedUser = document.querySelector(".logged-user")
const name1input = document.getElementById("name1")

const userNameInputtCon = document.querySelector(".user-name-input-con")

window.onload = function (){
    userNameInputtCon.classList.remove("hide");
}


nameSubmitButton.addEventListener("click", ()=>{
    console.log(name1input.value)
    loggedUser.innerHTML = name1input.value

     console.log(userNameInputtCon.classList)
    userNameInputtCon.classList.toggle("hide")
    
})
