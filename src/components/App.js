import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import NewQuestion from './NewQuestion'
// import Question from './Question'
// import LogIn from './LogIn'
import PollScore from './PollScore'


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

          {/* <NewQuestion/>
          <Question id="6ni6ok3ym7mf1p33lnez"/> 
          <LogIn />*/}
          <PollScore id="vthrdm985a262al8qx3do"/>
          
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
