import { useRef, useState } from "react";

const DiaryItem = ({
  onRemove,
  author,
  content,
  emotion,
  id,
  created_date,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false); //수정 상태인지 여부 확인할 state
  const toggleIsEdit = () => setIsEdit(!isEdit); //수정 여부 바꾸는 토글함수

  const localContentInput = useRef();

  const [localContent, setLocalContent] = useState(content); //수정내용 넣을 state

  const handleRemove = () => {
    console.log(id);
    if (window.confirm(id + "번째 일기를 정말 삭제하시겠습니까?")) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    toggleIsEdit();
    setLocalContent(content);
  };

  //수정완료 버튼 클릭 시 이벤트 핸들러
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(id + "번 째 일기를 수정하시겠습니까?")) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => {
                setLocalContent(e.target.value);
              }}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
