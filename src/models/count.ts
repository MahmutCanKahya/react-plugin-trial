import { createModel } from '@rematch/core'
import axios from 'axios';
import { RootModel } from './index'

type QuestionType = "true-false" | "other-value"
type Question = {
    title: string
}

interface AuthState {
    questions: Array<Question>;
    questionType: QuestionType
}

export const count = createModel<RootModel>()({
    state: 0,
    reducers: {
        // handle state changes with pure functions
        userLoginSuccess(state, payload: number) {
            return state +payload
        },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async login(payload: number, state) {
            console.log('This is current root state', state);
            dispatch.count.userLoginSuccess(payload)
        },
    }),
});