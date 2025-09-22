const list_nama = ["Ahmad", "Beni", "Fulan", "Hasan", "Naufal"];
const list_nrp = ["5025241114", "5025241000"];
const list_matkul = ["Kalkulus", "Dasar pemrograman", "Sistem basis data", "Organisasi komputer", "Sistem digital", "Aljabar linier"];

const datalist_nama = document.getElementById("suggestion_nama");
const datalist_nrp = document.getElementById("suggestion_nrp");
const datalist_matkul = document.getElementById("suggestion_matkul");

list_nama.forEach(nama => {
    const option = document.createElement("option");
    option.value = nama;
    datalist_nama.appendChild(option);
});
list_nrp.forEach(nrp => {
    const option = document.createElement("option");
    option.value = nrp;
    datalist_nrp.appendChild(option);
});
list_matkul.forEach(matkul => {
    const option = document.createElement("option");
    option.value = matkul;
    datalist_matkul.appendChild(option);
});

function validasi() {
    var input_nama = document.getElementById("nama").value;
    var input_nrp = document.getElementById("nrp").value;
    var input_matkul = document.getElementById("matkul").value;
    var input_dosen = document.getElementById("dosen").value;
    if (input_nama=="") {
        alert('Nama tidak boleh kosong');
        // return false;
    } else if (input_nrp=="") {
        alert('NRP tidak boleh kosong');
        // return false;
    } else if (input_matkul=="") {
        alert('Mata kuliah tidak boleh kosong');
        // return false;
    } else if (input_dosen=="") {
        alert('Dosen tidak boleh kosong');
        // return false;
    } else {
        return true;
    }
}

// function handleSubmit(event) {
//     if(!validate()) {
//         event.preventDefault();
//     }
//     return;
// }