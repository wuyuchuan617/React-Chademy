import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ManagerOrder from '../pages/ManageOrder'
function DashBoard(props) {
  const { showDashBoard, setDashboard } = props
  return (
    <Router>
      <>
        <Switch>
          {/* 404找不到網頁，需要放在switch路由表最後一個 */}
          <Route path="dashboard">
            <ManagerOrder
              showDashBoard={showDashBoard}
              setDashboard={setDashboard}
            />
          </Route>
        </Switch>
      </>
    </Router>
  )
}
export default DashBoard
