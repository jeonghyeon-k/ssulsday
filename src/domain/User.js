export default class User {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    static create(user) {
        return new User(user);
    }
    constructor(userInfo){
        const {
            id = "",
            name = "",
        } = userInfo;
        this._id = id;
        this._name = name;
    }
}}
=======
>>>>>>> 5674bbf115f25605e12d664f4c64d516593e3acb
  static create(user) {
    return new User(user);
  }
  constructor(userInfo) {
    const { id = "", name = "" } = userInfo;
    this._id = id;
    this._name = name;
  }
}
<<<<<<< HEAD
=======
>>>>>>> ca6ebe6... yarn lock삭제
>>>>>>> 5674bbf115f25605e12d664f4c64d516593e3acb
