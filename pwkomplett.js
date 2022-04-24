let mindestLaenge = 10

document.getElementById("btnStart").addEventListener("click", function() {pwPruefen(document.getElementById("eingabe").value);});

function pwPruefen(ausgelesen) {

    console.log(ausgelesen)
    let pw = ausgelesen.toString()
    let pwArray = pw.split("")
    console.log(pwArray)
    return laengePruefen(pw, mindestLaenge) && zahlenEnthalten(pwArray) && kleinBuchstabenEnthalten(pw) && grossbuchstabenEnthalten(pwArray) && sonderzeichenEnthalten(pw)
}

function laengePruefen(pw, laenge){
    //return pw.length >= laenge;
    //bedeutet:
    if (pw.length >= laenge){
        console.log("Passwort lang genug!")
        return true
    }else {
        console.log("Passwort zu kurz")
        return false
    }

}

function zahlenEnthalten(pw) {
    for (let i = 0; i < pw.length; i++) {
        if(!isNaN(pw[i]))
        {
            console.log("Zahl enthalten!")
            return true
        }
    }
    console.log("Keine Zahl enthalten!")
    return false
}

function kleinBuchstabenEnthalten(pw) {
    //return /[a-z]/.test(pw)
    if (/[a-z]/.test(pw)){
        console.log("kleinbuchstabe enthalten")
        return true
    }else{
        console.log("Kein Kleinbuchstabe Enthalten")
        return false
    }
}

function grossbuchstabenEnthalten(pw) {
    //return /[A-Z]/.test(pw)
    if (/[A-Z]/.test(pw)){
        console.log("Grossbuchstabe enthalten!")
        return true
    }else{
        console.log("Kein Grossbuchstabe enthalten!")
        return false
    }

}

function sonderzeichenEnthalten(pw) {
    for (let i = 0; i < pw.length; i++) {
        if (/[A-Z]/.test(pw[i]) || !/[a-z]/.test(pw[i]) || !isNaN(pw[i])){
            console.log("Dies ist kein Sonderzeichen")
        }else{
            console.log("Dies ist ein Sonderzeichen")
            return true;
        }
    }
    return false
}

function PassStrength(Password) {
    // length check
    let numCount = 0;
    // initial strength = len^2/6
    let W = (Password.length * Password.length) / 6;
    let numeric = !isNaN(parseFloat(Password[0])) && isFinite(Password[0]);
    if (numeric) {
        // note first character is numeric
        numCount = numCount + 1;
    }
    for (let i = 1; i < Password.length; i++) {
        // if previous char was another one this is good, otherwise bad
        if (Password[i] !== Password[i - 1]) {
            W = W + 2;
        } else {
            W = W - 1;
        }
    }
}


// ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\\\!§$%&/()\\[\\]{}=?ß#.:,;-<>|°+*@]).{8,20}$ -> regulärer Ausdruck
