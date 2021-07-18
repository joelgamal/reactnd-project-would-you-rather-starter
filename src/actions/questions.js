import { saveQuestion,saveQuestionAnswer } from '../utils/api'
import { createQuestionUser,answerQuestionUser } from '../actions/users'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const CREATE_QUESTIONS = 'CREATE_QUESTIONS'
export const ANSWER_QUESTIONS = 'ANSWER_QUESTIONS'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function createQuestion(question){
  // console.log("create() action", question)
  return{
    type: CREATE_QUESTIONS,
    question
  }
}

export function handleCreateQuestion(optionOneText,optionTwoText){
  return (dispatch, getState)=>{
    const { authedUser } = getState()

    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText

    })
    .then((question) =>{ 
      dispatch(createQuestion(question))
      dispatch(createQuestionUser(question.id,question.author))

    })
  }

}


function answerQuestion(authedUser, qid, answer){
  return{
    type: ANSWER_QUESTIONS,
    authedUser, 
    qid,
    answer
  }
}

export function handleAnswerQuestion(qid,answer){
  return (dispatch, getState)=>{
    const { authedUser } = getState()

    dispatch(answerQuestion(
      authedUser,
      qid,
      answer,
    ))

    dispatch(answerQuestionUser(authedUser, qid,answer))

    // console.log("================",{authedUser, qid,answer,})

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,

    })
    .catch((e) => {
      console.warn('Error in handleToggleTweet: ', e)
      alert('The was an error liking the tweet. Try again.')
    })

  }

}