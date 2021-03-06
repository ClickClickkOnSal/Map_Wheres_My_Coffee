$(document).ready(function(){
  $("#search-form").on("submit", function(event){
    event.preventDefault();

    // Used so when user searches for the second time and so on it "mimics a page refresh"
    $("#name-list #results").html("");
    $("#address-list #results").html("");
    
    // Store the search term user inputed on submit
    var searchWord = $("#get-location").val();

    // Clears Input Field after submit
    $("#get-location").val('');

    // Sends user input to the controller where search function is handled
    // Data is passed as an argument to be able to retrieve the response from the yelp search api
    $.post('/search', {search: searchWord}, function(data, status) {

      // Console.log Driven Developmet!!!
      console.log(data.businesses.length)
      console.log(status)

      // if search brings 0 results display this to the page
      if (data.businesses.length === 0) {
        $("#name-list #results").html("<li>Did not find any results for your Search</li>");
        $("#address-list #results").html("<li>Did not find any results for your Search</li>")
      }

      // if search is a success this will run
      else if (status == "success"){
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
        } // closing bracket for "for loop"

      } // closing bracket for if

      // if status returns a 500 error display this to the page
      else if (status === 500) {
        $("#name-list #results").html("<li>Did not find any results for your Search</li>");
        $("#address-list #results").html("<li>Did not find any results for your Search</li>")
      }

    }); // closing bracket for $.post

  }); // closing bracket for $("#search-form")

}); // closing bracket for document.ready function
