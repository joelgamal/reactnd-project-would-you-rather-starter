import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions} from '../actions/questions'
// import { setAuthedUser } from './authedUser'

// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

// export function handleCreateQuestionBoth(optionOneText,optionTwoText, id){
//   console.log("handleCreateQuestionBoth")
//   handleCreateQuestion(optionOneText,optionTwoText)
//   createQuestionUser(id)
// }