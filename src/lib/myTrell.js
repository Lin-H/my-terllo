class Trell {
  constructor(key, opt = {}) {
    this.version = opt.version || 1;
    this.apiEndpoint = 'https://api.trello.com'
    this.authEndpoint = 'https://trello.com'
    this.authEndpoint = 'https://trello.com'
    this.intentEndpoint = 'https://trello.com'
    this.key = key || '61c39ec31477886b0e6794984902a4f9' // lin-h's key
    this.token = ''
    this.prefix = `${this.apiEndpoint}/${this.version}`
    this.url = '' // use for url concatenation
  }
  ajax(method, url, data, opt) {
    const xhr = new XMLHttpRequest()
    let fullUrl = `${this.prefix}${url}?key=${this.key}&token=${this.token}`
    if (method == 'GET' || method == 'DELETE') {
      xhr.open(method, `${fullUrl}&${Trell.param(data)}`, true)
    }
    if (method == 'POST' || method == 'PUT') {
      xhr.open(method, `${fullUrl}`, true)
      xhr.setRequestHeader = 'Content-Type: applicetion/json'
    }
    xhr.responseType = 'json'
    return new Promise(function (resolve, reject) {
      xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
          if (xhr.readyState === XMLHttpRequest.DONE) {
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
  post(url, data, opt) {
    return this.ajax('POST', url, data, opt);
  }
  put(url, data, opt) {
    return this.ajax('PUT', url, data, opt);
  }
  delete(url, data, opt) {
    return this.ajax('DELETE', url, data, opt);
  }
  // get(data, opt) {
  //   let url = this.url
  //   this.url = ''
  //   return this.ajax('GET', url, data, opt);
  // }
  // post(data, opt) {
  //   let url = this.url
  //   this.url = ''
  //   return this.ajax('POST', url, data, opt);
  // }
  // put(data, opt) {
  //   let url = this.url
  //   this.url = ''
  //   return this.ajax('PUT', url, data, opt);
  // }
  // delete(data, opt) {
  //   let url = this.url
  //   this.url = ''
  //   return this.ajax('DELETE', url, data, opt);
  // }
  members(param = '') {
    this.url += '/member/' + param;
    return this;
  }
  static param(o) {
    if (!o) {
      return ''
    }
    return Object.keys(o).reduce((p, c) => (!p ? `${c}=${o[c]}` : `${p}&${c}=${o[c]}`), '')
  }
}

export default Trell;
