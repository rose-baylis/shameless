import React from "react"
import { Switch, Route } from "react-router-dom"
import Books from "./books/Books"
import Episodes from "./episodes/Episodes"

function AppRoutes(props) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Books {...routerProps} />}
        />
        <Route
          exact
          path="/books"
        //   pageTitle="Books"
          render={(routerProps) => <Books    />}
        />
        <Route
          exact
          path="/episodes"
        //   pageTitle="Episodes   "
          render={(routerProps) => (
            <Episodes {...routerProps} />
          )}
        />
      </Switch>
    </>
  )
}

export default AppRoutes
