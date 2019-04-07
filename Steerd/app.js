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

function update(user){
    console.log(User.getName);
    var hr = new XMLHttpRequest();
    var vars = 
        "id_user=" + user.getidUser +
        "&name_user=" + user.getName + 
        "&pseudo_user=" + user.getPseudo + 
        "&pwd_user=" + user.getPwd + 
        "&rings_user=" + user.getRings + 
        "&type_user=" + user.getType;

    hr.open("POST", "update.php", true);

    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            $res = hr.responseText;
            if ($res.startsWith('[')) {
                var jsonUser = JSON.parse($res);
                var i = 0;
                const userObj = new User(
                                jsonUser[i].id_user,
                                jsonUser[i].name_user, 
                                jsonUser[i].pseudo_user, 
                                jsonUser[i].pwd_user, 
                                jsonUser[i].rings_user, 
                                jsonUser[i].type_user);
                console.log(userObj);
            } else {
                console.log($res);
            }
        }
    }
    hr.send(vars);
    console.log("processing...");
}

function login(user){
    var hr = new XMLHttpRequest();
    var vars =  
        "pseudo_user=" + user.getPseudo + 
        "&pwd_user=" + user.getPwd;

    hr.open("POST", "login.php", true);

    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            $res = hr.responseText;
            if ($res.startsWith('[')) {
                var jsonUser = JSON.parse($res);
                var i = 0;
                const userObj = new User(
                                jsonUser[i].id_user,
                                jsonUser[i].name_user, 
                                jsonUser[i].pseudo_user, 
                                jsonUser[i].pwd_user, 
                                jsonUser[i].rings_user, 
                                jsonUser[i].type_user);
                console.log(userObj);
            } else{
                console.log($res);
            }
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
                                jsonUser[i].id_user,
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