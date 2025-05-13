const botaoConfete = document.getElementById("botao-confete");
const confeteUm = document.getElementById("1confete");
const confeteDois = document.getElementById("2confete");

function estourarConfetes() {
    let src1 = confeteUm.src;
    confeteUm.src = '';
    confeteUm.offsetHeight;
    confeteUm.src = src1 + '?' + new Date().getTime();

    // let src2 = confeteDois.src;
    // confeteDois.src = '';
    // confeteDois.offsetHeight;
    // confeteDois.src = src2 + '?' + new Date().getTime();
    

    
    console.log("GIF reiniciado");
}

botaoConfete.addEventListener("click", estourarConfetes)