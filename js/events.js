function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}
function frameIt() {
  $(document).on('load', function() {
    $('img').addClass('tasty');
    $('img').css({"border-color": "red",
                  "border-width":"1px",
                  "border-style":"solid"})
  });
}
functino submitIt() {

}
$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
});
