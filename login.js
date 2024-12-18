function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
document.addEventListener("DOMContentLoaded", () => {
    google.account.login_uri="signup.html"
    const login = document.getElementById("login")    

    login.addEventListener("submit", (e) => {
        const emailField = login.email.value
        const passwordField = login.password.value
    })

})