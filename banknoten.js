let snRichtig = "Z60162200226"
let snFalsch = "Z60162200228"

BanknoteTesten(snRichtig)

function BanknoteTesten(seriennummer) {
    let snArray = seriennummer.split("")
    let pruefziffer = snArray.pop()
    console.log(snArray)



    let quersumme = 0
    let buchstabenArray= "ABCDEFGHIJKMNLOPQRSTUVWXYZ".split("")

    for (let i = 0; i < buchstabenArray.length; i++) {
        if(snArray[0] == buchstabenArray[i])
        {
            console.log("Gefunden!")
            console.log(snArray[0])
            console.log(buchstabenArray[i])
            let zahl = i +1
            let zahlArray = zahl.toString().split("")
            console.log(zahlArray)

            for (let j = 0; j < zahlArray.length; j++) {
                quersumme += parseInt(zahlArray[j])
                console.log(quersumme)
            }
        }
    }

    for (let i = 1; i < snArray.length; i++) {
        quersumme += parseInt(snArray[i])
        console.log(quersumme)
    }

    if(quersummeTesten(quersumme, pruefziffer))
    {
        console.log("Schein ist gültig")
    }else{
        console.log("Schein ist gefälscht")
    }


}

function quersummeTesten(qs, pz) {
    let ergebnis
        if( qs % 9 === 0)
        {
            ergebnis = 9
        }else{
            ergebnis = 8 - (qs % 9)
        }
    return pz == ergebnis;
}
