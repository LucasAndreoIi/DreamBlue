"use strict";

//
let timejogador = JSON.parse(sessionStorage.timeplayer);
let timel = JSON.parse(sessionStorage.timelocal);
let atualplayer = 7;
let atuallocal = 7;
let clt = [`velocidade`,`tecnica`,`forca`,`nenhuma`];


function mostratime(){
    for(let p = 0;p<=4;p++){
        if(p==0){
            document.getElementById(`player${p}`).src= zagclist[timel[p]]
            if(zagctype[timel[p]]==`velocidade`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('velocidade');
            }
            if(zagctype[timel[p]]==`tecnica`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('tecnica');
            }
            if(zagctype[timel[p]]==`forca`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('forca');
            }
        }
        if(p==1){
            document.getElementById(`player${p}`).src= latclist[timel[p]]
            if(latctype[timel[p]]==`velocidade`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('velocidade');
            }
            if(latctype[timel[p]]==`tecnica`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('tecnica');
            }
            if(latctype[timel[p]]==`forca`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('forca');
            }
        }
        if(p==2){
            document.getElementById(`player${p}`).src= aalist[timel[p]]
            if(aatype[timel[p]]==`velocidade`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('velocidade');
            }
            if(aatype[timel[p]]==`tecnica`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('tecnica');
            }
            if(aatype[timel[p]]==`forca`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('forca');
            }
        }
        if(p==3){
            document.getElementById(`player${p}`).src= latblist[timel[p]]
            if(latbtype[timel[p]]==`velocidade`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('velocidade');
            }
            if(latbtype[timel[p]]==`tecnica`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('tecnica');
            }
            if(latbtype[timel[p]]==`forca`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('forca');
            }
        }
        if(p==4){
            document.getElementById(`player${p}`).src= zagblist[timel[p]]
            if(zagbtype[timel[p]]==`velocidade`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('velocidade');
            }
            if(zagbtype[timel[p]]==`tecnica`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('tecnica');
            }
            if(zagbtype[timel[p]]==`forca`){
                document.getElementById(`player${p}`).classList.remove(...clt)
                document.getElementById(`player${p}`).classList.add('forca');
            }
        }
    }
}

mostratime();


//TODOS BOTÕES DA COLEÇÃO

//Jogadores Comuns
document.getElementById("czagc0").addEventListener("click", function(){
    atualplayer = 0
    atuallocal = 0
    document.getElementById("cardphoto").src = zagclist[0] ;
    document.getElementById("cardname").innerHTML =zagcnome[0] ;
    if(zagctype[0]=="forca"){
        document.getElementById("cardtype").src= `img/icones/haltare.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
    }if(zagctype[0]=="velocidade"){
        document.getElementById("cardtype").src= `img/icones/velocidade.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
    }if(zagctype[0]=="tecnica"){
        document.getElementById("cardtype").src= `img/icones/cerebro.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
    }
});

document.getElementById("czagb0").addEventListener("click", function(){
    atualplayer = 4
    atuallocal = 0
    document.getElementById("cardphoto").src = zagblist[0] ;
    document.getElementById("cardname").innerHTML =zagbnome[0] ;
    if(zagbtype[0]=="forca"){
        document.getElementById("cardtype").src= `img/icones/haltare.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
    }if(zagbtype[0]=="velocidade"){
        document.getElementById("cardtype").src= `img/icones/velocidade.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
    }if(zagbtype[0]=="tecnica"){
        document.getElementById("cardtype").src= `img/icones/cerebro.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
    }
});

document.getElementById("caa0").addEventListener("click", function(){
    atualplayer = 2
    atuallocal = 0
    document.getElementById("cardphoto").src = aalist[0] ;
    document.getElementById("cardname").innerHTML =aanome[0] ;
    if(aatype[0]=="forca"){
        document.getElementById("cardtype").src= `img/icones/haltare.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
    }if(aatype[0]=="velocidade"){
        document.getElementById("cardtype").src= `img/icones/velocidade.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
    }if(aatype[0]=="tecnica"){
        document.getElementById("cardtype").src= `img/icones/cerebro.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
    }
});

document.getElementById("clatc0").addEventListener("click", function(){
    atualplayer = 1
    atuallocal = 0
    document.getElementById("cardphoto").src = latclist[0] ;
    document.getElementById("cardname").innerHTML =latcnome[0] ;
    if(latctype[0]=="forca"){
        document.getElementById("cardtype").src= `img/icones/haltare.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
    }if(latctype[0]=="velocidade"){
        document.getElementById("cardtype").src= `img/icones/velocidade.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
    }if(latctype[0]=="tecnica"){
        document.getElementById("cardtype").src= `img/icones/cerebro.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
    }
});

