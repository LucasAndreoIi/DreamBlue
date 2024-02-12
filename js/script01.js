"use strict";
//*SISTEMAS GERAIS*
document.getElementById("ranking").innerHTML = sessionStorage.getItem("ranking");

document.getElementById("cash").innerHTML = sessionStorage.getItem("money");

document.getElementById("wins").innerHTML = sessionStorage.getItem("wins");

document.getElementById("loses").innerHTML = sessionStorage.getItem("loses");
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

let dificuldade = 5;

let profilefoto = sessionStorage.getItem("fotojogador")
document.getElementById("profilepic").src = profilefoto;

//FIM DOS *SISTEMAS GERAIS*

//SISTEMA *NOME DE TIME*
let nomt = sessionStorage.getItem("nt");
if(nomt==null){

}else{
    document.getElementById("teamname").innerHTML = `${nomt}`
}

if(document.getElementById("nometime")!=null){
    document.getElementById("nometime").addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            let nt = String(document.getElementById("nometime").value)
            document.getElementById("teamname").innerHTML = `${nt}`
            sessionStorage.setItem("nt",nt)
        }
    });
}

//FIM DO *SISTEMA NOME DE TIME*

document.getElementById("facil").addEventListener("click", function(){
    dificuldade = 0
})
document.getElementById("medio").addEventListener("click", function(){
    dificuldade = 2
})
document.getElementById("dificil").addEventListener("click", function(){
    dificuldade= 3
})


