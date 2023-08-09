function medirAltura (alturaCm){
    if (alturaCm >= 180){
        console.log("APROVADO")
    } else {
        console.log("REPROVADO")
    }
    return alturaCm
}

const alt = 187
console.log(medirAltura(alt))

const alt1 = 178
console.log(medirAltura(alt1))

const alt2 = 140
console.log(medirAltura(alt2))

const alt3 = 197
console.log(medirAltura(alt3))