document.getElementById("clatb0").addEventListener("click", function(){
    atualplayer = 3
    atuallocal = 0
    document.getElementById("cardphoto").src = latblist[0] ;
    document.getElementById("cardname").innerHTML =latcnome[0] ;
    if(latbtype[0]=="forca"){
        document.getElementById("cardtype").src= `img/icones/haltare.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
    }if(latbtype[0]=="velocidade"){
        document.getElementById("cardtype").src= `img/icones/velocidade.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
    }if(latbtype[0]=="tecnica"){
        document.getElementById("cardtype").src= `img/icones/cerebro.png`;
        document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
    }
});


//Jogadores Incomuns

if(contacardi[0] == `img/jogadores/latci.png`){
    document.getElementById("ilatc0").src="img/jogadores/latcimini.png"
    document.getElementById("ilatc0").addEventListener("click", function(){
        atualplayer = 1
        atuallocal = 1
        document.getElementById("cardphoto").src = latclist[1] ;
        document.getElementById("cardname").innerHTML =latcnome[1] ;
        if(latctype[1]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latctype[1]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latctype[1]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}


if(contacardi[1] == `img/jogadores/zagci.png`){
    document.getElementById("izagc0").src="img/jogadores/zagcimini.png"
    document.getElementById("izagc0").addEventListener("click", function(){
        atuallocal = 1
        atualplayer = 0
        document.getElementById("cardphoto").src = zagclist[1] ;
        document.getElementById("cardname").innerHTML =zagcnome[1] ;
        if(zagctype[1]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagctype[1]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagctype[1]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardi[2] == `img/jogadores/aai.png`){
    document.getElementById("iaa0").src="img/jogadores/aaimini.png"
    document.getElementById("iaa0").addEventListener("click", function(){
        atuallocal = 1
        atualplayer = 2
        document.getElementById("cardphoto").src = aalist[1] ;
        document.getElementById("cardname").innerHTML =aanome[1] ;
        if(aatype[1]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(aatype[1]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(aatype[1]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardi[3] == `img/jogadores/zagbi.png`){
    document.getElementById("izagb0").src="img/jogadores/zagbimini.png"
    document.getElementById("izagb0").addEventListener("click", function(){
        atuallocal = 1
        atualplayer = 4
        document.getElementById("cardphoto").src = zagblist[1] ;
        document.getElementById("cardname").innerHTML =zagbnome[1] ;
        if(zagbtype[1]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagbtype[1]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagbtype[1]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardi[4] == `img/jogadores/latbi.png`){
    document.getElementById("ilatb0").src="img/jogadores/latbimini.png"
    document.getElementById("ilatb0").addEventListener("click", function(){
        atuallocal = 1
        atualplayer = 3
        document.getElementById("cardphoto").src = latblist[1] ;
        document.getElementById("cardname").innerHTML =latbnome[1] ;
        if(latbtype[1]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latbtype[1]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latbtype[1]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}

//jogadores raros

if(contacardr[0] == `img/jogadores/latcr.png`){
    document.getElementById("rlatc0").src="img/jogadores/latcrmini.png"
    document.getElementById("rlatc0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = latclist[2] ;
        document.getElementById("cardname").innerHTML =latcnome[2] ;
        atuallocal = 2
        atualplayer = 1
        if(latctype[2]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latctype[2]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latctype[2]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}


if(contacardr[1] == `img/jogadores/zagcr.png`){
    document.getElementById("rzagc0").src="img/jogadores/zagcrmini.png"
    document.getElementById("rzagc0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = zagclist[2] ;
        document.getElementById("cardname").innerHTML =zagcnome[2] ;
        atuallocal = 2
        atualplayer = 0
        if(zagctype[2]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagctype[2]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagctype[2]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardr[2] == `img/jogadores/aar.png`){
    document.getElementById("raa0").src="img/jogadores/aarmini.png"
    document.getElementById("raa0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = aalist[2] ;
        document.getElementById("cardname").innerHTML =aanome[2] ;
        atuallocal = 2
        atualplayer = 2
        if(aatype[2]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(aatype[2]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(aatype[2]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardr[3] == `img/jogadores/zagbr.png`){
    document.getElementById("rzagb0").src="img/jogadores/zagbrmini.png"
    document.getElementById("rzagb0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = zagblist[2] ;
        document.getElementById("cardname").innerHTML =zagbnome[2] ;
        atuallocal = 2
        atualplayer = 4
        if(zagbtype[2]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagbtype[2]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagbtype[2]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardr[4] == `img/jogadores/latbr.png`){
    document.getElementById("rlatb0").src="img/jogadores/latbrmini.png"
    document.getElementById("rlatb0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = latblist[2] ;
        document.getElementById("cardname").innerHTML =latbnome[2] ;
        atuallocal = 2
        atualplayer = 3
        if(latbtype[2]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latbtype[2]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latbtype[2]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}


//jogadores epicos

if(contacarde[0] == `img/jogadores/latce.png`){
    document.getElementById("elatc0").src="img/jogadores/latcemini.png"
    document.getElementById("elatc0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = latclist[3] ;
        document.getElementById("cardname").innerHTML =latcnome[3] ;
        atuallocal = 3
        atualplayer = 1
        if(latctype[3]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latctype[3]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latctype[3]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}


if(contacarde[1] == `img/jogadores/zagce.png`){
    document.getElementById("ezagc0").src="img/jogadores/zagcemini.png"
    document.getElementById("ezagc0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = zagclist[3] ;
        document.getElementById("cardname").innerHTML =zagcnome[3] ;
        atuallocal = 3
        atualplayer = 0
        if(zagctype[3]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagctype[3]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagctype[3]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacarde[2] == `img/jogadores/aae.png`){
    document.getElementById("eaa0").src="img/jogadores/aaemini.png"
    document.getElementById("eaa0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = aalist[3] ;
        document.getElementById("cardname").innerHTML =aanome[3] ;
        atuallocal = 3
        atualplayer = 2
        if(aatype[3]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(aatype[3]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(aatype[3]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacarde[3] == `img/jogadores/zagbe.png`){
    document.getElementById("ezagb0").src="img/jogadores/zagbemini.png"
    document.getElementById("ezagb0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = zagblist[3] ;
        document.getElementById("cardname").innerHTML =zagbnome[3] ;
        atuallocal = 3
        atualplayer = 4
        if(zagbtype[3]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagbtype[3]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagbtype[3]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacarde[4] == `img/jogadores/latbe.png`){
    document.getElementById("elatb0").src="img/jogadores/latbemini.png"
    document.getElementById("elatb0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = latblist[3] ;
        document.getElementById("cardname").innerHTML =latbnome[3] ;
        atuallocal = 3
        atualplayer = 3
        if(latbtype[3]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latbtype[3]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latbtype[3]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}

//jogadores lendarios

if(contacardl[0] == `img/jogadores/latcl.png`){
    document.getElementById("llatc0").src="img/jogadores/latclmini.png"
    document.getElementById("llatc0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = latclist[4] ;
        document.getElementById("cardname").innerHTML =latcnome[4] ;
        atuallocal = 4
        atualplayer = 1
        if(latctype[4]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latctype[4]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latctype[4]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}


if(contacardl[1] == `img/jogadores/zagcl.png`){
    document.getElementById("lzagc0").src="img/jogadores/zagclmini.png"
    document.getElementById("lzagc0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = zagclist[4] ;
        document.getElementById("cardname").innerHTML =zagcnome[4] ;
        atuallocal = 4
        atualplayer = 0
        if(zagctype[4]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagctype[4]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagctype[4]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardl[2] == `img/jogadores/aal.png`){
    document.getElementById("laa0").src="img/jogadores/aalmini.png"
    document.getElementById("laa0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = aalist[4] ;
        document.getElementById("cardname").innerHTML =aanome[4] ;
        atuallocal = 4
        atualplayer = 2
        if(aatype[4]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(aatype[4]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(aatype[4]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardl[3] == `img/jogadores/zagbl.png`){
    document.getElementById("lzagb0").src="img/jogadores/zagblmini.png"
    document.getElementById("lzagb0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = zagblist[4] ;
        document.getElementById("cardname").innerHTML =zagbnome[4] ;
        atuallocal = 4
        atualplayer = 4
        if(zagbtype[4]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagbtype[4]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagbtype[4]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardl[4] == `img/jogadores/latbl.png`){
    document.getElementById("llatb0").src="img/jogadores/latblmini.png"
    document.getElementById("llatb0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = latblist[4] ;
        document.getElementById("cardname").innerHTML =latbnome[4] ;
        atuallocal = 4
        atualplayer = 3
        if(latbtype[4]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latbtype[4]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latbtype[4]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}

//jogadores miticos

if(contacardm[0] == `img/jogadores/latcm.png`){
    document.getElementById("mlatc0").src="img/jogadores/latcmmini.png"
    document.getElementById("mlatc0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = latclist[5] ;
        document.getElementById("cardname").innerHTML =latcnome[5] ;
        atuallocal = 5
        atualplayer = 1
        if(latctype[5]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latctype[5]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latctype[5]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}


if(contacardm[1] == `img/jogadores/zagcm.png`){
    document.getElementById("mzagc0").src="img/jogadores/zagcmmini.png"
    document.getElementById("mzagc0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = zagclist[5] ;
        document.getElementById("cardname").innerHTML =zagcnome[5] ;
        atuallocal = 5
        atualplayer = 0
        if(zagctype[5]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagctype[5]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagctype[5]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardm[2] == `img/jogadores/aam.png`){
    document.getElementById("maa0").src="img/jogadores/aammini.png"
    document.getElementById("maa0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = aalist[5] ;
        document.getElementById("cardname").innerHTML =aanome[5] ;
        atuallocal = 5
        atualplayer = 2
        if(aatype[5]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(aatype[5]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(aatype[5]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardm[3] == `img/jogadores/zagbm.png`){
    document.getElementById("mzagb0").src="img/jogadores/zagbmmini.png"
    document.getElementById("mzagb0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = zagblist[5] ;
        document.getElementById("cardname").innerHTML =zagbnome[5] ;
        atuallocal = 5
        atualplayer = 4
        if(zagbtype[5]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(zagbtype[5]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(zagbtype[5]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}
if(contacardm[4] == `img/jogadores/latbm.png`){
    document.getElementById("mlatb0").src="img/jogadores/latbmmini.png"
    document.getElementById("mlatb0").addEventListener("click", function(){
        document.getElementById("cardphoto").src = latblist[5] ;
        document.getElementById("cardname").innerHTML =latbnome[5] ;
        atuallocal = 5
        atualplayer = 3
        if(latbtype[5]=="forca"){
            document.getElementById("cardtype").src= `img/icones/haltare.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="forca">FORÇA<div>`;
        }if(latbtype[5]=="velocidade"){
            document.getElementById("cardtype").src= `img/icones/velocidade.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="velocidade">VELOCIDADE<div>`;
        }if(latbtype[5]=="tecnica"){
            document.getElementById("cardtype").src= `img/icones/cerebro.png`;
            document.getElementById("carddesc").innerHTML= `Esse jogador é do tipo <div id="tecnica">Técnica<div>`;
        }
    })
}



//botões

document.getElementById("eqpbutton").addEventListener("click", function(){
    let cartaescolha = document.getElementById("cardphoto").src
    timejogador[atualplayer] = cartaescolha
    timel[atualplayer] = atuallocal
    sessionStorage.timelocal = JSON.stringify(timel)
    if(atualplayer == 0){
        sessionStorage.timeplayer = JSON.stringify(timejogador)
    }if(atualplayer == 1){
        sessionStorage.timeplayer = JSON.stringify(timejogador)
    }if(atualplayer == 2){
        sessionStorage.timeplayer = JSON.stringify(timejogador)
    }if(atualplayer == 3){
        sessionStorage.timeplayer = JSON.stringify(timejogador)
    }if(atualplayer == 4){
        sessionStorage.timeplayer = JSON.stringify(timejogador)
    }
    mostratime();
})

document.getElementById("iconeplayer").addEventListener("click", function(){
    let iconeescolha = document.getElementById("cardphoto").src
    if(cardname.innerHTML== `Selecione um card`){
        alert("Escolha um jogador!")
    }
    else{
        sessionStorage.setItem("fotojogador", iconeescolha)
    }
})