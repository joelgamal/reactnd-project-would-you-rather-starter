import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import Question from './Question'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div className="App">
        starter code
        {this.props.loading === true
          ? null
          : <div>

          <NewQuestion/>
          <Question id="6ni6ok3ym7mf1p33lnez"/>
          </div>
        
        }

      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
