import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import LifeCycle from "./LifeCycle";
import { useRef, useState } from "react";
// const dummyList=[
//   {
//     id: 1,
//     author: "jieun",
//     content : "hi 1",
//     emotion: 1,
//     created_date : new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "sol",
//     content : "hi 2",
//     emotion: 2,
//     created_date : new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "juhyun",
//     content : "hi 3",
//     emotion: 3,
//     created_date : new Date().getTime(),
//   },

// ];

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  //데이터 수정
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  //데이터 삭제
  const onRemove = (targetId) => {
    console.log(targetId + "가 삭제되었습니다.");
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList);
    setData([newDiaryList]);
  };

  //데이터 수정
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <LifeCycle />
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList
        diaryList={data}
        onRemove={onRemove}
        onEdit={onEdit}
      ></DiaryList>
    </div>
  );
};

export default App;
