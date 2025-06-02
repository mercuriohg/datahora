function carregar(){
    let msg = document.getElementById('msg')
    const img = document.getElementById('img')
    const data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerText = `Agora é ${hora}h ${minutos} min`
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
