// buat fungsi
// nilai username
// nilai password
// cek username and pass
// benar beri alert berhasil login
// username dan pass kosong
// maka berikan alert pass dan username kosong
// username dan pass salah
// maka berikan alert username atau password yang dimasukkan salah.
function login()  {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert('Anda Berhasil Login');
        window.location="index.html"
        return false;
    }
    else if(username=="" || password==""){
        alert('Username dan Password tidak boleh kosong!')
    }
    else{
        alert('Username atau Password yang Anda masukkan salah!')
    }
}