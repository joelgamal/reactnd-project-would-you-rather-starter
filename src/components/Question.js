import React, { Component ,Fragment } from 'react'
import { connect } from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions'



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

    }


    render(){
        const {question} = this.props
        const optOneTxt = question && question.optionOne.text
        const optTwoTxt = question && question.optionTwo.text

        // console.log(question.optionOne)
        
        

        return(
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
        )
    }
}


function mapStateToProps ({ authedUser, questions }, {id}) {
    const question = questions[id]

    return{
        authedUser,
        question: question,
    }

}

export default connect(mapStateToProps)(Question)
