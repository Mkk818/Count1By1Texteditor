// headerとfooterのパーツ化
$(function(){
  $.ajaxSetup({cache:false});
  $("header").load("/common/header.html");
  $("footer").load("/common/footer.html");
})
