

document.addEventListener("DOMContentLoaded", function () {
  let acc_boxE1 = document.querySelectorAll(".acc_box");
  let symbols = document.querySelectorAll(".symbol");

  acc_boxE1.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Check if the clicked box is already active
      const isActive = item.classList.contains("active");

      // Remove 'active' class from all boxes
      acc_boxE1.forEach(eachItem => {
        eachItem.classList.remove("active");
      });

      // Remove 'active' class from all text panels
      document.querySelectorAll(".acc_text").forEach(textPanel => {
        textPanel.classList.remove("active");
      });

      // Reset all symbols to plus
      symbols.forEach(eachSymbol => {
        eachSymbol.classList.remove("fa-minus-circle");
        eachSymbol.classList.add("fa-plus-circle");
      });

      // Set the clicked item's symbol to minus and activate the box
      if (!isActive) {
        item.classList.add("active");
        item.querySelector(".symbol").classList.remove("fa-plus-circle");
        item.querySelector(".symbol").classList.add("fa-minus-circle");
        item.querySelector(".acc_text").classList.add("active");
      }
    });
  });
});


// Sticky Header Js here 

// let header = document.querySelector('.header');
// header.classList.toggle('sticky', window.scrollY > 100);





// Contact US Form Page JS

(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


//   Contact Us Form Submission Js 

// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "test@gmail.com",
//     Password: "password",
//     To: 'test@gmail.com',
//     From: document.getElementById("email").value,
//     Subject: document.getElementById("title").value,
//     Body: "And this is the body"
//   }).then(
//     message => alert(message)
//   );
// }

// Email.send({
//   SecureToken: "6c30e86d-b02a-449a-be00-1f5d74bf12cc",
//   To: 'test@gmail.com',
//   From: document.getElementById("email").value,
//   Subject: document.getElementById("title").value,
//   Body: "And this is the body test by dev"
// }).then(
//   message => alert(message)
// );





