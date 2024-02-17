"use strict";

let playerchamps = JSON.parse(sessionStorage.timeplayer)
let zagcplayer = playerchamps[0]
let latcplayer = playerchamps[1]
let aaplayer = playerchamps[2]
let latbplayer = playerchamps[3]
let zagbplayer = playerchamps[4]

let playerlocal = JSON.parse(sessionStorage.timelocal)
let zagclocal = playerlocal[0]
let latclocal = playerlocal[1]
let aalocal = playerlocal[2]
let latblocal = playerlocal[3]
let zagblocal = playerlocal[4]
let cls = [`velocidade`,`tecnica`,`forca`,`nenhuma`];

document.getElementById("zagc1").src = zagcplayer;
if(zagctype[zagclocal]==`tecnica`){
    document.getElementById("zagc1").classList.remove(...cls)
    document.getElementById("zagc1").classList.add('tecnica');
}if(zagctype[zagclocal]==`forca`){
    document.getElementById("zagc1").classList.remove(...cls)
    document.getElementById("zagc1").classList.add('forca');
}if(zagctype[zagclocal]==`velocidade`){
    document.getElementById("zagc1").classList.remove(...cls)
    document.getElementById("zagc1").classList.add('velocidade');
}
document.getElementById("latc1").src = latcplayer;
if(latctype[latclocal]==`tecnica`){
    document.getElementById("latc1").classList.remove(...cls)
    document.getElementById("latc1").classList.add('tecnica');
}if(latctype[latclocal]==`forca`){
    document.getElementById("latc1").classList.remove(...cls)
    document.getElementById("latc1").classList.add('forca');
}if(latctype[latclocal]==`velocidade`){
    document.getElementById("latc1").classList.remove(...cls)
    document.getElementById("latc1").classList.add('velocidade');
}
document.getElementById("aa1").src = aaplayer;
if(aatype[aalocal]==`tecnica`){
    document.getElementById("aa1").classList.remove(...cls)
    document.getElementById("aa1").classList.add('tecnica');
}if(aatype[aalocal]==`forca`){
    document.getElementById("aa1").classList.remove(...cls)
    document.getElementById("aa1").classList.add('forca');
}if(aatype[aalocal]==`velocidade`){
    document.getElementById("aa1").classList.remove(...cls)
    document.getElementById("aa1").classList.add('velocidade');
}
document.getElementById("latb1").src = latbplayer;
if(latbtype[latblocal]==`tecnica`){
    document.getElementById("latb1").classList.remove(...cls)
    document.getElementById("latb1").classList.add('tecnica');
}if(latbtype[latblocal]==`forca`){
    document.getElementById("latb1").classList.remove(...cls)
    document.getElementById("latb1").classList.add('forca');
}if(latbtype[latblocal]==`velocidade`){
    document.getElementById("latb1").classList.remove(...cls)
    document.getElementById("latb1").classList.add('velocidade');
}
document.getElementById("zagb1").src = zagbplayer;
if(zagbtype[zagblocal]==`tecnica`){
    document.getElementById("zagb1").classList.remove(...cls)
    document.getElementById("zagb1").classList.add('tecnica');
}if(zagbtype[zagblocal]==`forca`){
    document.getElementById("zagb1").classList.remove(...cls)
    document.getElementById("zagb1").classList.add('forca');
}if(zagbtype[zagblocal]==`velocidade`){
    document.getElementById("zagb1").classList.remove(...cls)
    document.getElementById("zagb1").classList.add('velocidade');
}