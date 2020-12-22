import { call, put, takeLatest, take, select } from "redux-saga/effects";
import * as actions from "../actions/action-types";
import * as rootAction from "../actions/rootAction";
import * as authAction from "../actions/authAction";
import { Alert } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import * as NavigationService from '../services/navigationService'
import * as Api from '../../api';
import Toast from 'react-native-simple-toast';

export const getAuth = (state) => state.get('auth');
export const getRoot = (state) => state.get('root');

const generateVerificationCode = () => {
    let x = Math.floor((Math.random() * 100000));
    let str = "00000" + x.toString();
    let verificationCode = str.substring(str.length - 5, str.length);
    return verificationCode;
}
function* loginAttempt(action) {
    let user = {
        ...action
    };

    let fcmToken = yield AsyncStorage.getItem('fcmToken')
    user = {
        ...user,
        fcmToken: fcmToken
    }
    delete user['type'];
    const res = yield call(Api.login, user);
    if (res.status == "success" && res.data) {
        let user = res.data;
        yield AsyncStorage.setItem('token', user.token)
        yield put(authAction.loginSuccess(user));
    } else if (res.status == "failed") {
        Toast.show(res.msg, Toast.LONG);
        yield put(authAction.loginFailed());
    } else {
        Toast.show('Login failed', Toast.LONG);
        yield put(authAction.loginFailed());
    }
}
function* loginFailed(action) {
    //     yield put(dashboardActions.setProductCount(0));
    // NavigationService.navigate('drawer');
}
function* loginSuccess(action) {
    const { verified, email, quiz } = action
    if (verified) {
        if (quiz)
            NavigationService.navigate('main');
        else
            NavigationService.navigate('signupQuestion1')
    }
    else {
        let verificationCode = generateVerificationCode();
        yield put(rootAction.setVerificationCode(verificationCode, true));
        yield put(authAction.sendVerificationCode(verificationCode));
        NavigationService.navigate('verification');
    }
}


function* validateTokenAttempt(action) {
    let user = {
        ...action
    };

    let fcmToken = yield AsyncStorage.getItem('fcmToken')
    user = {
        ...user,
        fcmToken: fcmToken
    }
    delete user['type'];
    const res = yield call(Api.validateToken, user);
    if (res.status == "success" && res.data) {
        let user = res.data;
        yield AsyncStorage.setItem('token', user.token)
        yield put(authAction.validateTokenSuccess(user));
    } else if (res.status == "failed") {
        Toast.show(res.msg, Toast.LONG);
        yield put(authAction.validateTokenFailed());
    } else {
        Toast.show('Login failed', Toast.LONG);
        yield put(authAction.validateTokenFailed());
    }
}
function* validateTokenFailed(action) {
    //     yield put(dashboardActions.setProductCount(0));
    // NavigationService.navigate('drawer');
}
function* validateTokenSuccess(action) {
    const { verified, email, quiz, assessment } = action
    if (verified) {
        if (quiz) {
            if (assessment)
                NavigationService.navigate('main');
            else
                NavigationService.navigate('assessment');
        }
        else
            NavigationService.navigate('signupQuestion1')
    }
    else {
        let verificationCode = generateVerificationCode();
        yield put(rootAction.setVerificationCode(verificationCode, true));
        yield put(authAction.sendVerificationCode(verificationCode));
        NavigationService.navigate('verification');
    }
}


function* logoutAttempt(action) {

    let fcmToken = yield AsyncStorage.getItem('fcmToken')
    // let auth = yield select(getAuth);
    // let token = auth.get('token')
    let token = yield AsyncStorage.getItem('token')
    let data = {
        fcmToken: fcmToken,
        token: token
    };
    if (fcmToken && fcmToken != "undefined") {
        const res = yield call(Api.logout, data);
        if (res.status == "success") {
            yield put(authAction.logoutSuccess());
        } else if (res.status == "failed") {
            Toast.show(res.msg, Toast.LONG);
            yield put(authAction.logoutFailed());
        } else {
            Toast.show('Logout failed', Toast.LONG);
            yield put(authAction.logoutFailed());
        }
    } else {
        yield put(authAction.logoutSuccess())
    }
}
function* logoutFailed(action) {
    //     yield put(dashboardActions.setProductCount(0));
    // NavigationService.navigate('drawer');
}
function* logoutSuccess(action) {
    yield AsyncStorage.removeItem('token')
    NavigationService.navigate('login')
}


