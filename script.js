let ColorChangeID = document.getElementById("boxchangeId");

function ColorChangeFunction(){

    let color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"); 
    SetColorChange = setInterval(()=>{
        (document.getElementById("boxchangeId")).style.color = "#" + color;

        console.log("#" + color);

    },1000)
}