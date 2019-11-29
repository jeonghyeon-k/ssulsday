export default class User {
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
  static create(user) {
    return new User(user);
  }
  constructor(userInfo) {
    const { id = "", name = "" } = userInfo;
    this._id = id;
    this._name = name;
  }
}
>>>>>>> 503233b55230afd95137e1c5e2607611fc18e090
