$(document).ready(function(){
  $("#search-form").on("submit", function(event){
    event.preventDefault();

    // Store the search term user inputed on submit
    var searchWord = $("#get-location").val();

    // Clears Input Field after submit
    $("#get-location").val('');

    // Sends user input to the controller where search function is handled
    // Data is passed as an argument to be able to retrieve the response from the yelp search api
    $.post('/search', {search: searchWord}, function(data) {

    // Data is retreived in JSON format and parsing through the data here
      for(var i = 0; i < data.businesses.length; i++) {

        // Name For the Coffee Shop saved to name variable
        var name = data.businesses[i].name;

        //  Address for the Coffee Shop saved to location variable
        var location = data.businesses[i].location.display_address;

        // Link to the Coffeshop on Yelp saved to url vairiable
        var url = data.businesses[i].url

        // for the first coffee shop to be displayed Labels Name and Address Will be displayed
        // When search is displayed and user searches again it using .html clears the previous results
        if(i==0){
          $("#name-list #results").html("<li class='header'>Name</li>"+"<li><a href="+url+">"+name+"</a></li>");
          $("#address-list #results").html("<li class='header'>Address</li>"+"<li>"+location+"</li>");
        }

        // appends the rest of the results from the json data
        else {
          $("#name-list #results").append("<li><a href="+url+">"+name+"</a></li>");
          $("#address-list #results").append("<li>"+location+"</li>");
        }
      }

    }); // closing bracket for $.post

  }); // closing bracket for $("#search-form")

}); // closing bracket for document.ready function
