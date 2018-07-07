

export function post(url, data){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    };

    const request = new Request(url, options);
    return fetch(request);
}