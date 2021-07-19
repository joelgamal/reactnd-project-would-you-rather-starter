import React, { Component ,Fragment } from 'react'
import { connect } from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions'
import {Redirect } from 'react-router-dom'


//component no. 6

class Question extends Component {

    state ={
        selectedOption: '',
    }

    handleChange = (e)=>{

        this.setState(()=>({
            selectedOption: e.target.value
          }))
        
        console.log(this.state.selectedOption)

    }

    handleSubmit = (e) =>{
        e.preventDefault()

        this.props.dispatch(handleAnswerQuestion(this.props.question.id ,this.state.selectedOption))

        this.setState(()=>({
            selectedOption: '',
        }))

        this.props.history.push(`/polls/${this.props.question.id }`)

    }


    render(){
        const {question, idExist, quesLoaded} = this.props
        const optOneTxt = question && question.optionOne.text
        const optTwoTxt = question && question.optionTwo.text

        // console.log(question.optionOne)

        return(
            <Fragment>
                {(quesLoaded && !idExist)
                ?<Redirect to="/error" /> 
                :
                <div>
                    {question
                    ? 
                    <Fragment>
                    <h2> {this.props.authedUser} asks:</h2>
                    <h3>Would you rather?</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="radio"
                        value="optionOne"
                        checked={this.state.selectedOption === "optionOne"}
                        onChange={this.handleChange}
                        />
                        {optOneTxt}
                        <br></br>
                        <input
                        type="radio"
                        value="optionTwo"
                        checked={this.state.selectedOption === "optionTwo"}
                        onChange={this.handleChange}
                        />
                        {optTwoTxt}
                        <br></br>
                        <button
                        className = 'btn'
                        type= 'submit'
                        disabled={this.state.selectedOption === ''}>
                            Submit
                        </button>
                    </form>
                    </Fragment>
                    : <h3>Loading</h3>
                    }
                </div>
                }
            </Fragment>
        )
    }
}


function mapStateToProps ({ authedUser, questions },props) {
    const { id } = props.match.params
    const question = questions[id]
    const questionIDs = Object.keys(questions)
    const idExist = questionIDs.includes(id)

    return{
        authedUser,
        question,
        idExist,
        quesLoaded: questionIDs.length !== 0,
    }

}

export default connect(mapStateToProps)(Question)
