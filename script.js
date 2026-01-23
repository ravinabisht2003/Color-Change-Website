let ColorChangeID = document.getElementById("boxchangeId");

function ColorChangeFunction(){

    
    SetColorChange = setInterval(()=>{

        let color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"); 
        let Bg = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"); 
        ColorChangeID.style.color = "#" + color;
        ColorChangeID.style.backgroundColor = "#" + Bg;

        },1000)
}

function stopColorChangeFunction(){
    clearInterval(SetColorChange);
    SetColorChange = null;
}