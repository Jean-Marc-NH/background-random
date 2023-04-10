const aleatorio = document.querySelector(".click");
const cuerpo = document.querySelector("body");
const code = document.querySelector(".hexa");

aleatorio.addEventListener("click", (e)=>{
    cambiar();
})


const cambiar = () =>{
    r1 = Math.floor(Math.random()*1000)%256;
    g1 = Math.floor(Math.random()*1000)%256;
    b1 = Math.floor(Math.random()*1000)%256;
    r2 = Math.floor(Math.random()*1000)%256;
    g2 = Math.floor(Math.random()*1000)%256;
    b2 = Math.floor(Math.random()*1000)%256;

    deg = (Math.floor(Math.random()*100)%36) * 10;

    random = Math.floor(Math.random()*100)%3;

    if(random == 1){
        cuerpo.style.background = `linear-gradient(${deg}deg, rgb(${r1}, ${g1}, ${b1}) 0%, rgb(${r2}, ${g2}, ${b2}) 100%)`;
        code.innerHTML = `background-color: <b class="white">linear-gradient(${deg}deg, rgb(${r1}, ${g1}, ${b1}) 0%, rgb(${r2}, ${g2}, ${b2}) 100%)</b>;`;
    }else if(random == 2){
        cuerpo.style.background = `radial-gradient(circle, rgb(${r1}, ${g1}, ${b1}) 0%, rgb(${r2}, ${g2}, ${b2}) 100%)`;
        code.innerHTML = `background-color: <b class="white">radial-gradient(circle, rgb(${r1}, ${g1}, ${b1}) 0%, rgb(${r2}, ${g2}, ${b2}) 100%)</b>;`;
    }else{
        cuerpo.style.background = `#${colorToHex(r1)+colorToHex(g1)+colorToHex(b1)}`;
        code.innerHTML = `background-color: <b class="white">#${colorToHex(r1)+colorToHex(g1)+colorToHex(b1)}</b>;`;
    }

    console.group("valores");
    console.log(random);
    console.group("valores-g1");
    console.log(r1);
    console.log(g1);
    console.log(b1);
    console.groupEnd();
    console.group("valores-g2");
    console.log(r2);
    console.log(g2);
    console.log(b2);
    console.groupEnd();
    console.groupEnd();

}

function colorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}