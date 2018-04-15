
$(document).ready(function(){
  $("form#dogChecklistMode").submit(function(event)('#dog-survey').hide();{
    event.preventDefault();
      var dogChecklistMode = $(this).val();
    }
  }
    $('#dog-checklist').append(dogChecklistMode + "<br>");
  })
});
