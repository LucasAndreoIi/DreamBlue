"use strict";

//Script especifico para armazenar dados
let questsplayer = [];
let contagol = 0;
let contavitf = 0;
let contavitm = 0;
let contavitd = 0;
let contacardc = ['','','','',''];
let contacardi = ['','','','',''];
let contacardr = ['','','','',''];
let contacarde = ['','','','',''];
let contacardl = ['','','','',''];
let contacardm = ['','','','',''];
let contacards = ['','','','',''];
let zagclist = [`img/jogadores/zagcc.png`,`img/jogadores/zagci.png`,`img/jogadores/zagcr.png`,`img/jogadores/zagce.png`,`img/jogadores/zagcl.png`,`img/jogadores/zagcm.png`];
let zagblist = [`img/jogadores/zagbc.png`,`img/jogadores/zagbi.png`,`img/jogadores/zagbr.png`,`img/jogadores/zagbe.png`,`img/jogadores/zagbl.png`,`img/jogadores/zagbm.png`];
let latclist = [`img/jogadores/latcc.png`,`img/jogadores/latci.png`,`img/jogadores/latcr.png`,`img/jogadores/latce.png`,`img/jogadores/latcl.png`,`img/jogadores/latcm.png`];
let latblist = [`img/jogadores/latbc.png`,`img/jogadores/latbi.png`,`img/jogadores/latbr.png`,`img/jogadores/latbe.png`,`img/jogadores/latbl.png`,`img/jogadores/latbm.png`];
let aalist = [`img/jogadores/aac.png`,`img/jogadores/aai.png`,`img/jogadores/aar.png`,`img/jogadores/aae.png`,`img/jogadores/aal.png`,`img/jogadores/aam.png`];
let zagcnome = [`Junichi Wanima`,`Gurimu Igarashi `,`Jingo Raichi`,`Jyubei Aryu`,`Tabito Karasu`,`Gin Gagamaru`];
let zagbnome = [`Tetsu Sokura`,`Miroku Darai`,`Akira Endoji`,`Oliver Aiku`,`Eita Otoya`,`Hyoma Chigiri`];
let latcnome = [`Nijiro Nanase`,`Aoshi Tokimitsu`,`Ranze Kurona`,`Reo Mikage`,`Kenyu Yukimiya`,`Meguru Bachira`];
let latbnome = [`Asahi Naruhaya`,`Ikki Niko`,`Zantetsu Tsurugi`,`Yo Hiori`,`Ryusei Shido`,`Shoei Baro`];
let aanome = [`Saramadara`,`Shuto Sendo`,`Kunigami`,`Seishiro Nagi`,`Rin Itoshi`,`Yoichi Isagi`];
let characterstats = [20,30,60,70,110,150];
let zagctype = [`velocidade`,`forca`,`forca`,`velocidade`,`tecnica`,`forca`];
let zagbtype = [`forca`,`tecnica`,`forca`,`forca`,`velocidade`,`velocidade`];
let latctype = [`tecnica`,`forca`,`velocidade`,`tecnica`,`forca`,`tecnica`];
let latbtype = [`tecnica`,`tecnica`,`velocidade`,`tecnica`,`velocidade`,`forca`];
let aatype = [`forca`,`velocidade`,`forca`,`tecnica`,`velocidade`,`tecnica`];

let playerraking = sessionStorage.getItem("ranking");
if(playerraking==null){
    sessionStorage.setItem("ranking","Z")
}
let playermoney = sessionStorage.getItem("money");
if(playermoney==null){
    sessionStorage.setItem("money",0)
}
let playerwins = sessionStorage.getItem("wins");
if(playerwins==null){
    sessionStorage.setItem("wins",0)
}
let playerloses= sessionStorage.getItem("loses");
if(playerloses==null){
    sessionStorage.setItem("loses",0)
}

