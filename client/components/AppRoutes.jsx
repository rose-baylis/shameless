import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Books from "./books/Books"
import AddBook from "./AddRecommendation"

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
          render={(routerProps) => <AddBook    />}
        />
     
      </Switch>
    </>
  )
}

export default AppRoutes