function* updateUserAttempt(action) {
    let updatedUser = {
        ...action
    };
    // let auth = yield select(getAuth);
    // let token = auth.get('token')
    let token = yield AsyncStorage.getItem('token')
    delete updatedUser['type'];
    const res = yield call(Api.update, updatedUser, token);
    if (res && res.status == "success" && res.data) {
        let user = res.data;
        yield put(authAction.updateUserSuccess(user));
    } else {
        yield put(authAction.updateUserFailed());
    }
}
function* updateUserFailed(action) {
}
function* updateUserSuccess(action) {
}


function* updateQuizAttempt(action) {
    let updatedUser = {
        ...action
    };
    // let auth = yield select(getAuth);
    // let token = auth.get('token')
    let token = yield AsyncStorage.getItem('token')
    delete updatedUser['type'];
    const res = yield call(Api.update, updatedUser, token);
    console.log('updateQuizAttempt res: ', res);
    if (res && res.status == "success" && res.data) {
        let user = res.data;
        console.log(user);
        yield put(authAction.updateQuizSuccess(user));
    } else {
        yield put(authAction.updateQuizFailed());
    }
}
function* updateQuizFailed(action) {
    NavigationService.navigate('settings');
}
function* updateQuizSuccess(action) {
    const { verified, email, quiz, assessment } = action
    if (assessment)
        NavigationService.navigate('settings');
    else
        NavigationService.navigate('assessment');
}


function* updateAssessmentAttempt(action) {
    let updatedUser = {
        ...action
    };
    // let auth = yield select(getAuth);
    // let token = auth.get('token')

    let token = yield AsyncStorage.getItem('token')
    delete updatedUser['type'];
    const res = yield call(Api.update, updatedUser, token);
    if (res && res.status == "success" && res.data) {
        let user = res.data;
        yield put(authAction.updateAssessmentSuccess(user));
    } else {
        yield put(authAction.updateAssessmentFailed());
    }
}
function* updateAssessmentFailed(action) {
}
function* updateAssessmentSuccess(action) {
    NavigationService.navigate('main');
}




function* updateMembershipAttempt(action) {
    let updatedUser = {
        ...action
    };
    // let auth = yield select(getAuth);
    // let token = auth.get('token')

    let token = yield AsyncStorage.getItem('token')
    delete updatedUser['type'];
    const res = yield call(Api.updateMembership, updatedUser, token);
    if (res && res.status == "success" && res.data) {
        let user = res.data;
        Toast.show(res.msg, Toast.LONG);
        yield put(authAction.updateMembershipSuccess(user));
    } else {
        Toast.show(res?.msg, Toast.LONG);
        yield put(authAction.updateMembershipFailed());
    }
}
function* updateMembershipFailed(action) {
}
function* updateMembershipSuccess(action) {
    NavigationService.goBack();
}

function* registerAttempt(action) {
    let verificationCode = generateVerificationCode();
    const user = {
        ...action,
        verified: false,
        verificationCode: verificationCode
    }
    delete user['type'];
    const res = yield call(Api.register, user);
    if (res.status == 'success') {
        yield AsyncStorage.setItem('token', res.data.token)
        yield put(rootAction.setVerificationCode(verificationCode, true));
        yield put(authAction.registerSuccess(res.data))
    } else if (res.status == 'failed') {
        Toast.show(res.msg, Toast.LONG);
        yield put(authAction.registerFailed())
    } else {
        Toast.show('Registration failed', Toast.LONG);
        yield put(authAction.registerFailed())
    }
}
function* registerFailed(action) {
}
function* registerSuccess(action) {
    // let verificationCode = generateVerificationCode();
    NavigationService.navigate('verification')
}


function* verifyAttempt(action) {
    let auth = yield select(getAuth);
    let root = yield select(getRoot);
    if (root.get('isForRegister')) {
        const res = yield call(Api.verifyEmail, auth.get('token'));
        if (res.status == "success") {
            yield put(authAction.verifySuccess());
        } else {
            yield put(authAction.verifyFailed());
        }
    } else {
        yield put(rootAction.setLoading(false));
        NavigationService.navigate('resetPassword');
    }

    // NavigationService.navigate('drawer');
}
function* verifyFailed(action) {
    //     yield put(dashboardActions.setProductCount(0));
    // NavigationService.navigate('drawer');
}
function* verifySuccess(action) {
    NavigationService.navigate('signupQuestion1');
}

