/* message us function */

function form_print () {
const name = document.getElementById("name").value.split(" ").map(
    letter => letter = letter[0].toUpperCase() + letter.substr(1)
    ).join(" ")
let gender = document.getElementsByName("gender")
gender = Array.from(gender).find(radio => radio.checked).value
const birthday = document.getElementById("birthday").value
const message = document.getElementById("message").value
if (name && gender && birthday && message) {
    const welcomeText = document.querySelector("header div.text h1")
    welcomeText.innerText = `Hi ${name}, Welcome To The Website`
    
    const result = document.getElementById("result")
    result.value = 
    `Current time : ${Date()}

Nama : ${name}
Jenis Kelamin : ${gender}
Tanggal Lahir : ${birthday}
Pesan : ${message}`
} else {
    alert("Isikan semua form")
}
}

/* mobile menu function */

const hamburger = document.getElementsByClassName("hamburger")[0]
hamburger.addEventListener("click", function translateLeft () {
    const mobile_links = document.querySelector("div.mobile_links")
    if (mobile_links.hasAttribute("style")) {
        mobile_links.removeAttribute("style")
    } else {
        mobile_links.style.transform = "translateX(0)"
    }
})



