$(document).ready(function(){
  $("#search-form").on("submit", function(event){
    event.preventDefault();

    var searchWord = $("#get-location").val();
    $("#get-location").val('');

    $.post('/search', {search: searchWord}, function(data) {
      console.log(data.businesses.length);
      for(var i = 0; i < data.businesses.length; i++) {
        var name = data.businesses[i].name;
        var location = data.businesses[i].location.display_address;
        var url = data.businesses[i].url
        if(i==0){
          $("#name-list #results").html("<li class='header'>Name</li>"+"<li><a href="+url+">"+name+"</a></li>");
          $("#address-list #results").html("<li class='header'>Address</li>"+"<li>"+location+"</li>");
        } else {
          $("#name-list #results").append("<li><a href="+url+">"+name+"</a></li>");
          $("#address-list #results").append("<li>"+location+"</li>");
        }
      }

    });
    $("#name-list").slideDown();
    $("#address-list").slideDown();
  });

});
