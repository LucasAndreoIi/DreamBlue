"use strict";
let contagrana = parseFloat(sessionStorage.getItem("money"))


function contaquest(){
    for(let i=0;i<=20;i++){
        if(questsplayer[i]==`complete`){
            document.getElementById(`missao${i}`).classList.remove("quest")
            document.getElementById(`missao${i}`).classList.add('questcomplete');
        }
    }
    
}


document.getElementById("questsec").innerHTML=`
<div id="missao1" class="quest facil">
<p>Vença 1 partida no fácil ${contavitf}/1</p>
<button id="quest1">Completar</button>
</div>
<div id="missao2" class="quest facil">
<p>Vença 10 partidas no fácil ${contavitf}/10</p>
<button id="quest2">Completar</button>
</div>
<div id="missao3" class="quest medio">
<p>Vença 10 partidas no médio ${contavitm}/10</p>
<button id="quest3">Completar</button>
</div>
<div id="missao4" class="quest dificil">
<p>Vença 10 partidas no difícil ${contavitd}/10</p>
<button id="quest4">Completar</button>
</div>
<div id="missao5" class="quest facil">
<p>Marque 10 gols ${contagol}/10</p>
<button id="quest5">Completar</button>
</div>
<div id="missao6" class="quest medio">
<p>Marque 100 gols ${contagol}/100</p>
<button id="quest6">Completar</button>
</div>
<div id="missao7" class="quest dificil">
<p>Marque 1000 gols ${contagol}/1000</p>
<button id="quest7">Completar</button>
</div>
<div id="missao8" class="quest dificil">
<p>Ganhe com Kunigami e Shidou na equipe</p>
<button id="quest8">Completar</button>
</div>
<div id="missao9" class="quest dificil">
<p>Ganhe com Karasu e Otoya na equipe</p>
<button id="quest9">Completar</button>
</div>
<div id="missao10" class="quest medio">
<p>Ganhe com Nagi e Reo na equipe</p>
<button id="quest10">Completar</button>
</div>`

contaquest()


document.getElementById("quest1").addEventListener("click", function(){
    if(contavitf>=1){
        contagrana += 100
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[1] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 100 moedas!")
        contaquest()
    }
})

document.getElementById("quest2").addEventListener("click", function(){
    if(contavitf>=10){
        contagrana += 300
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[2] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 300 moedas!")
        contaquest()
    }
})

document.getElementById("quest3").addEventListener("click", function(){
    if(contavitm>=10){
        contagrana += 500
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[3] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 500 moedas!")
        contaquest()
    }
})

document.getElementById("quest4").addEventListener("click", function(){
    if(contavitd>=10){
        contagrana += 2500
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[4] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 2500 moedas!")
        contaquest()
    }
})

document.getElementById("quest5").addEventListener("click", function(){
    if(contagol>=10){
        contagrana += 100
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[5] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 100 moedas!")
        contaquest()
    }
})

document.getElementById("quest6").addEventListener("click", function(){
    if(contagol>=100){
        contagrana += 500
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[6] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 500 moedas!")
        contaquest()
    }
})

document.getElementById("quest7").addEventListener("click", function(){
    if(contagol>=1000){
        contagrana += 2500
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[7] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 2500 moedas!")
        contaquest()
    }
})


document.getElementById("quest8").addEventListener("click", function(){
    if(questsplayer[8]==`ok`){
        contagrana += 1500
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[8] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 1500 moedas!")
        contaquest()
    }
})

document.getElementById("quest9").addEventListener("click", function(){
    if(questsplayer[9]==`ok`){
        contagrana += 2000
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[9] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 2000 moedas!")
        contaquest()
    }
})

document.getElementById("quest10").addEventListener("click", function(){
    if(questsplayer[10]==`ok`){
        contagrana += 1000
        sessionStorage.setItem("money",`${contagrana}`)
        questsplayer[10] = `complete`
        sessionStorage.quests = JSON.stringify(questsplayer)
        alert("Você ganhou 1000 moedas!")
        contaquest()
    }
})