import * as actions from "./action-types";

export function loginAttempt(email, password) {
    return {
        type: actions.LOGIN_ATTEMPT,
        email: email,
        password: password
    }
}

export function loginFailed() {
    return {
        type: actions.LOGIN_FAILED,
    }
}

export function loginSuccess(user) {
    return {
        type: actions.LOGIN_SUCCESS,
        ...user
    }
}

export function validateTokenAttempt(token) {
    return {
        type: actions.VALIDATE_TOKEN_ATTEMPT,
        token: token
    }
}

export function validateTokenFailed() {
    return {
        type: actions.VALIDATE_TOKEN_FAILED,
    }
}

export function validateTokenSuccess(user) {
    return {
        type: actions.VALIDATE_TOKEN_SUCCESS,
        ...user
    }
}
export function logoutAttempt() {
    return {
        type: actions.LOGOUT_ATTEMPT,
    }
}

export function logoutFailed() {
    return {
        type: actions.LOGOUT_FAILED,
    }
}

export function logoutSuccess() {
    return {
        type: actions.LOGOUT_SUCCESS
    }
}

export function registerAttempt(user) {
    return {
        type: actions.REGISTER_ATTEMPT,
        ...user
    }
}

export function registerSuccess(user) {
    return {
        type: actions.REGISTER_SUCCESS,
        ...user
    }
}

export function registerFailed() {
    return {
        type: actions.REGISTER_FAILED,
    }
}

export function verifyAttempt() {
    return {
        type: actions.VERIFY_EMAIL_ATTEMPT
    }
}

export function verifyFailed() {
    return {
        type: actions.VERIFY_EMAIL_FAILED
    }
}

export function verifySuccess() {
    return {
        type: actions.VERIFY_EMAIL_SUCCESS
    }
}

export function sendVerificationCode(code) {
    return {
        type: actions.SEND_VERIFICATION_CODE,
        verificationCode: code
    }
}

export function resendVerificationCode(code) {
    return {
        type: actions.RESEND_VERIFICATION_CODE,
    }
}

export function setEmailForResetPassword(email) {
    return {
        type: actions.SET_EMAIL_FOR_RESET_PASSWORD,
        email: email
    }
}

export function resetPassword(password) {
    return {
        type: actions.RESET_PASSWORD,
        password: password
    }
}

export function updateUserAttempt(user) {
    return {
        type: actions.UPDATE_USER_ATTEMPT,
        ...user
    }
}

export function updateUserFailed() {
    return {
        type: actions.UPDATE_USER_FAILED,
    }
}

export function updateUserSuccess(user) {
    return {
        type: actions.UPDATE_USER_SUCCESS,
        ...user
    }
}

export function setPreQuiz(quiz) {
    return {
        type: actions.SET_PRE_QUIZ,
        prQuiz: quiz
    }
}

export function updateQuizAttempt(quiz) {
    return {
        type: actions.UPDATE_QUIZ_ATTEMPT,
        quiz: quiz
    }
}

export function updateQuizFailed() {
    return {
        type: actions.UPDATE_QUIZ_FAILED,
    }
}

export function updateQuizSuccess(user) {
    return {
        type: actions.UPDATE_QUIZ_SUCCESS,
        ...user
    }
}

export function updateAssessmentAttempt(assessment) {
    return {
        type: actions.UPDATE_ASSESSMENT_ATTEMPT,
        assessment: assessment
    }
}

export function updateAssessmentFailed() {
    return {
        type: actions.UPDATE_ASSESSMENT_FAILED,
    }
}

export function updateAssessmentSuccess(user) {
    return {
        type: actions.UPDATE_ASSESSMENT_SUCCESS,
        ...user
    }
}

export function updateMembershipAttempt(tokenId, membership) {
    return {
        type: actions.UPDATE_MEMBERSHIP_ATTEMPT,
        tokenId: tokenId,
        membership: membership
    }
}

export function updateMembershipFailed() {
    return {
        type: actions.UPDATE_MEMBERSHIP_FAILED,
    }
}

export function updateMembershipSuccess(data) {
    return {
        type: actions.UPDATE_MEMBERSHIP_SUCCESS,
        ...data
    }
}
