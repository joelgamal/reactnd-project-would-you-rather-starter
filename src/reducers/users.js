import { RECEIVE_USERS, CREATE_QUESTION_TO_USER, ANSWER_QUESTION_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
      case CREATE_QUESTION_TO_USER :
        return{
          ...state,
          [action.author]:{
            ...state[action.author],
            questions: state[action.author].questions.concat([action.id])
          }
        }
      case ANSWER_QUESTION_TO_USER:
        return{
          ...state,
          [action.authedUser]:{
            ...state[action.authedUser],
            answers:{
              ...state[action.authedUser].answers,
              [action.qid]: action.answer
            }
          }
        }
    default :
      return state
  }
}