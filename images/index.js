let changement = document.querySelector(".btn");

const chmeng = ()=>{
    let numeroJoeur1 = Math.floor(Math.random()*6)+1;
    let chargementImg = "dice" + numeroJoeur1 +".png";
    let changerSource = "images/"+chargementImg;

    document.querySelector(".img1").setAttribute("src",changerSource);

    let numeroJoeur2 = Math.floor(Math.random()*6)+1;

    let changerSource1 = "images/"+"dice" + numeroJoeur2 +".png";
    document.querySelector(".img2").setAttribute("src", changerSource1);

    if(numeroJoeur1 > numeroJoeur2)
    {
        document.querySelector("h1").innerHTML = "π Player 1 WINππ";
    }
    else if(numeroJoeur2 > numeroJoeur1)
    {
        document.querySelector("h1").innerHTML = "π Player 2 WINππ";
    }
    else
    {
        document.querySelector("h1").innerHTML = "π EgalitΓ©";
    }

}
changement.addEventListener('click',chmeng);


