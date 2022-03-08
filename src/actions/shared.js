import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, updateUserAnswers } from '../actions/users'
import { receiveQuestions, submitAnswer } from '../actions/questions'

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
