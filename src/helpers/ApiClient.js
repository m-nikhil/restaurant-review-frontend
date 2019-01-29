import param from 'jquery-param';
export let BASE_URL;
export let API_URL;

export default class ApiClient {

    static setToken( token ){
        this.token=`Token ${token}`
    }

    static get( url, data, params ){
      return this._send('GET', url, data, params);
    }

    static async post( url, data, params ){
       return await this._send('POST', url, data, params);
    }

    static async _send( method, url, data = {}, params = {
        json: true,
        headers: {}
    }) {

        let headers = new Headers({
            Authorization: this.token,
            Credentials: 'same-origin'
        });
        
        API_URL = `${BASE_URL}/api/v1`;
        
        if ( params.json ){
            headers.append('Content-Type', 'application/json');
        }

        for ( let h in params.headers ){
            headers.append(h, params.headers[h]);
        }

        try {

            let _url = API_URL + url;
            let sendData = {
                method,
                mode: 'cors',
                headers
            };

            if ( method === 'POST' ) sendData.body = params.json?JSON.stringify(data):data;
            else if ( method === 'GET' ) _url += `?${param(data)}`;

            let response = await fetch(_url, sendData);
            let json = await response.json();
            if ( json.statusCode >= 400 ) throw json;
            return json;
            
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
