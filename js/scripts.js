$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    clear();
    $("input[name=work]:checked").each(function(item){
        $("#worklist").append("<li>"+ $(this).val() +"</li>");
    });

    $("input[name=nonwork]:checked").each(function(item){
      $("#nonworklist").append("<li>"+ $(this).val() +"</li>");
  });


    function clear(){
      $("li").remove();
    }
  })
});