let fotojogador = sessionStorage.getItem("fotojogador")
if(sessionStorage.fotojogador == null){
    sessionStorage.setItem("fotojogador",`img/jogadores/goleiro.jpg`)
}

if(sessionStorage.cardsplayerc==null){
    sessionStorage.setItem("cardsplayerc",'')
    let freecartas = ['img/jogadores/latccmini.png','img/jogadores/zagccmini.png','img/jogadores/aacmini.png','img/jogadores/zagbcmini.png','img/jogadores/latbc.png']
    sessionStorage.cardsplayerc = JSON.stringify(freecartas)
}
if(sessionStorage.cardsplayerc){
    contacardc = JSON.parse(sessionStorage.getItem('cardsplayerc'))
}

if(sessionStorage.cardsplayeri==null){
    sessionStorage.setItem("cardsplayeri",'')
}
if(sessionStorage.cardsplayeri){
    contacardi = JSON.parse(sessionStorage.getItem('cardsplayeri'))
    sessionStorage.cardsplayeri = JSON.stringify(contacardi)
}

if(sessionStorage.cardsplayerr==null){
    sessionStorage.setItem("cardsplayerr",'')
}
if(sessionStorage.cardsplayerr){
    contacardr = JSON.parse(sessionStorage.getItem('cardsplayerr'))
}

if(sessionStorage.cardsplayere==null){
    sessionStorage.setItem("cardsplayere",'')
}
if(sessionStorage.cardsplayere){
    contacarde = JSON.parse(sessionStorage.getItem('cardsplayere'))
}

if(sessionStorage.cardsplayerl==null){
    sessionStorage.setItem("cardsplayerl",'')
}
if(sessionStorage.cardsplayerl){
    contacardl = JSON.parse(sessionStorage.getItem('cardsplayerl'))
}

if(sessionStorage.cardsplayerm==null){
    sessionStorage.setItem("cardsplayerm",'')
}
if(sessionStorage.cardsplayerm){
    contacardm = JSON.parse(sessionStorage.getItem('cardsplayerm'))
}

if(sessionStorage.cardsplayers==null){
    sessionStorage.setItem("cardsplayers",'')
}
if(sessionStorage.cardsplayers){
    contacards = JSON.parse(sessionStorage.getItem('cardsplayers'))
}

if(sessionStorage.timeplayer==null){
    sessionStorage.setItem("timeplayer","")
    let time = [`img/jogadores/zagcc.png`,`img/jogadores/latcc.png`,`img/jogadores/aac.png`,`img/jogadores/latbc.png`,`img/jogadores/zagbc.png`]
    sessionStorage.timeplayer = JSON.stringify(time)
}

if(sessionStorage.timelocal==null){
    sessionStorage.setItem("timelocal","")
    let timelocal = [0,0,0,0,0]
    sessionStorage.timelocal = JSON.stringify(timelocal)
}

if(sessionStorage.contavitfacil==null){
    sessionStorage.setItem("contavitfacil",'')
}
if(sessionStorage.contavitfacil){
    contavitf = parseInt(sessionStorage.getItem('contavitfacil'))
}

if(sessionStorage.contavitmedio==null){
    sessionStorage.setItem("contavitmedio",'')
}
if(sessionStorage.contavitmedio){
    contavitm = parseInt(sessionStorage.getItem('contavitmedio'))
}

if(sessionStorage.contavitdificil==null){
    sessionStorage.setItem("contavitdificil",'')
}
if(sessionStorage.contavitdificil){
    contavitd = parseInt(sessionStorage.getItem('contavitdificil'))
}

if(sessionStorage.contagol==null){
    sessionStorage.setItem("contagol",'0')
}
if(sessionStorage.contagol){
    contagol = parseInt(sessionStorage.getItem('contagol'))
}

if(sessionStorage.quests == null){
    sessionStorage.setItem("quests",``)
}if(sessionStorage.quests){
    questsplayer = JSON.parse(sessionStorage.getItem('quests'))
}