//SISTEMA *BOTÕES DE PARTIDA*
document.getElementById("init").addEventListener("click", function(){
    let goltimeal = [0,0,0,0,0]
    let mvp = ``;
    let mvpname = ``;
    let golsmvp = 0;
    let golsop = 0
    let golsal = 0
    let timeoponente = [];
    let timeopstats = [];
    let timealstats = [];
    let velop = 0.5;
    let forop = 0.5;
    let tecop = 0.5;
    let velal = 0.5;
    let foral = 0.5;
    let tecal = 0.5;
    let timealiado=[];
    let timeinimigo= [];
    let pontuacao = ``;
    let dinheiro = 0;
    if(dificuldade == 5){
        alert("Escolha uma dificuldade")
    }else{
           for(let contadifi = 0; contadifi <= 3; contadifi++){
            if(contadifi==dificuldade){
                let randomzagc = parseInt(Math.random() * 3)+contadifi
                timeoponente[0] = randomzagc
                document.getElementById("zagc2").src = zagclist[randomzagc];
                let randomlatc = parseInt(Math.random() * 3)+contadifi
                timeoponente[1] = randomlatc
                document.getElementById("latc2").src = latclist[randomlatc];
                let randomaa = parseInt(Math.random() * 3)+contadifi
                timeoponente[2] = randomaa
                document.getElementById("aa2").src = aalist[randomaa];
                let randomlatb = parseInt(Math.random() * 3)+contadifi
                timeoponente[3] = randomlatb
                document.getElementById("latb2").src = latblist[randomlatb];
                let randomzagb = parseInt(Math.random() * 3)+contadifi
                timeoponente[4] = randomzagb
                document.getElementById("zagb2").src = zagblist[randomzagb];

                //mudaborda
                if(zagbtype[randomzagb]==`tecnica`){
                    document.getElementById("zagb2").classList.remove(...cls)
                    document.getElementById("zagb2").classList.add('tecnica');
                }if(zagbtype[randomzagb]==`forca`){
                    document.getElementById("zagb2").classList.remove(...cls)
                    document.getElementById("zagb2").classList.add('forca');
                }if(zagbtype[randomzagb]==`velocidade`){
                    document.getElementById("zagb2").classList.remove(...cls)
                    document.getElementById("zagb2").classList.add('velocidade');
                }
                if(zagctype[randomzagc]==`tecnica`){
                    document.getElementById("zagc2").classList.remove(...cls)
                    document.getElementById("zagc2").classList.add('tecnica');
                }if(zagctype[randomzagc]==`forca`){
                    document.getElementById("zagc2").classList.remove(...cls)
                    document.getElementById("zagc2").classList.add('forca');
                }if(zagctype[randomzagc]==`velocidade`){
                    document.getElementById("zagc2").classList.remove(...cls)
                    document.getElementById("zagc2").classList.add('velocidade');
                }
                if(latbtype[randomlatb]==`tecnica`){
                    document.getElementById("latb2").classList.remove(...cls)
                    document.getElementById("latb2").classList.add('tecnica');
                }if(latbtype[randomlatb]==`forca`){
                    document.getElementById("latb2").classList.remove(...cls)
                    document.getElementById("latb2").classList.add('forca');
                }if(latbtype[randomlatb]==`velocidade`){
                    document.getElementById("latb2").classList.remove(...cls)
                    document.getElementById("latb2").classList.add('velocidade');
                }
                if(latctype[randomlatc]==`tecnica`){
                    document.getElementById("latc2").classList.remove(...cls)
                    document.getElementById("latc2").classList.add('tecnica');
                }if(latctype[randomlatc]==`forca`){
                    document.getElementById("latc2").classList.remove(...cls)
                    document.getElementById("latc2").classList.add('forca');
                }if(latctype[randomlatc]==`velocidade`){
                    document.getElementById("latc2").classList.remove(...cls)
                    document.getElementById("latc2").classList.add('velocidade');
                }
                if(aatype[randomaa]==`tecnica`){
                    document.getElementById("aa2").classList.remove(...cls)
                    document.getElementById("aa2").classList.add('tecnica');
                }if(aatype[randomaa]==`forca`){
                    document.getElementById("aa2").classList.remove(...cls)
                    document.getElementById("aa2").classList.add('forca');
                }if(aatype[randomaa]==`velocidade`){
                    document.getElementById("aa2").classList.remove(...cls)
                    document.getElementById("aa2").classList.add('velocidade');
                }
    
                //calcula inimigo
                if(zagctype[randomzagc]==`velocidade`){
                    timeopstats[0] = `velocidade`;
                    velop += 0.5
                }else if(zagctype[randomzagc]==`forca`){
                    timeopstats[0] = `forca`;
                    forop+=0.5
                }else{
                    timeopstats[0] = `tecnica`;
                    tecop+=0.5
                }
    
                if(zagbtype[randomzagb]==`velocidade`){
                    timeopstats[4] = `velocidade`;
                    velop += 0.5
                }else if(zagbtype[randomzagb]==`forca`){
                    timeopstats[4] = `forca`;
                    forop+=0.5
                }else{
                    timeopstats[4] = `tecnica`;
                    tecop+=0.5
                }
    
                if(latctype[randomlatc]==`velocidade`){
                    timeopstats[1] = `velocidade`;
                    velop += 0.5
                }else if(latctype[randomlatc]==`forca`){
                    timeopstats[1] = `forca`;
                    forop+=0.5
                }else{
                    timeopstats[1] = `tecnica`;
                    tecop+=0.5
                }
    
                if(latbtype[randomlatb]==`velocidade`){
                    timeopstats[3] = `velocidade`;
                    velop += 0.5
                }else if(latbtype[randomlatb]==`forca`){
                    timeopstats[3] = `forca`;
                    forop+=0.5
                }else{
                    timeopstats[3] = `tecnica`;
                    tecop+=0.5
                }
    
                if(aatype[randomaa]==`velocidade`){
                    timeopstats[2] = `velocidade`;
                    velop += 0.5
                }else if(aatype[randomaa]==`forca`){
                    timeopstats[2] = `forca`;
                    forop+=0.5
                }else{
                    timeopstats[2] = `tecnica`;
                    tecop+=0.5
                }
    
                //calculaaliado
                if(zagctype[zagclocal]==`velocidade`){
                    timealstats[0] = `velocidade`;
                    velal += 0.5
                }else if(zagctype[zagclocal]==`forca`){
                    timealstats[0] = `forca`;
                    foral+=0.5
                }else{
                    timealstats[0] = `tecnica`;
                    tecal+=0.5
                }
    
                if(zagbtype[zagblocal]==`velocidade`){
                    timealstats[4] = `velocidade`;
                    velal += 0.5
                }else if(zagbtype[zagblocal]==`forca`){
                    timealstats[4] = `forca`;
                    foral+=0.5
                }else{
                    timealstats[4] = `tecnica`;
                    tecal+=0.5
                }
    
                if(latctype[latclocal]==`velocidade`){
                    timealstats[1] = `velocidade`;
                    velal += 0.5
                }else if(latctype[latclocal]==`forca`){
                    timealstats[1] = `forca`;
                    foral+=0.5
                }else{
                    timealstats[1] = `tecnica`;
                    tecal+=0.5
                }
    
                if(latbtype[latblocal]==`velocidade`){
                    timealstats[3] = `velocidade`;
                    velal += 0.5
                }else if(latbtype[latblocal==`forca`]){
                    timealstats[3] = `forca`;
                    foral+=0.5
                }else{
                    timealstats[3] = `tecnica`;
                    tecal+=0.5
                }
    
                if(aatype[aalocal]==`velocidade`){
                    timealstats[2] = `velocidade`;
                    velal += 0.5
                }else if(aatype[aalocal]==`forca`){
                    timealstats[2] = `forca`;
                    foral+=0.5
                }else{
                    timealstats[2] = `tecnica`;
                    tecal+=0.5
                }
    
    
                for(let o = 0 ;o < 5; o++){
                    let statusbusca = timealstats[o]
                    let atualplayer = playerlocal[o]
                    if(statusbusca==`velocidade`){
                        timealiado [o] = characterstats[atualplayer]*velal
                    }else if(statusbusca==`forca`){
                        timealiado [o] = characterstats[atualplayer]*foral
                    }else if(statusbusca==`tecnica`){
                        timealiado [o] = characterstats[atualplayer]*tecal
                    }
                }
                for(let j = 0;j < 5;j++){
                    let statusbusca = timeopstats[j]
                    let atualplayer = timeoponente[j]
                    if(statusbusca==`velocidade`){
                        timeinimigo [j] = characterstats[atualplayer]*velop
                    }else if(statusbusca==`forca`){
                        timeinimigo [j] = characterstats[atualplayer]*forop
                    }else if(statusbusca==`tecnica`){
                        timeinimigo [j] = characterstats[atualplayer]*tecop
                    }
                }
    
                if(timealiado[0]==timeinimigo[0]&&timealiado[1]==timeinimigo[1]&&timealiado[2]==timeinimigo[2]&&timealiado[3]==timeinimigo[3]&&timealiado[4]==timeinimigo[4]){
                    pontuacao = `Empate!`
                }else{
                    while(golsop < 5 || golsal < 5){
                        if(golsop >= 5 || golsal >= 5){
                            break;
                        }
                        if(timealiado[2]>timeinimigo[2]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsal +=1
                                goltimeal[2] += 1
                            }
                        }else if(timealiado[2]<timeinimigo[2]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsop +=1
                            }
                        }else{
                            let gol = parseInt(Math.random() * 2)
                            if(gol==1){
                                golsop +=1
                            }else{
                                golsal +=1
                                goltimeal[2] += 1
                            }
                        }
                        if(golsop >= 5 || golsal >= 5){
                            break;
                        }
                        if(timealiado[1]>timeinimigo[1]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsal +=1
                                goltimeal[1] += 1
                            }
                        }else if(timealiado[1]<timeinimigo[1]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsop +=1
                            }
                        }else{
                            let gol = parseInt(Math.random() * 2)
                            if(gol==1){
                                golsop +=1
                            }else{
                                golsal +=1
                                goltimeal[1] += 1
                            }
                        }
        
                        if(golsop >= 5 || golsal >= 5){
                            break;
                        }
        
                        if(timealiado[0]>timeinimigo[0]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsal +=1
                                goltimeal[0] += 1
                            }
                        }else if(timealiado[0]<timeinimigo[0]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsop +=1
                            }
                        }else{
                            let gol = parseInt(Math.random() * 2)
                            if(gol==1){
                                golsop +=1
                            }else{
                                golsal +=1
                                goltimeal[0] += 1
                            }
                        }
        
                        if(golsop >= 5 || golsal >= 5){
                            break;
                        }
        
                        if(timealiado[3]>timeinimigo[3]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsal +=1
                                goltimeal[3] += 1
                            }
                        }else if(timealiado[3]<timeinimigo[3]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsop +=1
                            }
                        }else{
                            let gol = parseInt(Math.random() * 2)
                            if(gol==1){
                                golsop +=1
                            }else{
                                golsal +=1
                                goltimeal[3] += 1
                            }
                        }
        
                        if(golsop >= 5 || golsal >= 5){
                            break;
                        }
        
                        if(timealiado[4]>timeinimigo[4]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsal +=1
                                goltimeal[4] += 1
                            }
                        }else if(timealiado[4]<timeinimigo[4]){
                            let gol = parseInt(Math.random() * 3)
                            if(gol > 0){
                                golsop +=1
                            }
                        }else{
                            let gol = parseInt(Math.random() * 2)
                            if(gol==1){
                                golsop +=1
                            }else{
                                golsal +=1
                                goltimeal[4] += 1
                            }
                        }
        
                        if(golsop >= 5 || golsal >= 5){
                            break;
                        }
                    }
                }
    
                for(let u = 0 ;u < 5; u++){
                    if(goltimeal[u]>golsmvp){
                        golsmvp = goltimeal[u]
                        mvp = u
                    }
                }
    
                if(golsal>golsop){
                    pontuacao = `Vitória`
                    dinheiro = (parseInt(Math.random() * 20))+((dificuldade*2)*golsal)+10
                    playerwins ++
                    sessionStorage.setItem("wins",playerwins)
                }else if(golsal<golsop){
                    pontuacao = `Derrota`
                    dinheiro = (parseInt(Math.random() * 10))+(dificuldade*golsal)+5
                    playerloses ++
                    sessionStorage.setItem("loses",playerloses)
                }else{
                    dinheiro = (parseInt(Math.random() * 15)+10)
                }
                let dinheiros = parseInt(sessionStorage.getItem('money'))
                dinheiros += dinheiro
                sessionStorage.setItem("money",`${dinheiros}`)
    
                let achamvp = playerlocal[mvp]
                if(mvp == 0){
                    mvpname = zagcnome[achamvp]
                }else if(mvp == 1){
                    mvpname = latcnome[achamvp]
                }else if(mvp == 2){
                    mvpname = aanome[achamvp]
                }else if(mvp == 3){
                    mvpname = latbnome[achamvp]
                }else if(mvp == 4){
                    mvpname = zagbnome[achamvp]
                }else{
                }
            }
        }
        document.getElementById("calcs").innerHTML = `
        <p>Ranking:</p><p id="ranking">Z</p><p>Dinheiro:</p><p id="cash">${sessionStorage.getItem('money')}</p>
        <p>Vitórias:</p><p id="wins">${sessionStorage.getItem('wins')}</p><p>Derrotas:</p><p id="loses">${sessionStorage.getItem('loses')}</p>  `
        document.getElementById("placar").innerHTML= `${golsal}x${golsop}`
        document.getElementById("results").innerHTML= `
        <p>Resultado:</p><p id="score">${pontuacao}</p><br>
        <p>MVP:</p><p id="entrosamento">${mvpname} ${golsmvp} Gols</p><br>
        <p>Reputação:</p><p id="rep">???</p><br>
        <p>Ganhos:</p><p id="cashmatch">${dinheiro}</p><br>
        <a href="#mainindex"><button id="conc" class="botoes">Concluir</button></a>`
        document.getElementById("categorias").innerHTML = `
        <button id="facil" class="btnt">Fácil</button>
        <button id="medio" class="btnt">Médio</button>
        <button id="dificil" class="btnt">Difícil</button>`
        document.getElementById("conc").addEventListener("click", function(){
            document.getElementById("results").innerHTML = ``
            document.getElementById("categorias").innerHTML = `
            <button id="facil" class="botoes">Fácil</button>
            <button id="medio" class="botoes">Médio</button>
            <button id="dificil" class="botoes">Difícil</button>`
            document.getElementById("dificil").addEventListener("click", function(){
                dificuldade= 3
            })
            document.getElementById("medio").addEventListener("click", function(){
                dificuldade = 2
            })
            document.getElementById("facil").addEventListener("click", function(){
                dificuldade = 0
            })
        })
    }
    dificuldade = 5
})

//FIM DO *SISTEMA BOTÕES DE PARTIDA*