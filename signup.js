document.addEventListener("DOMContentLoaded", () => {
    const signup = document.getElementById("signup")    

    signup.addEventListener("submit", (e) => {
        const emailField = signup.email.value
        const passwordField = signup.password.value
        const confirm = signup.confirmation.value
        if (confirm !== passwordField) {
            e.preventDefault()
            signup.confirmation.focus()
            alert("Please ensure that the two passwords match.")
        }
        
    })
})