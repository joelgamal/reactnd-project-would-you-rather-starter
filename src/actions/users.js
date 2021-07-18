export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CREATE_QUESTION_TO_USER = 'CREATE_QUESTION_TO_USER'
export const ANSWER_QUESTION_TO_USER = 'ANSWER_QUESTION_TO_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function createQuestionUser(id,author){
  console.log("createQuestionUser")

  return{
    type: CREATE_QUESTION_TO_USER,
    id,
    author,
  }
}

export function answerQuestionUser(authedUser, qid, answer){
  console.log("answerQuestionUser")
  
  return{
    type: ANSWER_QUESTION_TO_USER,
    authedUser,
    qid,
    answer,
  }
}