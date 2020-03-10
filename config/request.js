export const ip = 'http://127.0.0.1:8081';

export default function request(method, url, body, history) {
    method = method.toUpperCase();
    if (method === 'GET') {
        //fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: body
    }).then((res) => {
        if (res.status === 401) {
            history.push('/');
            return Promise.reject('Unauthorized.');
        } else {
            return res.json();
        }
    });
}

export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