function* sendVerificationCode(action) {
    const { verificationCode } = action;
    let root = yield select(getRoot);
    let auth = yield select(getAuth);
    let email = auth.get('email');
    let data = {
        email: email,
        verificationCode: verificationCode
    }
    yield put(rootAction.setVerificationCode(verificationCode, root.get('isForRegister') ? true : false))
    let res = yield call(Api.sendVerificationCode, data);
    yield put(rootAction.setLoading(false));
    if (res && res.status == 'success') {
        NavigationService.navigate('verification');
    }
}

function* resendVerificationCode(action) {
    let root = yield select(getRoot);
    let verificationCode = generateVerificationCode();
    yield put(rootAction.setVerificationCode(verificationCode, root.get('isForRegister') ? true : false));
    yield put(authAction.sendVerificationCode(verificationCode));
}

function* setEmailForResetPassword(action) {
    let verificationCode = generateVerificationCode();
    yield put(rootAction.setVerificationCode(verificationCode, false))
    yield put(authAction.sendVerificationCode(verificationCode))
}

function* resetPassword(action) {
    let { password } = action;
    let auth = yield select(getAuth);
    let email = auth.get('email')
    let data = {
        email: email,
        password: password
    }
    let res = yield call(Api.resetPassword, data)
    yield put(rootAction.setLoading(false));
    if (res && res.status == "success") {
        NavigationService.navigate('login')
    }
}

export function* sagaFlow() {
    yield takeLatest(actions.LOGIN_ATTEMPT, loginAttempt);
    yield takeLatest(actions.LOGIN_FAILED, loginFailed);
    yield takeLatest(actions.LOGIN_SUCCESS, loginSuccess);

    yield takeLatest(actions.VALIDATE_TOKEN_ATTEMPT, validateTokenAttempt);
    yield takeLatest(actions.VALIDATE_TOKEN_FAILED, validateTokenFailed);
    yield takeLatest(actions.VALIDATE_TOKEN_SUCCESS, validateTokenSuccess);

    yield takeLatest(actions.LOGOUT_ATTEMPT, logoutAttempt);
    yield takeLatest(actions.LOGOUT_FAILED, logoutFailed);
    yield takeLatest(actions.LOGOUT_SUCCESS, logoutSuccess);

    yield takeLatest(actions.UPDATE_USER_ATTEMPT, updateUserAttempt);
    yield takeLatest(actions.UPDATE_USER_FAILED, updateUserFailed);
    yield takeLatest(actions.UPDATE_USER_SUCCESS, updateUserSuccess);

    yield takeLatest(actions.UPDATE_QUIZ_ATTEMPT, updateQuizAttempt);
    yield takeLatest(actions.UPDATE_QUIZ_FAILED, updateQuizFailed);
    yield takeLatest(actions.UPDATE_QUIZ_SUCCESS, updateQuizSuccess);

    yield takeLatest(actions.UPDATE_ASSESSMENT_ATTEMPT, updateAssessmentAttempt);
    yield takeLatest(actions.UPDATE_ASSESSMENT_FAILED, updateAssessmentFailed);
    yield takeLatest(actions.UPDATE_ASSESSMENT_SUCCESS, updateAssessmentSuccess);

    yield takeLatest(actions.UPDATE_MEMBERSHIP_ATTEMPT, updateMembershipAttempt);
    yield takeLatest(actions.UPDATE_MEMBERSHIP_FAILED, updateMembershipFailed);
    yield takeLatest(actions.UPDATE_MEMBERSHIP_SUCCESS, updateMembershipSuccess);

    yield takeLatest(actions.REGISTER_ATTEMPT, registerAttempt);
    yield takeLatest(actions.REGISTER_FAILED, registerFailed);
    yield takeLatest(actions.REGISTER_SUCCESS, registerSuccess);

    yield takeLatest(actions.VERIFY_EMAIL_ATTEMPT, verifyAttempt);
    yield takeLatest(actions.VERIFY_EMAIL_FAILED, verifyFailed);
    yield takeLatest(actions.VERIFY_EMAIL_SUCCESS, verifySuccess);

    yield takeLatest(actions.SEND_VERIFICATION_CODE, sendVerificationCode);
    yield takeLatest(actions.RESEND_VERIFICATION_CODE, resendVerificationCode);
    yield takeLatest(actions.SET_EMAIL_FOR_RESET_PASSWORD, setEmailForResetPassword);
    yield takeLatest(actions.RESET_PASSWORD, resetPassword);
}

