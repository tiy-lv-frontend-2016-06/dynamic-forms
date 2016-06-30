$(document).ready(function(){
  

  $.get('http://json-data.herokuapp.com/forms', function(data){
    var htmlStr = '';
    data.forEach(function(field){


      if (field.type === 'text') {
        // htmlStr += '<label for="' + field.id + '">' + field.label + '</label><input type="text" id="' + field.id + '" /><i class="fa ' + field.icon + '"></i>';
        htmlStr += `
          <label for="${field.id}">${field.label}</label>
          <input type="text" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
        `;
      }

    })
    $("#content").html(htmlStr);


    

    




  })
});