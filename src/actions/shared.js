import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from '../actions/users'
import { receiveQuestions, submitAnswer, submitNewQuestion } from '../actions/questions'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}


export function handleSubmitAnswer (info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(submitAnswer(info))
        dispatch(updateUserAnswers(info))
      })
  }
}

export function handleSubmitQuestion (info) {
  return (dispatch) => {
    return saveQuestion(info)
      .then((question) => {
        dispatch(submitNewQuestion(question))
        dispatch(updateUserQuestions(question))
      })
  }
}
