import React, { useEffect, useState } from "react";

// //컴포넌트의 함수부분을 React.memo로 감싸면 컴포넌트 리렌더링 시 메모이제이션을 활용하여 렌더링 횟수를 줄임.
// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log("update :: count : " + count);
//   });
//   return <div>{count}</div>;
// });

// //컴포넌트의 함수부분을 React.memo로 감싸면 컴포넌트 리렌더링 시 메모이제이션을 활용하여 렌더링 횟수를 줄임.
// const TextView = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log("update :: text : " + text);
//   });
//   return <div>{text}</div>;
// });

//버튼을 클릭해도 count 값이 똑같아서 리렌더 되지 않음
const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log("CounterA Update -- count : " + count);
  });
  return <div>{count}</div>;
});

//객체 형식의 obj는 그안의 count 값이 동일해도 다른 객체로 새로 생성되기 때문에 버튼 클릭때마다 리렌더됨(obj를 얕은비교로 비교하기 때문)
const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log("CounterB Update -- count : " + obj.count);
  });
  return <div>{obj.count}</div>;
});

//obj의 count값 자체를 비교하여 true/false를 반환하는 areEqual 함수 작성
const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};

//React.memo의 매개변수로 CounterB와 areEqual 을 전달 ( => 해당 함수에서는 이제 얕은 비교를 하지 않음 )
const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
