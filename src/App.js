import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
//import LifeCycle from "./LifeCycle";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

//useReducer의 첫번째 인자로 사용
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

//Provider용 Context생성
export const DiarySateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  // const [data, setData] = useState([]);

  //useReducer사용
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  //async를 붙여서 동기호출
  //await은 해당코드가 끝날때까지 다음라인 실행안되는 동기 호출 키워드(async 붙은 함수에서만 사용가능)
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    //0~19인덱스까지만 잘라서 map 실행
    const initdata = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1, //0~4까지의 랜덤수를 뽑아서 정수로 내림표현 후 +1한 수.
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    dispatch({ type: "INIT", data: initdata });
  };

  useEffect(() => {
    getData();
  }, []);

  //데이터 수정
  //useCallback : 최적화함수. 두번째 인자인 배열의 값이 동일하면 메모이제이션 된 콜백을 반환. 빈배열[]을 넣을 시 mount되는 시점에 한번만 돔
  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });

    dataId.current += 1;
  }, []);

  //데이터 삭제
  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  //데이터 수정
  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  //useMemo 추가
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis; //getDiaryAnalysis가 값 형태로 바뀜

  return (
    <DiarySateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          {/* <LifeCycle /> */}
          <DiaryEditor></DiaryEditor>
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 개수 : {goodCount}</div>
          <div>기분 나쁜 일기 개수 : {badCount}</div>
          <div>기분 좋은 일기 비율 : {goodRatio}</div>
          <DiaryList></DiaryList>
        </div>
      </DiaryDispatchContext.Provider>
    </DiarySateContext.Provider>
  );
};

export default App;
