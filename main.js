//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면 마줬습니다
//랜덤번호가 < 유저번호 DOWN
//랜덤번호가 > 유저번호 UP
//RESET 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다 기회를 깍지않는다
//유저가 이미 입력한 숫자를 입력하면 알려준다 기회를 깍지 않는다

let computerNum = 0;
let playbutton = document.getElementById("play-button");
let userinput = document.getElementById("user-input");
let resultarea = document.getElementById("result-area");
let chancearea = document.getElementById("chance-area");
let history = []
let resetbutton = document.getElementById("reset-button");
let chances = 5;
let gameover = false;


function pickRandomNum (min, max){
computerNum = Math.floor(Math.random()*(max-min+1))+min;
console.log("정답",computerNum);
}

pickRandomNum(1,50);



playbutton.addEventListener("click",play);
resetbutton.addEventListener("click",reset);
userinput.addEventListener("focus",function(){userinput.value=""})





function play(){
  let  userValue = userinput.value;




if(userValue<1){
    resultarea.textContent="1보다 큰 값을 입력해 주세요!!!";
    return;
}

if(userValue>50){
    resultarea.textContent="50보다 작은 값을 입력해 주세요!!!";
    return;
}

if(history.includes(userValue)){
    resultarea.textContent="기존에 입력했던 값과 다른값을 입력해 주세요!!!";
return;
}

if(userValue<computerNum){
    resultarea.textContent="UP!!!";
    console.log("UP!!!");
}else if(userValue>computerNum){
    resultarea.textContent="DOWN!!!";
    console.log("DOWN!!!");
}else{
    resultarea.textContent="OK!!!";
    console.log("OK!!!")
}


history.push(userValue)



chances -- ;
//console.log("chance",chances);

if(chances<6){
    chancearea.textContent=`남은기회 : ${chances} 번`;
    }

if(chances<1){
    gameover=true;
    chancearea.textContent="GAME OVERㅜㅜ";
    }

if (gameover==true)
playbutton.disabled=true;

if (computerNum=userValue)
playbutton.disabled=true;

}




function reset(){
//user input창이 깨끗하게 정리되고
userinput.value="";
//새로운 번호가 생성되고
pickRandomNum(1,50);
//결과값이 나옵니다
resultarea.textContent="리셋되었습니다";
chancearea.textContent=chances;
}