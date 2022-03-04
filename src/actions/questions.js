import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_ANSWER = "SUBMIT_ANSWER"

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function submitAnswer({ authedUser, qid, answer }) {
  return {
    type: SUBMIT_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSubmitAnswer (info) {
  return (dispatch) => {
    dispatch(submitAnswer(info))

    return saveQuestionAnswer(info)
  }
}
