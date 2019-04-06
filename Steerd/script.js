class User {

    constructor(name, pseudo, pwd, rings, type) {
        this.name = name;
        this.pseudo = pseudo;
        this.pwd = pwd;
        this.rings = rings;
        this.type = type;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    get getPseudo() {
        return this.pseudo;
    }

    set setPseudo(pseudo) {
        this.pseudo = pseudo;
    }

    get getPwd() {
        return this.pwd;
    }

    set setPwd(pwd) {
        this.pwd = pwd;
    }

    get getRings() {
        return this.rings;
    }

    set setRings(rings) {
        this.rings = rings;
    }

    get getType() {
        return this.type;
    }

    set setType(type) {
        this.type = type;
    }

    sayHi() {
        alert(this.name);
    }

}

    

function register(User){
    var hr = new XMLHttpRequest();
    var vars = 
        "name_user=" + User.getName + 
        "&pseudo_user=" + User.getPseudo + 
        "&pwd_user=" + User.getPwd + 
        "&rings_user=" + User.getRings + 
        "&type_user=" + User.getType;

    hr.open("POST", "register.php", true);

    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
            console.log(return_data);
	    }
    }
    hr.send(vars);
    console.log("processing...");
}

function login(User){
    var hr = new XMLHttpRequest();
    var vars =  
        "pseudo_user=" + User.getPseudo + 
        "&pwd_user=" + User.getPwd;

    hr.open("POST", "login.php", true);

    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            console.log(return_data);
        }
    }
    hr.send(vars);
    console.log("processing...");
}

function findAll(){
    var hr = new XMLHttpRequest();
    var userList = [];


    hr.open("POST", "findall.php", true);

    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            var jsonUser = JSON.parse(hr.responseText);
            for (i = 0; i < jsonUser.length; i++) {
                const userObj = new User(
                                jsonUser[i].name_user, 
                                jsonUser[i].pseudo_user, 
                                jsonUser[i].pwd_user, 
                                jsonUser[i].rings_user, 
                                jsonUser[i].type_user);
                userList.push(userObj);
                console.log(userObj);
            }
        }
    }
    hr.send(null);
    console.log("processing...");
}