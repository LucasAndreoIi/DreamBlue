"use strict";

//pré sets
let pacotesjogador = ['','',''];
let cardopc = [];
let cardopi = [];
let cardopr = [];
let cardope = [];
let cardopl = [];
let cardopm = [];
let cardops = [];


if(sessionStorage.cardsplayeri){
    cardopi = JSON.parse(sessionStorage.getItem('cardsplayeri'))
}
if(sessionStorage.cardsplayerr){
    cardopr = JSON.parse(sessionStorage.getItem('cardsplayerr'))
}
if(sessionStorage.cardsplayere){
    cardope = JSON.parse(sessionStorage.getItem('cardsplayere'))
}
if(sessionStorage.cardsplayerl){
    cardopl = JSON.parse(sessionStorage.getItem('cardsplayerl'))
}
if(sessionStorage.cardsplayerm){
    cardopm = JSON.parse(sessionStorage.getItem('cardsplayerm'))
}
if(sessionStorage.playerpacks==null){
    sessionStorage.setItem("playerpacks",'')
}
if(sessionStorage.playerpacks){
    pacotesjogador = JSON.parse(sessionStorage.getItem('playerpacks'))
    let x = pacotesjogador.length-1
    for(let i = 0; i <= x;i++){
        document.getElementById("packjogador").innerHTML+= `${pacotesjogador[i]}`
    }
}


document.getElementById("saldo").innerHTML = `Saldo:${parseFloat(sessionStorage.getItem("money"))}`


