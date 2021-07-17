import { RECEIVE_QUESTIONS, CREATE_QUESTIONS, ANSWER_QUESTIONS } from '../actions/questions'


export default function questions (state = {}, action) {
    switch(action.type) {
      case RECEIVE_QUESTIONS :
        return {
          ...state,
          ...action.questions
        }

      case CREATE_QUESTIONS :
        // const userId = action.question.author
        // let NewQuestions = {}
        // if (userId !== null) {
        //   NewQuestions = {
        //     [userId]: {
        //       ...state[userId],
        //       questions: state[userId].questions.concat([action.question.id])
        //     }
        //   }
        // }
        // console.log(state.users[action.question.author]})
        return{
          ...state,
          [action.question.id]: action.question,

        }

      case ANSWER_QUESTIONS :

        let newVotes ={}
        // if(state[action.qid].optionOne.text === action.answer){
        //   newVotes={
        //     [action.qid]:{
        //       ...state[action.id],
        //       optionOne:{
        //         ...state[action.qid.optionOne],
        //         votes: state[action.qid].optionOne.votes.concat([action.author])
        //       }
        //     }
        //   }
        // }else{
        //   newVotes={
        //     [action.qid]:{
        //       ...state[action.id],
        //       optionTwo:{
        //         ...state[action.qid.optionTwo],
        //         votes: state[action.qid].optionTwo.votes.concat([action.author])
        //       }
        //     }
        //   }
        // }
            const{ authUser, qid, answer }=action
            newVotes={
            [qid]:{
              ...state[qid],
              [answer]:{
                ...state[qid][answer],
                votes: state[qid][answer].votes.concat([authUser])
              }
            }
          }


        return{
          ...state,
          ...newVotes,
        }
      
      default :
        return state
    }
  }