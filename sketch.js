let cold=''
let click='true'
let board=document.querySelector('.board');
function createboard(size){
board.style.gridTemplateColumns=`repeat(${size},1fr)`;
board.style.gridTemplateRows=`repeat(${size},1fr)`;
for(i=0; i<size*size; i++){
    let square=document.createElement('div');
    square.addEventListener('mouseover',colorchanger)
    square.style.backgroundColor='white';
    board.insertAdjacentElement("beforeend",square);
}};
createboard(16);
function change(input){
    document.querySelector('.v').style.display='none'
    if(input>=2 && input<=100){
        createboard(input);
    }
    else{
    document.querySelector('.v').style.display='flex'

    }
}
function colorfun(color){
  cold=color;;
}
function colorchanger(){
    if(click){
    if(cold==='random'){
        this.style.backgroundColor="#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    }
    this.style.backgroundColor=cold;
}}
document.querySelector('.board').addEventListener('click',()=>{
    click=!click
})

