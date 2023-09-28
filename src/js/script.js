import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/style.scss';
import '../sass/Our_services.scss';
import '../sass/trips.scss';
import '../sass/landing-page-egypt.scss';
import '../sass/landing-page-turkish.scss';
import '../sass/contact.scss';
import '../../node_modules/swiper/swiper-bundle.js';



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;

$(document).ready(function(){
  $("#button").click(function(){
    $("#discover").fadeIn(3000);
  });
});