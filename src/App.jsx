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
  rock: {
    name: "Rock",
    img: "https://png.pngtree.com/png-clipart/20210228/ourmid/pngtree-beautiful-rock-in-the-river-png-png-image_2977572.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons-png.flaticon.com/512/3731/3731553.png",
  },
  scissor: {
    name: "Scissor",
    img: "https://cdn-icons-png.flaticon.com/512/541/541957.png"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computer"/> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  )
}

export default App