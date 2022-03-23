import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Books from "./books/Books"
import AddRecommendation from "./AddRecommendation"

function AppRoutes(props) {



  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/books"
        //   pageTitle="Books"
          render={(routerProps) => <Books    />}
        />
            <Route
          exact
          path="/new-recommendation"
          render={(routerProps) => <AddRecommendation urlSelected="book" />}
        />
          <Route
          exact
          path="/new-recommendation/book"
          render={(routerProps) => <AddRecommendation urlSelected="book" />}
        />
            <Route
          exact
          path="/new-recommendation/episode"
          render={(routerProps) => <AddRecommendation urlSelected="episode" />}
        />
     
      </Switch>
    </>
  )
}

export default AppRoutes