function abrepack(){
    let index = 0
    if(pacotesjogador[index]==`<img src="img/pacotes/pack1.png" id="packcomprado0">`){
        let random = parseInt(Math.random() * 100)
        if(random <= 50){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/zagbc.png`
            }if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcc.png`
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aac.png`
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/latcc.png`
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbc.png`
            }
        }else if(random > 50 && random <=95){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagci.png`
                cardopi[1] = `img/jogadores/zagci.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbi.png`
                cardopi[3] = `img/jogadores/zagbi.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aai.png`
                cardopi[2] = `img/jogadores/aai.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbi.png`
                cardopi[4] = `img/jogadores/latbi.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latci.png`
                cardopi[0] = `img/jogadores/latci.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }
        }else{
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcr.png`
                cardopr[1] = `img/jogadores/zagcr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbr.png`
                cardopr[3] = `img/jogadores/zagbr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aar.png`
                cardopr[2] = `img/jogadores/aar.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbr.png`
                cardopr[4] = `img/jogadores/latbr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latcr.png`
                cardopr[0] = `img/jogadores/latcr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }
        }
    }else if(pacotesjogador[index]==`<img src="img/pacotes/pack2.png" id="packcomprado0">`){
        let random = parseInt(Math.random() * 100)
        if(random <= 10){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/zagbc.png`
            }if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcc.png`
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aac.png`
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/latcc.png`
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbc.png`
            }
        }else if(random > 10 && random <=80){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagci.png`
                cardopi[1] = `img/jogadores/zagci.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbi.png`
                cardopi[3] = `img/jogadores/zagbi.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aai.png`
                cardopi[2] = `img/jogadores/aai.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbi.png`
                cardopi[4] = `img/jogadores/latbi.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latci.png`
                cardopi[0] = `img/jogadores/latci.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }
        }else{
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcr.png`
                cardopr[1] = `img/jogadores/zagcr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbr.png`
                cardopr[3] = `img/jogadores/zagbr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aar.png`
                cardopr[2] = `img/jogadores/aar.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbr.png`
                cardopr[4] = `img/jogadores/latbr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latcr.png`
                cardopr[0] = `img/jogadores/latcr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }
        }
    }else if(pacotesjogador[index]==`<img src="img/pacotes/pack3.png" id="packcomprado0">`){
        let random = parseInt(Math.random() * 100)
        if(random <= 20){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagci.png`
                cardopi[1] = `img/jogadores/zagci.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbi.png`
                cardopi[3] = `img/jogadores/zagbi.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aai.png`
                cardopi[2] = `img/jogadores/aai.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbi.png`
                cardopi[4] = `img/jogadores/latbi.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latci.png`
                cardopi[0] = `img/jogadores/latci.png`
                sessionStorage.cardsplayeri = JSON.stringify(cardopi)
            }
        }
        else if(random > 20  && random <= 85){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcr.png`
                cardopr[1] = `img/jogadores/zagcr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbr.png`
                cardopr[3] = `img/jogadores/zagbr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aar.png`
                cardopr[2] = `img/jogadores/aar.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbr.png`
                cardopr[4] = `img/jogadores/latbr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latcr.png`
                cardopr[0] = `img/jogadores/latcr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }
        }
        else{
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagce.png`
                cardope[1] = `img/jogadores/zagce.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbe.png`
                cardope[3] = `img/jogadores/zagbe.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aae.png`
                cardope[2] = `img/jogadores/aae.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbe.png`
                cardope[4] = `img/jogadores/latbe.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latce.png`
                cardope[0] = `img/jogadores/latce.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }
        }      
    }
    else if(pacotesjogador[index]==`<img src="img/pacotes/pack4.png" id="packcomprado0">`){
        let random = parseInt(Math.random() * 100)
        if(random <= 20){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcr.png`
                cardopr[1] = `img/jogadores/zagcr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbr.png`
                cardopr[3] = `img/jogadores/zagbr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aar.png`
                cardopr[2] = `img/jogadores/aar.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbr.png`
                cardopr[4] = `img/jogadores/latbr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latcr.png`
                cardopr[0] = `img/jogadores/latcr.png`
                sessionStorage.cardsplayerr = JSON.stringify(cardopr)
            }
        }
        else if(random > 20  && random <= 85){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagce.png`
                cardope[1] = `img/jogadores/zagce.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbe.png`
                cardope[3] = `img/jogadores/zagbe.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aae.png`
                cardope[2] = `img/jogadores/aae.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbe.png`
                cardope[4] = `img/jogadores/latbe.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latce.png`
                cardope[0] = `img/jogadores/latce.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }
        }
        else{
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcl.png`
                cardopl[1] = `img/jogadores/zagcl.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbl.png`
                cardopl[3] = `img/jogadores/zagbl.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aal.png`
                cardopl[2] = `img/jogadores/aal.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbl.png`
                cardopl[4] = `img/jogadores/latbl.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latcl.png`
                cardopl[0] = `img/jogadores/latcl.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }
        }      
    }
    else if(pacotesjogador[index]==`<img src="img/pacotes/pack5.png" id="packcomprado0">`){
        let random = parseInt(Math.random() * 100)
        if(random <= 20){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagce.png`
                cardope[1] = `img/jogadores/zagce.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbe.png`
                cardope[3] = `img/jogadores/zagbe.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aae.png`
                cardope[2] = `img/jogadores/aae.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbe.png`
                cardope[4] = `img/jogadores/latbe.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latce.png`
                cardope[0] = `img/jogadores/latce.png`
                sessionStorage.cardsplayere = JSON.stringify(cardope)
            }
        }
        else if(random > 20  && random <= 85){
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcl.png`
                cardopl[1] = `img/jogadores/zagcl.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbl.png`
                cardopl[3] = `img/jogadores/zagbl.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aal.png`
                cardopl[2] = `img/jogadores/aal.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbl.png`
                cardopl[4] = `img/jogadores/latbl.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latcl.png`
                cardopl[0] = `img/jogadores/latcl.png`
                sessionStorage.cardsplayerl = JSON.stringify(cardopl)
            }
        }
        else{
            let random2 = parseInt(Math.random() * 5)
            if(random2 == 1){
                document.getElementById("cardpack").src = `img/jogadores/zagcm.png`
                cardopm[1] = `img/jogadores/zagcm.png`
                sessionStorage.cardsplayerm = JSON.stringify(cardopm)
            }if(random2 == 3){
                document.getElementById("cardpack").src = `img/jogadores/zagbm.png`
                cardopm[3] = `img/jogadores/zagbm.png`
                sessionStorage.cardsplayerm = JSON.stringify(cardopm)
            }if(random2 == 2){
                document.getElementById("cardpack").src = `img/jogadores/aam.png`
                cardopm[2] = `img/jogadores/aam.png`
                sessionStorage.cardsplayerm = JSON.stringify(cardopm)
            }if(random2 == 4){
                document.getElementById("cardpack").src = `img/jogadores/latbm.png`
                cardopm[4] = `img/jogadores/latbm.png`
                sessionStorage.cardsplayerm = JSON.stringify(cardopm)
            }if(random2 == 0){
                document.getElementById("cardpack").src = `img/jogadores/latcm.png`
                cardopm[0] = `img/jogadores/latcm.png`
                sessionStorage.cardsplayerm = JSON.stringify(cardopm)
            }
        }      
    }
    pacotesjogador[index] = '';
    sessionStorage.playerpacks = JSON.stringify(pacotesjogador)
    document.getElementById("packjogador").innerHTML= `${pacotesjogador}`
}

// fim pré sets



