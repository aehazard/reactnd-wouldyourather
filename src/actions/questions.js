import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_ANSWER = "SUBMIT_ANSWER"

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function submitAnswer({ authedUser, qid, answer }) {
  return {
    type: SUBMIT_ANSWER,
    authedUser,
    qid,
    answer
  }
}
