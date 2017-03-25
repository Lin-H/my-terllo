class Trell {
  constructor(key, opt = {}) {
    this.version = opt.version || 1;
    this.apiEndpoint = 'https://api.trello.com'
    this.authEndpoint = 'https://trello.com'
    this.authEndpoint = 'https://trello.com'
    this.intentEndpoint = 'https://trello.com'
    this.key = key || '61c39ec31477886b0e6794984902a4f9' // lin-h's key
    this.token = 'ad7ee64a2c5c68228a73c16a678ecc53fa8698c5cfead8e6a88e6c727c6bdeaa'
  }
  ajax(method, url, data, opt) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, `${url}?key=${this.key}&token=${this.token}`, true)
    if (method == 'POST') {
      xhr.setRequestHeader = 'Content-Type: applicetion/json'
    }
    xhr.responseType = 'json'
    return new Promise(function (resolve, reject) {
      xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response)
            resolve(xhr.response)
          }
        } else {
          reject(`error ${xhr.status}`)
        }
      }
      xhr.send(data)
    })
  }
  get(url, data, opt) {
    return this.ajax('GET', url, data, opt);
  }
  members() {
    return this.get(`${this.apiEndpoint}/${this.version}/members/me`);
  }
}

export default Trell;
