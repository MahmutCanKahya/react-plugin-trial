import { createModel } from '@rematch/core'
import { AuthServices, User } from '../services/auth';
import { RootModel } from './index'

export interface AuthState {
    user:User;
}

export const auth = createModel<RootModel>()({
    state: <AuthState>{user:{} as User},
    reducers: {
        // handle state changes with pure functions
        login(state, payload: User) {
            return {...state, user:payload}
        },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async loginAsync(state) {
            console.log('This is current root state', state);
            const user = await AuthServices.login({
                "email": "admin@vidieats.com",
                "password": "123123123",
            });
            console.log(user);
            dispatch.auth.login(user);
        },
    }),
});