class SearchesController < ApplicationController

    def search
      location = "params[:location]"
      parameters = { term: "coffee", limit: 10 }
      respond_to do |format|
        format.html
        format.json { render json: Yelp.client.search(location, parameters) }
      end
    end

    def show

    end
end
