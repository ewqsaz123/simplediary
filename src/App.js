import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList=[
  {
    id: 1,
    author: "jieun",
    content : "hi 1",
    emotion: 1,
    created_date : new Date("2022-06-08 13:23:24").getTime(),
  },
  {
    id: 2,
    author: "sol",
    content : "hi 2",
    emotion: 2,
    created_date : new Date("2022-06-08 13:23:24").getTime(),
  },
  {
    id: 3,
    author: "juhyun",
    content : "hi 3",
    emotion: 3,
    created_date : new Date("2022-06-08 13:23:24").getTime(),
  },
  
];

function App() {
  return (
    <div className="App">
      <DiaryEditor></DiaryEditor>
      <DiaryList diaryList={dummyList}></DiaryList>
    </div>
  );
}

export default App;
