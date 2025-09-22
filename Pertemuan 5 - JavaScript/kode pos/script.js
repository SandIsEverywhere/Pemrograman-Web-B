function selectKota() {
    removeAllOptions(document.form1.Kota);
    addOption(document.form1.Kota, "", "Pilih Kabupaten/Kota", "");
    if (document.form1.Provinsi.value == 'Bali') {
        addOption(document.form1.Kota, "Denpasar", "Denpasar");
        addOption(document.form1.Kota, "Ubud", "Ubud");
    }
    if (document.form1.Provinsi.value == 'DKI Jakarta') {
        addOption(document.form1.Kota, "Jakarta", "Jakarta");
    }
    if (document.form1.Provinsi.value == 'Jawa Barat') {
        addOption(document.form1.Kota, "Bandung", "Bandung");
        addOption(document.form1.Kota, "Bekasi", "Bekasi");
        addOption(document.form1.Kota, "Bogor", "Bogor");
        addOption(document.form1.Kota, "Depok", "Depok");
    }
    if (document.form1.Provinsi.value == 'Jawa Tengah') {
        addOption(document.form1.Kota, "Magelang", "Magelang");
        addOption(document.form1.Kota, "Semarang", "Semarang");
        addOption(document.form1.Kota, "Solo", "Solo");
    }
    if (document.form1.Provinsi.value == 'Jawa Timur') {
        addOption(document.form1.Kota, "Batu", "Batu");
        addOption(document.form1.Kota, "Madiun", "Madiun");
        addOption(document.form1.Kota, "Malang", "Malang");
        addOption(document.form1.Kota, "Surabaya", "Surabaya");
    }
    if (document.form1.Provinsi.value == 'Kalimantan timur') {
        addOption(document.form1.Kota, "Balikpapan", "Balikpapan");
        addOption(document.form1.Kota, "Samarinda", "Samarinda");
    }
    if (document.form1.Provinsi.value == 'Nusa Tenggara Barat') {
        addOption(document.form1.Kota, "Mataram", "Mataram");
        addOption(document.form1.Kota, "Senggigi", "Senggigi");
    }
    if (document.form1.Provinsi.value == 'Nusa Tenggara Timur') {
        addOption(document.form1.Kota, "Ende", "Ende");
        addOption(document.form1.Kota, "Kupang", "Kupang");
    }
    if (document.form1.Provinsi.value == 'Papua') {
        addOption(document.form1.Kota, "Jayapura", "Jayapura");
    }
    if (document.form1.Provinsi.value == 'Papua Barat') {
        addOption(document.form1.Kota, "Manokwari", "Manokwari");
        addOption(document.form1.Kota, "Sorong", "Sorong");
    }
    if (document.form1.Provinsi.value == 'Riau') {
        addOption(document.form1.Kota, "Pekanbaru", "Pekanbaru");
    }
    if (document.form1.Provinsi.value == 'Sulawesi Selatan') {
        addOption(document.form1.Kota, "Makassar", "Makassar");
    }
    if (document.form1.Provinsi.value == 'Sumatera Barat') {
        addOption(document.form1.Kota, "Medan", "Medan");
    }
    if (document.form1.Provinsi.value == 'Sumatera Utara') {
        addOption(document.form1.Kota, "Padang", "Padang");
    }
    if (document.form1.Provinsi.value == 'DIY') {
        addOption(document.form1.Kota, "Yogyakarta", "Yogyakarta");
    }
}

function removeAllOptions(selectbox) {
    var i;
    for (i = selectbox.options.length-1; i>=0; i--) {
        selectbox.remove(i);
    }
}

function addOption(selectbox, value, text) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
}