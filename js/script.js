console.log("js work");

// fungsi ganti nama pengunjung
function replacename () {
    let name = prompt("Nama Anda:","");
    document.getElementById("name").innerHTML = name;
}

// run replacename saat id change di klik
document.getElementById("change").addEventListener("click", function() {
    replacename();
})

// validasi message 
function validateForm() {

    // ambil value dari input berdasarkan name di form
    const name = document.forms["message-form"]["full-name"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    // mengulang input jika kosong
    if (name == "" || birthdate == "" || gender == "" || messages == ""){
        alert("tidak boleh ada yang kosong");
        return false;
    }

    // run fungsi setsenderui
    setsenderui(name, birthdate, gender, messages);

    return false
}

function setsenderui(name, birthdate, gender, messages) {

    // mengganti id dengan inputan dari form
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

let bannerIndex = 0;
showbanner();

function nextbanner() {
    bannerIndex += 1;
    showbanner();
}

function showbanner() {

    // get all class banner-img
    const banners = document.getElementsByClassName("banner-img");
    console.log(banners)

    // back to first banner
    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // hide all banner
    for(i = 0; i < banners.length; i++){
        banners[i].style.display = "none";
    }

    // show banner from banner index
    banners[bannerIndex].style.display = "block";
}

setInterval(nextbanner, 3000);

// Ambil elemen logo
const logo = document.getElementById('logo');

// Tambahkan event listener untuk klik
logo.addEventListener('click', () => {
    window.location.href = '#home'; // Arahkan ke #home
});

// Ambil elemen hamburger dan menu navigasi
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

// Tambahkan event listener untuk toggle menu
hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active'); // Toggle class 'active' pada menu navigasi
});