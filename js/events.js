function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}
function frameIt() {
  $(document).on('load', function() {
    $('img').addClass('tasty');
    $('img').css('border:1px;border-color:red;');
  });
}
functino submitIt() {

}
$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
});
