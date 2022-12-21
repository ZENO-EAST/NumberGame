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
let userinput = document.getElementById("user-input")


playbutton.addEventListener("click",play);


function pickRandomNum (min, max){
computerNum = Math.floor(Math.random()*(max-min+1))+min;
console.log("정답",computerNum);
}

function play(){
let userValue = userinput.value
console.log(userValue)
}

pickRandomNum(1,50);