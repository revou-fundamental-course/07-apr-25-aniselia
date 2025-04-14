document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Please enter your name:");
    if (userName) {
      document.getElementById("banner-text").textContent = `Hi, Welcome ${userName} To Website`;
    }
  
    const form = document.getElementById("message-form");
    const submittedData = document.getElementById("submitted-data");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message-field").value;
  
      submittedData.innerHTML = `
        <h3>Submitted Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    });
  });
  