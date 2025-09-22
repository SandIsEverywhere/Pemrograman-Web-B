function selectMerk() {
    removeAllOptions(document.form1.Merk);
    addOption(document.form1.Merk, "", "Pilih Merk", "");
    if (document.form1.Produk.value == 'Desktop') {
        addOption(document.form1.Merk, "HP", "HP");
        addOption(document.form1.Merk, "Dell", "Dell");
        addOption(document.form1.Merk, "Acer", "Acer");
        addOption(document.form1.Merk, "Mac", "Mac");
        addOption(document.form1.Merk, "LG", "LG");
    }
    if (document.form1.Produk.value == 'Laptop') {
        addOption(document.form1.Merk, "Acer", "Acer");
        addOption(document.form1.Merk, "Asus", "Asus");
        addOption(document.form1.Merk, "Macbook", "Macbook");
        addOption(document.form1.Merk, "MSI", "MSI");
        addOption(document.form1.Merk, "Lenovo", "Lenovo");
    }
    if (document.form1.Produk.value == 'Smartphone') {
        addOption(document.form1.Merk, "Samsung", "Samsung");
        addOption(document.form1.Merk, "iPhone", "iPhone");
        addOption(document.form1.Merk, "Xiaomi", "Xiaomi");
        addOption(document.form1.Merk, "Oppo", "Oppo");
        addOption(document.form1.Merk, "Vivo", "Vivo");
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