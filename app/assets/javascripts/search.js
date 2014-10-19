$(document).ready(function(){
  $("#search-form").on("submit", function(event){
    event.preventDefault();

    var searchWord = $("#get-city").val();
    $("#get-city").val('');

    $.post('/search', {search: searchWord}, function(data) {
      console.log(data)
      for(var i = 0; i < 10; i++) {
        var name = data.businesses[i].name;
        var location = data.businesses[i].location.display_address;
        if(i==0){
          $("#name-list #results").html("<li class='header'>Name</li>"+"<li>"+name+"</li>");
          $("#address-list #results").html("<li class='header'>Address</li>"+"<li>"+location+"</li>");
        } else {
          $("#name-list #results").append("<li>"+name+"</li>");
          $("#address-list #results").append("<li>"+location+"</li>");
        }
      }

    });

  });

});
