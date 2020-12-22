import * as actions from "../actions/action-types";

export default function rootReducer(state, action = {}) {
    switch (action.type) {
        case actions.SET_LOADING:
            return state.withMutations(state => {
                state
                    .set('isLoading', action.isLoading)
            });
        case actions.SET_VERIFICATION_CODE:
            return state.withMutations(state => {
                state
                    .set('verificationCode', action.verificationCode)
                    .set('isForRegister', action.isForRegister)
            });
        case actions.SET_EMAIL_FOR_RESET_PASSWORD:
            return state.withMutations(state => {
                state
                    .set('isForRegister', false)
            });
        case actions.LOGIN_ATTEMPT:
            return state.withMutations(state => {
                state
                    .set('isLoading', true)
            })
        case actions.LOGIN_FAILED:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.LOGIN_SUCCESS:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.VALIDATE_TOKEN_ATTEMPT:
            return state.withMutations(state => {
                state
                    .set('isLoading', true)
            })
        case actions.VALIDATE_TOKEN_FAILED:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.VALIDATE_TOKEN_SUCCESS:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.UPDATE_USER_ATTEMPT:
            return state.withMutations(state => {
                state
                    .set('isLoading', true)
            })
        case actions.UPDATE_USER_FAILED:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.UPDATE_USER_SUCCESS:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.UPDATE_MEMBERSHIP_ATTEMPT:
            return state.withMutations(state => {
                state
                    .set('isLoading', true)
            })
        case actions.UPDATE_MEMBERSHIP_FAILED:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.UPDATE_MEMBERSHIP_SUCCESS:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.REGISTER_ATTEMPT:
            return state.withMutations(state => {
                state
                    .set('isLoading', true)
            })
        case actions.REGISTER_FAILED:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.REGISTER_SUCCESS:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.VERIFY_EMAIL_ATTEMPT:
            return state.withMutations(state => {
                state
                    .set('isLoading', true)
            })
        case actions.VERIFY_EMAIL_FAILED:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.VERIFY_EMAIL_SUCCESS:
            return state.withMutations(state => {
                state
                    .set('isLoading', false)
            })
        case actions.RESET_PASSWORD:
            return state.withMutations(state => {
                state
                    .set('isLoading', true)
            })
        case actions.SEND_VERIFICATION_CODE:
            return state.withMutations(state => {
                state
                    .set('isLoading', true)
            })

        default:
            return state
    }
}