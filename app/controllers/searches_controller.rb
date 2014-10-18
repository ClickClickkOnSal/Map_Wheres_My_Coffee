class SearchesController < ApplicationController

    def index
      parameters = { term: "coffee", limit: 10 }
      render json: Yelp.client.search("San Francisco", parameters)
    end
end
