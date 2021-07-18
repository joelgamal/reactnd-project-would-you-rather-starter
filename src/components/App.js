import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import Home from './Home'
// import NewQuestion from './NewQuestion'
import Question from './Question'
// import LogIn from './LogIn'
// import PollScore from './PollScore'
// import LeaderBoard from './LeaderBoard'



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div className="App">
        starter code
        {this.props.loading === true
          ? <h3>LOADING</h3>
          : <div>

          <Question id="6ni6ok3ym7mf1p33lnez"/> 
          {/*
          <NewQuestion/>
          <LogIn />
          <PollScore id="vthrdm985a262al8qx3do"/>

          <LeaderBoard/>

          <Home/>*/}
          
          </div>
        
        }

      </div>
    );
  }
}

function mapStateToProps ({ users }) {
  return {
    loading: (users.length === 0)
  }
}

export default connect(mapStateToProps)(App);
