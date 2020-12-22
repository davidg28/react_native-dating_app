// import Base64 from "./utils/Base64";
// import consts from "./const";
// import { Alert } from 'react-native';
import queryString from "query-string";
import { Platform, AsyncStorage } from "react-native";

const base_url = 'http://192.168.108.111:5000/api/';
// const base_url = 'https://formidablewomanmingles.com/api/';


export function updateMembership(data, token) {
    var formData = new FormData();
    formData.append('tokenId', data.tokenId);
    formData.append('membership', data.membership);
    return fetch(`${base_url}updateMembership`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'authorization': `Bearer ${token}`,
            // 'Content-Type': 'multipart/form-data'
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
        });
}
export function update(user, token) {
    var formData = new FormData();
    if (user.avatar) {
        formData.append('imgFile', {
            name: user.avatar.fileName,
            type: user.avatar.type,
            uri:
                Platform.OS === 'android' ? user.avatar.uri : user.avatar.uri.replace('file://', ''),
        });
    }
    if (user.email)
        formData.append('email', user.email);
    formData.append('name', user.name);
    formData.append('state', user.state);
    formData.append('city', user.city);
    formData.append('gender', user.gender);
    formData.append('age', user.age);
    if (user.quiz)
        formData.append('quiz', JSON.stringify(user.quiz));
    if (user.assessment)
        formData.append('assessment', JSON.stringify(user.assessment));
    // console.log(user, token);
    // return;
    return fetch(`${base_url}update`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'authorization': `Bearer ${token}`,
            // 'Content-Type': 'multipart/form-data'
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
        });
}
export function login(user) {
    var formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('fcmToken', user.fcmToken);
    return fetch(`${base_url}login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
        });
}
export function validateToken(user) {
    var formData = new FormData();
    formData.append('token', user.token);
    formData.append('fcmToken', user.fcmToken);
    return fetch(`${base_url}validateToken`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
        });
}
export function logout(data) {
    var formData = new FormData();
    formData.append('token', data.token);
    formData.append('fcmToken', data.fcmToken);
    return fetch(`${base_url}logout`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
        });
}


export function register(user) {
    const formdata = new FormData();

    formdata.append('name', user.name);
    formdata.append('email', user.email);
    formdata.append('password', user.password);
    formdata.append('state', user.state);
    formdata.append('city', user.city);
    formdata.append('age', user.age);
    formdata.append('gender', user.gender);
    formdata.append('verificationCode', user.verificationCode);

    return fetch(`${base_url}register`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}
export function verifyEmail(token) {
    const formdata = new FormData();

    formdata.append('token', token);
    return fetch(`${base_url}verify`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}
export function sendVerificationCode(data) {
    const formdata = new FormData();

    formdata.append('email', data.email);
    formdata.append('verificationCode', data.verificationCode);

    return fetch(`${base_url}sendCode`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}
export function resetPassword(data) {
    const formdata = new FormData();

    formdata.append('email', data.email);
    formdata.append('password', data.password);

    return fetch(`${base_url}resetPassword`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}
export function getProduct(data) {
    const formdata = new FormData();

    formdata.append('postCode', data.postCode);
    formdata.append('Ix', data.Ix);
    formdata.append('Sx', data.Sx);

    console.log(data.token);
    return fetch(`${base_url}getProduct`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${data.token}`
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}

export function logOut(authId, username, password) {
    return fetch(`https://api.github.com/authorizations/${authId}`, {
        method: 'DELETE',
        headers: getAuthHeader(username, password)
    })
        .then((user) => {
            return user.json();
        })
        .catch((error) => {
            console.log(error);
        });
}


export function orderByCard(data) {
    const formdata = new FormData();

    formdata.append('amount', data.amount);
    formdata.append('tokenId', data.tokenId);
    formdata.append('comment', data.comment);
    formdata.append('postCode', data.postCode);
    formdata.append('cid', data.cid);
    formdata.append('pid', data.pid);
    formdata.append('sid', data.sid);
    formdata.append('orderContent', data.orderContent);

    return fetch(`${base_url}orderByCard`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${data.token}`
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}


export function orderByPaypal(data) {
    const formdata = new FormData();

    formdata.append('amount', data.amount);
    formdata.append('comment', data.comment);
    formdata.append('postCode', data.postCode);
    formdata.append('tid', data.tid);
    formdata.append('pid', data.pid);
    formdata.append('sid', data.sid);
    formdata.append('orderContent', data.orderContent);

    return fetch(`${base_url}orderByPaypal`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${data.token}`
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}

export function getMyOrders(data) {
    return fetch(`${base_url}getMyOrders`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${data.token}`
            },
            body: {}
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}

export function getMyMessages(data) {
    return fetch(`${base_url}getMyMessages`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${data.token}`
            },
            body: {}
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}

export function sendMessage(data) {
    const formdata = new FormData();
    let msg = data.message
    formdata.append('_id', msg._id);
    formdata.append('subject', msg.subject);
    formdata.append('body', msg.body);
    formdata.append('isCreatedByCustomer', true);

    return fetch(`${base_url}sendMessage`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${data.token}`
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}

export function readMessage(msg) {
    const formdata = new FormData();

    formdata.append('isReadByCustomer', true);
    return fetch(`${base_url}readMessage/${msg._id}`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${data.token}`
            },
            body: formdata
        })
        .then((response) => response.json())
        .then((responsJson) => {
            return responsJson;
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}

function getAuthHeader(username, password) {
    const baseString = Base64.btoa(`${username}:${password}`).replace('\n', '\\n');
    return {
        ...consts.BASE_HEADER,
        "Authorization": `Basic ${baseString}`
    }
}