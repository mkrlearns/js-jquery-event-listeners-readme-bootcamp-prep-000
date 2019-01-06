function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}
function frameIt() {
  $('document').on('load', function() {
    $('img').addClass('tasty');
    $('img').style.cssText('border:1px;border-color:red;')
  });
}
$(document).ready(function(){

// call functions here

});
