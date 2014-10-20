class SearchesController < ApplicationController
    def index
    end

    def search
      location_object = {search: params[:search] }
      location = location_object[:search]
      parameters = { category_filter: "coffee", limit: 10, sort: 1 }
      render json: Yelp.client.search(location, parameters)
    end

end
