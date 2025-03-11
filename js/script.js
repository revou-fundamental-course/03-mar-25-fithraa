function replacename () {
    let name = prompt("Nama Anda:","");
    document.getElementById("name").innerHTML = name;
}

document.getElementById("change").addEventListener("click", function() {
    replacename();
})

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthdate == "" || gender == "" || messages == ""){
        alert("tidak boleh ada yang kosong");
        return false;
    }

    setsenderui(name, birthdate, gender, messages);

    return false
}

function setsenderui(name, birthdate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}