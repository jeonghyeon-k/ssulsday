export default class User {
<<<<<<< HEAD
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
>>>>>>> ca6ebe670003f60b175732ca1811d1fb052d713f
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
>>>>>>> 875e6cd87312f9362fa3545933cee0e0cdc95c35
=======
>>>>>>> ca6ebe670003f60b175732ca1811d1fb052d713f
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
