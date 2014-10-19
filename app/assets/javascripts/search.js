$(document).ready(function(){
  $("#search-form").on("submit", function(event){
    event.preventDefault();

    var searchContent = $("#get-city").val();
    $("#get-city").val('');

    $.ajax({
      url: "/searches",
      dataType: "json",
      method: "GET",
      success: function(data){
        var name = data.businesses[0].name;
        var location = data.businesses[0].location.address;
        $("#results").html("<h2>"+name+location+"</h2>")
      }
    });
  });

});
