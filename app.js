let colors = [];
let color = null;
const colorRgb = document.querySelector('.colorRgb');
const btnNewgame = document.querySelector('.btnNewGame');
const optionsColor = document.querySelector('.optionsColor');
const optionColor = document.querySelectorAll('.optionColor');


startGame();


btnNewgame.addEventListener('click', ()=>{
    restartGame();
})

function startGame(){
    defineSquares();
    color = chooseColor();
    colorRgb.textContent = color;
}

function defineSquares(){
    colors = [];
    for(let i=0;i<optionColor.length;i++){
        const colorGenerate = generateRgb();
        optionColor[i].style.backgroundColor = colorGenerate;
        optionColor[i].addEventListener('click', (e)=>{
           console.log(colors[i]);
            if(colors[i] === color){
                updateColors(color)
                changeColor();
                console.log('Ok');
                return;
            }
            optionColor[i].style.backgroundColor = 'transparent';
        })
        colors.push(colorGenerate);
    }
}

function updateColors(color){
    colors = [];
    colorRgb.style.color = color;
    for(i=0;i<optionColor.length;i++){
        colors.push(color);
    }
}

function chooseColor(){
    const lengthColors = colors.length - 1;
    console.log(lengthColors);
    const numberColor = Math.floor(Math.random()*lengthColors);
    return colors[numberColor];
}

function changeColor(){
    for(i=0;i<optionColor.length;i++){
        optionColor[i].style.backgroundColor = color;
    }
}

function generateRgb(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return (`rgb(${r},${g},${b})`);

}
function restartGame(){
    colors = [];
    color = null;
    colorRgb.style.color = "#fff";
    startGame();
}

