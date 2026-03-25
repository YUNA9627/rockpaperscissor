import { useState } from "react";
import './App.css'
import Box from './component/Box'

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 박스의 색깔(승패 결과에 따라 테두리 색이 바뀐다) 승-초, 패-빨, 비김-검

const choice = {
  initial: {
    name: "Initial",
    img: "https://www.emojiall.com/images/240/microsoft-teams/15.0/1f914.png"
  },
  rock: {
    name: "Rock",
    img: "https://www.emojiall.com/images/svg/microsoft-teams-color/270a.svg"
  },
  paper: {
    name: "Paper",
    img: "https://www.emojiall.com/images/svg/microsoft-teams-color/1f590-fe0f.svg",
  },
  scissor: {
    name: "Scissor",
    img: "https://www.emojiall.com/images/svg/microsoft-teams-color/270c-fe0f.svg"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(choice.initial);
  const [computerselect, setcomputerSelect] = useState(choice.initial);
  const [result, setResult] = useState("");
  // const [initialImage, setInitialImage] = useState(true);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoite();
    setcomputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user, computer) => {

    // user == computer 비김(tie)
    // user == rock, computer == "scissors" 이김(win)
    // user == "rock" computer == paper 짐(lose)
    // user == scissor computer == paper 이김(win)
    // user == scissors computer rock 짐
    // user == paper computer rock 이김
    // user paper computer scissors 짐

    // if(user.name == computer.name){
    //   return "tie"
    // } else if(user.name == "rock"){
    //   if(computer == "scissor"){
    //     return "win"
    //   } else {
    //     return "lose"
    //   }
    // }
    if(user.name == computer.name){
      return "tie";
    } else if(user.name == "Rock")
      return computer.name == "Scissor"? "win" : "lose";
    else if (user.name=="Scissor")
      return computer.name == "Paper"? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";

  }

  const reversResult = (result) => {
    if (result === "win") return "lose";
    if (result === "lose") return "win";
    if (result === "tie") return "tie";
  }

  const randomChoite = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 Array로 만들어주는 함수
    console.log("item array", itemArray)

    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    
    return choice[final];
  }

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerselect} result={reversResult(result)} />
      </div>
      <div className="main">
        <button className="btn" onClick={() => play("scissor")}>가위</button>
        <button className="btn" onClick={() => play("rock")}>바위</button>
        <button className="btn" onClick={() => play("paper")}>보</button>
      </div>
    </>
  )
}

export default App