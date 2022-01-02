$('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});


$('.submit').click(function () {
  var Name = $('#mce-FNAME').val();
  var Email = $('#mce-EMAIL').val();
  var Message = $('#mce-MESSAGE').val();
  
  if ($("Name").val() && $("Email").val() && $("Message").val() ){
      alert ("Message received. Your feedback is appreciated.");
  } else {
    alert('Please make sure you have filled in the form correctly!');
  }
})


$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});

$(".card").hover(function () {
  $(this).children(".card-1").fadeToggle(1000, "linear");
});