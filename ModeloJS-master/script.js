function carregar(){

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var saudacao = ""
    var data = new Date()
    var hora = data.getHours()
    
    //var hora = 8

    msg.innerHTML = `Agora sao ${hora} horas, ${saudacao}.`
    
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = "manha.png"
        document.body.style.background = '#e2cd9f'
        var saudacao = "bom dia!"
        msg.innerHTML = `Agora sao ${hora} horas, ${saudacao}.`
    }
    else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = "tarde.png"
        document.body.style.background = '#b9846f'
        var saudacao = "boa tarde!"
        msg.innerHTML = `Agora sao ${hora} horas, ${saudacao}.`
    }

    else{
        //boa noite
        img.src = "noite.png"
        document.body.style.background = '#515154'
        var saudacao = "boa noite!"
        msg.innerHTML = `Agora sao ${hora} horas, ${saudacao}.`
    }
    }
