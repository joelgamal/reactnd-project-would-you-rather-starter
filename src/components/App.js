import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route , Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import NewQuestion from './NewQuestion'
// import Question from './Question'
import LogIn from './LogIn'
import PollScore from './PollScore'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    const {loading, authedUser}= this.props
    return (
      <Router>
        <Fragment>
          <div className="App">
            starter code
            <Nav />
            {loading === true
              ? <h3>LOADING</h3>
              : <div>
                <Switch>

                  <Route path='/' exact component={LogIn} />

                  <Route path="/home">
                    {authedUser ?  <Home /> : <Redirect to="/login" />}
                  </Route>
                  <Route path="/add">
                    {authedUser ?  <NewQuestion /> : <Redirect to="/login" />}
                  </Route>
                  <Route path="/leaderboard">
                    {authedUser ?  <LeaderBoard /> : <Redirect to="/login" />}
                  </Route>
                  <Route path="/questions/:id" 
                  component={PollScore}
                  />
                  {/* <Route path="/questions/:id">
                    {authedUser ?  <PollScore /> : <Redirect to="/login" />}
                  </Route> */}
                  <Route path='/login'  component={LogIn} /> 
                  <Route path="/error" component={NoMatch} />
                  <Redirect to="/error" />   

                </Switch>
              {/*<Question id="6ni6ok3ym7mf1p33lnez"/> 
              <NewQuestion/>
              <LogIn />
              <PollScore id="vthrdm985a262al8qx3do"/>
              <LeaderBoard/>
              <Home/>*/}
              
              </div>
            
            }

          </div>
        </Fragment>
    </Router>
    );
  }
}

function mapStateToProps ({ authedUser ,users }) {
  return {
    loading: (users.length === 0),
    authedUser,
  }
}

const NoMatch = ()=>{
  return(
    <h2>Page not found</h2>
  )

}

export default connect(mapStateToProps)(App);
