import { autoRehydrate, persistStore } from "redux-persist-immutable";
import { combineReducers } from "redux-immutable";
import createActionBuffer from "redux-action-buffer";
import { REHYDRATE } from "redux-persist/constants";
import Immutable from "immutable";
import { applyMiddleware, compose, createStore } from "redux";
// import { AsyncStorage } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer"
import authReducer from "../reducers/authReducer"

import * as  authSaga from "../saga/authSaga";


const combinedReducers = combineReducers({
    root: rootReducer,
    auth: authReducer,
});

const initialState = new Immutable.Map({
    root: Immutable.Map({
        isLoading: false,
        verificationCode: '',
        isForRegister: false
    }),
    auth: Immutable.Map({
        token: '',
        name: '',
        email: '',
        imagePath: '',
        state: '',
        city: '',
        age: 0,
        gender: '',
        phoneNumber: '',
        quiz: {},
        preQuiz: {},
        expireDate: '',
        assessment: {},
        preAssessment: {},
        verified: false
    }),
});

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combinedReducers,
        initialState,
        compose(applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)), autoRehydrate({ log: true }))
    );

    persistStore(
        store,
        {
            storage: AsyncStorage,
            blacklist: ['root', 'auth'],
        }
    );
    return {
        ...store, runSaga: [
            sagaMiddleware.run(authSaga.sagaFlow),
        ]
    };
}