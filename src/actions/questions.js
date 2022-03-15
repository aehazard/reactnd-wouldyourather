export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const SUBMIT_NEW_QUESTION = 'SUBMIT_NEW_QUESTION'

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

export function submitNewQuestion(question) {
  return {
    type: SUBMIT_NEW_QUESTION,
    question
  }
}
