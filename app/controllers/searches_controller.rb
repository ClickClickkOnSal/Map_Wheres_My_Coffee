class SearchesController < ApplicationController

    def index
    end

    # Receives input from user through post method from javascript file
    # Handles retrieving the data from the API and renders the response as json
    def search
      location_object = {search: params[:search] }
      location = location_object[:search]
      parameters = { category_filter: "coffee", limit: 10, sort: 1 }
      render json: Yelp.client.search(location, parameters)
    end

end
