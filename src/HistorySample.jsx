import React from "react";
import { useNavigate } from "react-router-dom";

const HistorySample = () => {
  let navigate = useNavigate();
  const goBack = () => {
    const confirm = window.confirm('정말 떠나시겠어요?')
    if (confirm) {
        navigate(-1);
    }
  };
  /*
  - go forward : navigate(positive number)
  - go back : navigate(negative number)

  */

  const goHome = () => {
    navigate("/");
  };
  /*
  push 문법 deprecated 됨.
  navigate 객체에 route push할 router 추가해줌.
  */

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;