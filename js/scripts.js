$(document).ready(function(){
  $("form#dog-survey").submit(function(event){
    event.preventDefault();
    $("#dog-checklist").show();
    $("input:checkbox[name=dog-checklist]:not(:checked)").each(function(){
        var dogChecklistMode = $(this).val();}
};​
      $('#dog-checklist').append(dogChecklistMode + "<br>");
    });
    $('#dog-survey').hide();
  });
});
