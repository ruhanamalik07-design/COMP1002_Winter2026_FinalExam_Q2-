//Select the form
const form = document.getElementById("registrationForm");

//add submit event listener
form.addEventListener("submit" , function(event){

    //Prevent default form submission
    event.preventDefault();

    //Get user's name
    const name = document.getElementById("name").value;

    //Display personalised message
    const message = document.getElementById("message");
    message.textContent = `Thank you, ${name}! You have registered. `;

    //rest form
    form.reset();

});