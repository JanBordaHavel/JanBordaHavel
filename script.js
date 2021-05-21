var cislo = 1;
setInterval(() => {
    document.getElementById('radio' + cislo).checked = true;
    cislo++;
    if (cislo > 5) {
        cislo =1
    }
},4000);

