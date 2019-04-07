class User {

    constructor(idUser, name, pseudo, pwd, rings, type) {
        this.idUser = idUser;
        this.name = name;
        this.pseudo = pseudo;
        this.pwd = pwd;
        this.rings = rings;
        this.type = type;
    }

    get getidUser() {
        return this.idUser;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
        update(this);
    }

    get getPseudo() {
        return this.pseudo;
    }

    set setPseudo(pseudo) {
        this.pseudo = pseudo;
        update(this);
    }

    get getPwd() {
        return this.pwd;
    }

    set setPwd(pwd) {
        this.pwd = pwd;
        update(this);
    }

    get getRings() {
        return this.rings;
    }

    set setRings(rings) {
        this.rings = rings;
        update(this);
    }

    get getType() {
        return this.type;
    }

    set setType(type) {
        this.type = type;
        update(this);
    }

}