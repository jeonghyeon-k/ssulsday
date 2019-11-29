export default class User {
<<<<<<< HEAD
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
}
=======
=======
>>>>>>> a3ad93fb259c80a48173b8bb9a4f67775bde8c80
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
>>>>>>> 503233b55230afd95137e1c5e2607611fc18e090
=======
>>>>>>> a3ad93fb259c80a48173b8bb9a4f67775bde8c80