document.getElementById("compracomum").addEventListener("click", function(){
    let moneyplayer = parseFloat(sessionStorage.getItem("money"))
    let packotes = pacotesjogador.length
    if(moneyplayer>=100){
        for(let u = 0;u<=packotes;u++){
            if(pacotesjogador[u]==''){
                moneyplayer = moneyplayer - 100;
                sessionStorage.setItem("money",moneyplayer)  
                pacotesjogador[u] = `<img src="img/pacotes/pack1.png" id="packcomprado${u}">`
                sessionStorage.playerpacks = JSON.stringify(pacotesjogador)
                document.getElementById("packjogador").innerHTML= `${pacotesjogador}`
                document.getElementById("saldo").innerHTML = `Saldo:${moneyplayer}`
                document.getElementById(`packcomprado${u}`).addEventListener("click", abrepack(u))
                break;
            }
        }
    }
    else{
        alert("Dinheiro Insuficiente.");
    }
})

document.getElementById("compraincomum").addEventListener("click", function(){
    let moneyplayer = parseFloat(sessionStorage.getItem("money"))
    let packotes = pacotesjogador.length
    if(moneyplayer>=250){
        for(let u = 0;u<=packotes;u++){
            if(pacotesjogador[u]==''){
                moneyplayer = moneyplayer - 250;
                sessionStorage.setItem("money",moneyplayer)  
                pacotesjogador[u] = `<img src="img/pacotes/pack2.png" id="packcomprado${u}">`
                sessionStorage.playerpacks = JSON.stringify(pacotesjogador)
                document.getElementById("packjogador").innerHTML= `${pacotesjogador}`
                document.getElementById("saldo").innerHTML = `Saldo:${moneyplayer}`
                document.getElementById(`packcomprado${u}`).addEventListener("click", abrepack(u))
                break;
            }
        }
    }
    else{
        alert("Dinheiro Insuficiente.");
    }
})

document.getElementById("comprararo").addEventListener("click", function(){
    let moneyplayer = parseFloat(sessionStorage.getItem("money"))
    let packotes = pacotesjogador.length
    if(moneyplayer>=500){
        for(let u = 0;u<=packotes;u++){
            if(pacotesjogador[u]==''){
                moneyplayer = moneyplayer - 500;
                sessionStorage.setItem("money",moneyplayer)  
                pacotesjogador[u] = `<img src="img/pacotes/pack3.png" id="packcomprado${u}">`
                sessionStorage.playerpacks = JSON.stringify(pacotesjogador)
                document.getElementById("packjogador").innerHTML= `${pacotesjogador}`
                document.getElementById("saldo").innerHTML = `Saldo:${moneyplayer}`
                document.getElementById(`packcomprado${u}`).addEventListener("click", abrepack(u))
                break;
            }
        }
    }
    else{
        alert("Dinheiro Insuficiente.");
    }
})

document.getElementById("compraepico").addEventListener("click", function(){
    let moneyplayer = parseFloat(sessionStorage.getItem("money"))
    let packotes = pacotesjogador.length
    if(moneyplayer>=1000){
        for(let u = 0;u<=packotes;u++){
            if(pacotesjogador[u]==''){
                moneyplayer = moneyplayer - 1000;
                sessionStorage.setItem("money",moneyplayer)  
                pacotesjogador[u] = `<img src="img/pacotes/pack4.png" id="packcomprado${u}">`
                sessionStorage.playerpacks = JSON.stringify(pacotesjogador)
                document.getElementById("packjogador").innerHTML= `${pacotesjogador}`
                document.getElementById("saldo").innerHTML = `Saldo:${moneyplayer}`
                document.getElementById(`packcomprado${u}`).addEventListener("click", abrepack(u))
                break;
            }
        }
    }
    else{
        alert("Dinheiro Insuficiente.");
    }
})


document.getElementById("compralendario").addEventListener("click", function(){
    let moneyplayer = parseFloat(sessionStorage.getItem("money"))
    let packotes = pacotesjogador.length
    if(moneyplayer>=2500){
        for(let u = 0;u<=packotes;u++){
            if(pacotesjogador[u]==''){
                moneyplayer = moneyplayer - 2500;
                sessionStorage.setItem("money",moneyplayer)  
                pacotesjogador[u] = `<img src="img/pacotes/pack5.png" id="packcomprado${u}">`
                sessionStorage.playerpacks = JSON.stringify(pacotesjogador)
                document.getElementById("packjogador").innerHTML= `${pacotesjogador}`
                document.getElementById("saldo").innerHTML = `Saldo:${moneyplayer}`
                document.getElementById(`packcomprado${u}`).addEventListener("click", abrepack(u))
                break;
            }
        }
    }
    else{
        alert("Dinheiro Insuficiente.");
    }
})



