export default class UserInfo {
  constructor(nameInfo, jobInfo) {
    this._name = nameInfo;
    this._job = jobInfo;
  }

  getUserInfo() {
    this._info = {};
    this._info = {
      name: this._name.textContent,
      job: this._job.textContent
    }  
    return _info
  }

  setUserInfo({info}) {
    this._name.textContent = info.name;
    this._job.textContent = info.job;
  }
}