function carregar(){
    let msg = document.getElementById('msg')
    const img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    msg.innerText = `Agora é ${hora}h ${minutos} min ${segundos} s`
    if (hora >= 0 && hora < 12){
        img.src = 'img/dia-redimensionado.jpg'
        document.body.style.background = '#f9db4a'
    } else if (hora >= 12  && hora <= 18){
        img.src = 'img/tarde-redimensionado.jpg'
        document.body.style.background = '#efb810'
    } else {
        document.body.style.background = '#03318c'
        img.src = 'img/noite-redimensionado.jpg'
    }
}
