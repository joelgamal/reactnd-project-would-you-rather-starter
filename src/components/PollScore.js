import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollScoreOption from './PollScoreOption'


//component no. 7
class PollScore extends Component{

    render(){
        const {question, user}= this.props
        return(
            <div>
                {user && `Asked by ${user.name}`}
                
                {user &&<img
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'
                />}
                <div>
                    Results
                    {question &&<PollScoreOption 
                    text={question.optionOne.text} 
                    votes={question.optionOne.votes.length} 
                    totalVotes={question.optionOne.votes.length + question.optionTwo.votes.length}/>}

                    {question &&<PollScoreOption 
                    text={question.optionTwo.text} 
                    votes={question.optionTwo.votes.length} 
                    totalVotes={question.optionOne.votes.length + question.optionTwo.votes.length}/>}
                </div>
            </div>
        )
    }



}

function mapStateToProps ({ questions, users }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const user = question? users[question.author]: null
    console.log("==========",user)
    // const name = 'Sarah Edo';

    return{
        question,
        user: user? user: null
    }

}

export default connect(mapStateToProps)(PollScore)