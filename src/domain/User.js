export default class User {
<<<<<<< HEAD
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
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
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
<<<<<<< HEAD
=======
>>>>>>> ca6ebe6... yarn lock삭제
>>>>>>> 5674bbf115f25605e12d664f4c64d516593e3acb
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
