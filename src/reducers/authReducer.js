import * as actions from "../actions/action-types";

export default function authReducer(state, action = {}) {
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            let user = {
                ...action,
            }
            delete user['type'];
            return state.withMutations(state => {
                state
                    .set('token', user.token)
                    .set('name', user.name)
                    .set('email', user.email)
                    .set('imagePath', user.imagePath)
                    .set('phoneNumber', user.phoneNumber)
                    .set('state', user.state)
                    .set('city', user.city)
                    .set('age', user.age)
                    .set('gender', user.gender)
                    .set('quiz', user.quiz)
                    .set('assessment', user.assessment)
                    .set('expireDate', user.expireDate)
                    .set('phoneNumber', user.phoneNumber)
                    .set('verified', user.verified ? true : false)
            });
        case actions.VALIDATE_TOKEN_SUCCESS:
            user = {
                ...action,
            }
            delete user['type'];
            return state.withMutations(state => {
                state
                    .set('token', user.token)
                    .set('name', user.name)
                    .set('email', user.email)
                    .set('imagePath', user.imagePath)
                    .set('phoneNumber', user.phoneNumber)
                    .set('state', user.state)
                    .set('city', user.city)
                    .set('age', user.age)
                    .set('gender', user.gender)
                    .set('quiz', user.quiz)
                    .set('assessment', user.assessment)
                    .set('expireDate', user.expireDate)
                    .set('phoneNumber', user.phoneNumber)
                    .set('verified', user.verified ? true : false)
            });
        case actions.LOGOUT_SUCCESS:
            return state.withMutations(state => {
                state
                    .set('token', '')
                    .set('name', '')
                    .set('email', '')
                    .set('imagePath', '')
                    .set('phoneNumber', '')
                    .set('state', '')
                    .set('city', '')
                    .set('age', 0)
                    .set('gender', '')
                    .set('quiz', {})
                    .set('assessment', [])
                    .set('expireDate', '')
                    .set('phoneNumber', '')
                    .set('verified', false)
            });
        case actions.UPDATE_USER_SUCCESS:
            user = {
                ...action,
            }
            delete user['type'];
            return state.withMutations(state => {
                state
                    .set('name', user.name)
                    .set('email', user.email)
                    .set('imagePath', user.imagePath)
                    .set('phoneNumber', user.phoneNumber)
                    .set('state', user.state)
                    .set('city', user.city)
                    .set('age', user.age)
                    .set('gender', user.gender)
                    .set('quiz', user.quiz)
                    .set('assessment', user.assessment)
                    .set('expireDate', user.expireDate)
                    .set('phoneNumber', user.phoneNumber)
                    .set('verified', user.verified ? true : false)
            });
        case actions.UPDATE_MEMBERSHIP_SUCCESS:
            user = {
                ...action,
            }
            delete user['type'];
            return state.withMutations(state => {
                state
                    .set('expireDate', user.expireDate)
            });
        case actions.UPDATE_QUIZ_SUCCESS:
            user = {
                ...action,
            }
            delete user['type'];
            return state.withMutations(state => {
                state
                    .set('name', user.name)
                    .set('email', user.email)
                    .set('imagePath', user.imagePath)
                    .set('phoneNumber', user.phoneNumber)
                    .set('state', user.state)
                    .set('city', user.city)
                    .set('age', user.age)
                    .set('gender', user.gender)
                    .set('quiz', user.quiz)
                    .set('assessment', user.assessment)
                    .set('expireDate', user.expireDate)
                    .set('phoneNumber', user.phoneNumber)
                    .set('verified', user.verified ? true : false)
            });
        case actions.UPDATE_ASSESSMENT_SUCCESS:
            user = {
                ...action,
            }
            delete user['type'];
            return state.withMutations(state => {
                state
                    .set('token', user.token)
                    .set('name', user.name)
                    .set('email', user.email)
                    .set('imagePath', user.imagePath)
                    .set('phoneNumber', user.phoneNumber)
                    .set('state', user.state)
                    .set('city', user.city)
                    .set('age', user.age)
                    .set('gender', user.gender)
                    .set('quiz', user.quiz)
                    .set('assessment', user.assessment)
                    .set('expireDate', user.expireDate)
                    .set('phoneNumber', user.phoneNumber)
                    .set('verified', user.verified ? true : false)
            });
        case actions.REGISTER_FAILED:
            return state.withMutations(state => {
                state
                    .set('token', '')
                    .set('name', '')
                    .set('email', '')
                    .set('imagePath', '')
                    .set('phoneNumber', '')
                    .set('state', '')
                    .set('city', '')
                    .set('age', 0)
                    .set('gender', '')
                    .set('quiz', {})
                    .set('assessment', [])
                    .set('expireDate', '')
                    .set('phoneNumber', '')
                    .set('verified', false)
            });
        case actions.REGISTER_SUCCESS:
            user = {
                ...action,
            }
            console.log('authReducer: ', user)
            return state.withMutations(state => {
                state
                    .set('token', user.token)
                    .set('name', user.name)
                    .set('email', user.email)
                    .set('imagePath', user.imagePath)
                    .set('phoneNumber', user.phoneNumber)
                    .set('state', user.state)
                    .set('city', user.city)
                    .set('age', user.age)
                    .set('gender', user.gender)
                    .set('verified', false)
            });
        case actions.SET_EMAIL_FOR_RESET_PASSWORD:
            return state.withMutations(state => {
                state
                    .set('email', action.email)
            });
        case actions.SET_PRE_QUIZ:
            return state.withMutations(state => {
                state
                    .set('preQuiz', action.prQuiz)
            });
        default:
            return state
    }
}