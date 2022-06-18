# 5-4. State

- 리액트에서 Sate(상태)란?
컴포넌트가 가지는 동적인 값

- 리액트에서는 컴포넌트가 가지는 상태가 바뀌면 그 컴포넌트가 re-render(화면에서 재호출) 된다.
	> re-render가 되는 경우 : 
		1) state가 바뀌는 경우
		2) 부모한테 받는 props의 값이 바뀌는 경우
		3) 부모 컴포넌트가 re-render 되는 경우

 ![Pasted Graphic](https://user-images.githubusercontent.com/20436113/173303350-eb1ce8d3-32c6-47a1-a5d2-94eac1b5912a.png)


# 5-5. Props

Props란?
- 부모 컴포넌트에서 자식 컴포넌트로 값을 전달해주는 방식.
- 부모에서 전달해주는 값을 자식 컴포넌트에서 받을 때 props란 매개변수로 전달받음.(자바스크립트에서 view와 유사한 느낌?)

<Props 기본 예제>
[부모 컴포넌트 App.js]
 -> Counter 자식 컴포넌트에 initialValue와 a라는 변수를 넘겨줌
 
![Pasted Graphic](https://user-images.githubusercontent.com/20436113/173303555-49711150-7248-4e32-a150-a50203a0bb69.png)


[자식 컴포넌트 Counter.js]
 -> 매개변수 부분에 props 를 추가하여 값을 받아옴
 
![Pasted Graphic 1](https://user-images.githubusercontent.com/20436113/173303590-51c0c48d-9383-4906-a71b-0f4b498d971c.png)


[console창]
 -> props 안에는 initialValue와 a가 있는 것을 확인할 수 있음
 
![Pasted Graphic 2](https://user-images.githubusercontent.com/20436113/173303623-c4174d7f-cc95-4795-abd0-504f7169c2bc.png)



* 부모 컴포넌트에서 spread 형식으로 전달도 가능 *

![Pasted Graphic 3](https://user-images.githubusercontent.com/20436113/173303657-ad37aa17-6dab-494d-9b57-db1b86bb3622.png)



* 자식 컴포넌트에서 비구조화 할당으로 특정변수만 받는 것도 가능 *

![Pasted Graphic 4](https://user-images.githubusercontent.com/20436113/173303678-9f6ac9f8-0068-4a88-9045-a088e6d87f5c.png)



<props 이용 시 undefined 오류 방지 예제>

[자식 컴포넌트 Counter.js]
 >부모에서 넘겨주지 않은 undefinedValue 라는 변수를 props 로 가져오려고 할 때 24~26line과 같이 props 변수의 초기값을 지정해주면 undefined 오류를 방지할 수 있다.
 
![Pasted Graphic 5](https://user-images.githubusercontent.com/20436113/173303724-9f14ed98-c6b3-46af-8fb1-bdad889ca915.png)



<컴포넌트를 다른 컴포넌트로 props로 전달하는 예제>

[Container.js]
 > div태그에 스타일을 넣고 그 하위에 children이라는 props변수를 넣음
 
![Pasted Graphic 6](https://user-images.githubusercontent.com/20436113/173303770-21c79557-7239-412f-8de3-da8351f8a4cf.png)


[최상위 컴포넌트 App.js]
 > Container 컴포넌트 하위에 다른 컴포넌트들을 넣어서 감싸주는 형태로 만듬. Container의 하위에 있는 모든 요소가 props로 전달
 
![Pasted Graphic 7](https://user-images.githubusercontent.com/20436113/173303812-cda87e87-5d7f-4ac2-9ba5-f6d1af6d125c.png)


# 6-2. 사용자 입력 처리

[DiartEditor.js]
>이름, 내용, 저장 버튼으로 이루어진 일기장 편집 화면
>state 함수를 이용하며, 배열의 비구조화 할당 및 객체의 성질을 이용함. 
>onChange 이벤트 함수는 spread 를 이용하여 객체의 기존 값을 다시 불러오면서 e.target.name으로 바꿔야하는 속성값만 다시 변경해줌

<img width="713" alt="Pasted Graphic" src="https://user-images.githubusercontent.com/20436113/173303936-cd7ec2ae-3612-4460-8a64-21d317933f8a.png">



[구동 화면]

<img width="713" alt="1__#$!@%!#__Pasted Graphic" src="https://user-images.githubusercontent.com/20436113/173303986-497c550e-98d8-4538-bf1d-a4c6fe15b080.png">


# 6-3. useRef

useRef란?
화면에서 개발자가 DOM을 조작할 수 있도록 리액트에서 제공하는 내장함수

<저장 시 조건에 맞지 않는 태그에 포커스하는 예제>

[DiaryEditor.js]
>DOM 에 접근할 수 있는 authorInput 변수를 useRef() 함수를 이용해 선언

<img width="569" alt="Pasted Graphic" src="https://user-images.githubusercontent.com/20436113/173304089-6643d38a-bb11-47cd-93f2-d637982d9a20.png">


>포커스할 input 태그에 ref 속성으로 추가

<img width="662" alt="Pasted Graphic 1" src="https://user-images.githubusercontent.com/20436113/173304112-82b5cdc3-1999-4b1a-8b8e-126bb5c6cde0.png">


>저장 이벤트 함수에 조건 추가
>>1글자 이하일 때 focus
>>authorInput.current는 현재 authorInput이 가리키는 태그를 말함. 해당 태그의 focus()를 실행.

<img width="529" alt="Pasted Graphic 2" src="https://user-images.githubusercontent.com/20436113/173304140-32d26401-3bbe-48ef-aaee-6e000796a412.png">



[구동 화면]
>작성자에 빈칸으로 놓고 저장 시 작성자 input 태그에 파란색 박스로 포커스 됨

<img width="612" alt="Pasted Graphic 3" src="https://user-images.githubusercontent.com/20436113/173304175-0f008903-47c7-424c-91a5-820e8eb6317f.png">



# 6-4.React에서 배열 사용하기 1 - 리스트 렌더링 (조회)

배열을 이용한 리스트 렌더링
- 리액트에서 피드나 저장된 목록을 보여줄 때 많이 사용하는 방식임.

<Props 를 이용해서 바로 일기 내용을 조회하는 예제>
[최상위 컴포넌트인 App.js]
>dummyList를 만들어 DiaryList컴포넌트에 props로 전달

<img width="584" alt="Pasted Graphic" src="https://user-images.githubusercontent.com/20436113/173304305-5fca7c37-44ba-48c0-9f20-97a40a39df75.png">



[DiaryList.js]
>props로 전달받은 diaryList배열을 map 함수를 이용하여 배열 요소별로 객체의 내용을 화면에 뿌려줌

<img width="584" alt="Pasted Graphic 1" src="https://user-images.githubusercontent.com/20436113/173304322-1d4a5f43-c50b-4b3a-a3dd-b2f8475ea955.png">



[구동 화면]

<img width="630" alt="Pasted Graphic 2" src="https://user-images.githubusercontent.com/20436113/173304393-6931fd75-3ff8-4ee4-b18e-2ee01c132df2.png">




<일기 내용을 가지는 컴포넌트를 만들어 조회하는 예제>
[DiaryList.js]
>DiaryItem 컴포넌트에 it요소를 props로 넘김

<img width="630" alt="Pasted Graphic 3" src="https://user-images.githubusercontent.com/20436113/173304424-011d2b12-ea8b-4606-bfae-70c0c88b8055.png">



[DiaryItem.js]
>props로 받은 요소들을 화면에 보여줌

<img width="708" alt="Pasted Graphic 4" src="https://user-images.githubusercontent.com/20436113/173304445-f6948a48-a73e-459f-9809-3371b7bb1506.png">



[구동화면]
>style도 함께 적용

<img width="616" alt="Pasted Graphic 5" src="https://user-images.githubusercontent.com/20436113/173304467-b8d8ab5a-8020-42d2-a694-49ca55e798b6.png">


# 6-5. React에서 배열 사용하기 2 - 데이터 추가하기

- 컴포넌트 구조가 계층관계를 가질 때 “데이터” 는 아래 방향으로 흐르고, “이벤트”는 위 방향으로 올라간다. 
	> useState를 이용해 데이터를 저장하고 보여주는 화면에서 데이터는 부모 컴포넌트에서 자식 컴포넌트로 전달되고 자식 컴포넌트에서 데이터를 새로 저장하는 이벤트는 부모 컴포넌트로 전달되면서 원 데이터에 새로운 데이터가 추가되는 이벤트가 실행된다.

<useState와 useRef를 이용해 일기장 저장 및 보여주기 예제>

[App.js]
> onCreate 이벤트 함수는 일기장 편집화면인 DiaryEditor에 전달하여 이벤트 발생 시 다시 받을 수 있게 함
> data는 리스트화면인 DiaryList에 전달

![Pasted Graphic](https://user-images.githubusercontent.com/20436113/174047937-fe2d9d7f-38a2-4580-9ecf-cb84c48aaed2.png)




[DiaryEditor.js]
> prop으로 전달받은 onCreate 함수를 저장 버튼 클릭 시에 실행시킴

![Pasted Graphic 1](https://user-images.githubusercontent.com/20436113/174047969-db5c9c99-ce68-49ec-a063-c3ce6bf54382.png)




# 6-6.React에서 배열 사용하기 3 - 데이터 삭제하기

<삭제하기 버튼 누를 시 데이터 삭제 예제>

[App.js]
> targetId 를 제외한 배열을 새로 만들어 data에 저장하는 onDelete함수 작성
> onDelete 함수를 DiaryList로 전달

![Pasted Graphic](https://user-images.githubusercontent.com/20436113/174048051-fe5423d4-d50e-4937-8730-34bcb2708b4c.png)



[DiaryList.js]
> diaryList로 onDelete를 전달받고 다시 DiaryItem으로 전달

![Pasted Graphic 1](https://user-images.githubusercontent.com/20436113/174048080-776b0fe8-771a-430e-983b-173300d93719.png)



[DiaryItem.js]
>전달받은 이벤트 함수를 삭제 버튼 클릭 시에 실행하며 targetId를 매개변수로 전달

![Pasted Graphic 2](https://user-images.githubusercontent.com/20436113/174048113-e196217b-df43-4be8-b72f-4b689484624b.png)



# 6-7. React에서 배열 사용하기 4 - 데이터 수정하기

- 데이터 삭제와 마찬가지로 DiaryItem 에 이벤트를 prop으로 전달하여 이벤트 발생시켜서 데이터 수정 처리. 
- 예제에서는 데이터 수정 시 map() 을 이용함

<수정 예제> 
[DiaryItem.js]
> 3항 연산자를 이용해 수정하기 버튼 클릭 시 textarea 활성화
> prop으로 받은 onEdit 함수를 수정완료 시 실행

<img width="696" alt="Pasted Graphic" src="https://user-images.githubusercontent.com/20436113/174048192-2ebd59fe-c1de-434e-aeef-5e6c9ea93a7a.png">
<img width="696" alt="Pasted Graphic 1" src="https://user-images.githubusercontent.com/20436113/174048245-0302857b-87db-4590-8058-7a6fd034b2c2.png">




[App.js]
> onEdit 이벤트 작성 : map 을 이용해서 수정 할 요소 데이터를 처리
> onEdit 함수를 DiaryItem에 전달하기 위해 DiaryItem의 부모 컴포넌트인 DiaryList에 전달

<img width="696" alt="Pasted Graphic 2" src="https://user-images.githubusercontent.com/20436113/174048271-11c4162d-a9aa-46ef-a15f-c01535e654ae.png">


# 6-8. React Lifecycle 제어하기 - useEffect


- 리액트의 생애주기 :
	1) Mount : 화면에 나타남
	2) Update: 업데이트 , 리렌더
	3) UnMount: 화면에서 사라짐

- 리액트는 각 생애주기마다 사용할 수 있는 Method가 존재한다. 
	> Mount(ComponentDidMount), Update(ComponentDidUpdate), UnMount(ComponentWillUnmount)
- 그러나 이러한 메소드는 클래스형 컴포넌트 들에서만 사용할 수 있고 함수형 컴포넌트에서는 사용할 수가 없는데, ReactHooks 을 이용해 함수형 컴포넌트에서도 사용할 수 있다.
- React Hooks이란? 클래스형 컴포넌트에서만 사용할 수 있는 함수들을 함수형 컴포넌트에서도 사용할 수 있도록 하는 기능. 상태 관리 기능인 useState 와 레퍼 참조 기능인 useRef 등의 기능도 실제로는 함수형 컴포넌트에서 사용이 불가한데 use키워드를 붙여서 함수형 컴포넌트에서도 사용할 수 있도록 만든 ReactHooks의 한 종류임. 
	>클래스형 컴포넌트의 길어지는 코드 길이 문제, 중복 코드, 가독성 문제 등등을 해결하기 위해 등장.
- 생애주기 함수도 ReactHooks의 한 종류인 useEffect 라는 것을 이용해 함수형 컴포넌트에서 사용함.


<mount , update 함수 사용 예제>
[LifeCycle.js]
> useEffect는 매개변수로 callback 함수, 배열을 받음. 
	>> 매개변수의 배열에 있는 값이 바뀔 때마다 callback 함수를 실행함.

>배열 매개변수 삭제 시 mount 시점으로 해당 함수 실행됨
>매개변수 있을 시 update 시점으로 해당 함수 실행됨

<img width="696" alt="Pasted Graphic" src="https://user-images.githubusercontent.com/20436113/174048341-33313bfa-b9dd-4da0-8d4b-24c83d833a4d.png">
<img width="696" alt="Pasted Graphic 2" src="https://user-images.githubusercontent.com/20436113/174048369-a4d4d810-55cf-4306-81b1-5d678c2b5a54.png">



<구동화면 및 콘솔창>

<img width="955" alt="Pasted Graphic 3" src="https://user-images.githubusercontent.com/20436113/174048396-bd95ccab-d319-4e13-8fe7-5d7d9cc06422.png">



<Unmount 예제>
> unmount 시점에는 mount 형식으로 된 useEffect의 콜백함수 내 리턴함수가 실행됨

<img width="590" alt="Pasted Graphic 4" src="https://user-images.githubusercontent.com/20436113/174048445-9d1c8420-4349-495d-b8ae-d795e9a139a7.png">



# 6-9. React에서 API 호출하기


<API 호출해서 일기장 목록을 셋팅하는 예제>
[App.js]
> fetch() 함수를 통해 api 호출 후 then의 resolve 호출 부분에서 결과를 json 으로 받아옴.
> initdata 함수 선언 : json 결과를 20개까지만 가져온 후 map 을 이용해 각 요소에 접근한 후 객체로 리턴
> setData(initdata) 를 통해 결과값을 state함수로 셋팅

![Pasted Graphic 1](https://user-images.githubusercontent.com/20436113/174415410-ea2a85c7-23db-41ed-8692-090e624e9310.png)



# 6-10. 최적화 1 - useMemo

- Momoization : 이미 계산해 본 결과를 기억해 두었다가 동일한 계산을 시키면 다시 연산하지 않고 기억해두었던 데이터를 반환하는 방법.

- useMemo : 리액트에서 Memoization 을 이용한 최적화 진행 시 사용되는 리액트의 기능.
	> 매개변수로 콜백함수와 배열을 받으며, 배열의 내용이 변할 때마다 콜백함수가 실행됨

<memoization을 이용해 감정숫자별 개수를 세는 예제>
[App.js]
> memoization을 안썼을 때
>> 맨처음 setData([])를 통해 빈배열을 셋팅할 때 화면이 리렌더되면서 getDiaryAnalysis 가 호출되고, 그다음 api 호출 후 setData가 다시 호출될 때 또 한번 리렌더 되면서 getDiaryAnalysis가 호출됨.(App 컴포넌트도 하나의 함수이기 때문에 리렌더 될 때마다 전체 코드가 다시 실행됨)
>>수정버튼 클릭하여 수정 후 수정완료 시 emotion은 수정하지도 않았는데 getDiaryAnalysis가 또 호출됨

![Pasted Graphic](https://user-images.githubusercontent.com/20436113/174415429-51a9fba7-db86-4970-8b30-59b8f82fb41a.png)




[구동화면 및 콘솔]
> getDiaryAnalysis가 호출 될 때마다 찍히는 “일기 분석 시작” 텍스트가 두번씩 찍힌걸 볼 수 있음.
> 아래 4개는 처음 화면 구동 시 찍히는 2개와 일기 내용 수정 시 찍히는 2개가 합쳐진 것

![Pasted Graphic 1](https://user-images.githubusercontent.com/20436113/174415443-6b66441b-1237-43f8-9f1c-64a925a2729a.png)





[App.js]
> useMemo 적용 시
> useMemo 의 배열요소로 전달한 data.length 가 바뀔때마다 callback 함수의 분석 부분이 실행됨.
>> 수정 시에는 전체 리스트의 길이가 바뀌지 않기 때문에 굳이 분석부분(getDiaryAnalysis)이 재실행되지 않는 효율적인 코드로 바뀜.

![Pasted Graphic 2](https://user-images.githubusercontent.com/20436113/174415451-4bcff16b-85d6-4e3f-9230-20beb19ea914.png)



# 6-11. 최적화 2 - React.memo

React.memo?
- 컴포넌트는 자기의 부모컴포넌트가 re-render 될 때 자동으로 re-render가 됨. 이 때 굳이 re-render될 필요가 없는데도 무조건 re-render가 진행됨.이를 방지하기 위한 최적화 방법으로 React.memo를 사용할 수 있다.
- React.memo는 고차 컴포넌트임.
	> 고차 컴포넌트란? 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수

 [React.memo 예제]

<OptimizeTest.js>
> React.memo를 추가하면 “text”를 바꿀땐 TextView컴포넌트만 리렌더링되고, “count”가 바뀔 땐 CountView 컴포넌트만 리렌더링 됨.

![Pasted Graphic](https://user-images.githubusercontent.com/20436113/174415468-3cba354e-083e-45c4-aba9-93202cf88d5e.png)


[React.memo 객체 얕은 비교 예제]
<OptimizeTest.js>

>CounterB에서 obj는 얕은비교로 비교를 진행하기 때문에 다른 객체라고 생각해서 리렌더됨

![1__#$!@%!#__Pasted Graphic](https://user-images.githubusercontent.com/20436113/174415479-b4379fc9-2388-4501-b0c5-dbf459687cb1.png)



<구동화면 및 콘솔>

>A button 과 B button 모두 6번씩 눌렀지만 CounterA는 리렌더 되지 않고 CounterB 컴포넌트만 리렌더됨

![Pasted Graphic 1](https://user-images.githubusercontent.com/20436113/174415482-301f3408-7638-421c-a3e5-bd870199e4c0.png)





- React.memo는 아래와 같이 함수 두개를 매개변수로 가짐.그 중 areEqual 함수가 값이 변경되었는지 판단하는 비교함수. 이 함수를 이용하여 비원시 타입 자료형에 대해 얕은비교를 하지 않도록 할 수 있음.

![Pasted Graphic 2](https://user-images.githubusercontent.com/20436113/174415493-32dd3f31-6a89-4e0d-b7d5-e0bde5db31ee.png)




[areEqual 함수 예제]
<OptimizeTest.js>
> areEqual 함수를 작성하여 React.memo 매개변수로 전달
> 값만 비교하여 true/false를 반환하도록 함
>> B button을 눌러도 값이 같이 때문에 리렌더 되지 않게 됨

![Pasted Graphic 3](https://user-images.githubusercontent.com/20436113/174415495-16c79a42-4823-4911-a363-4ecfaab45c55.png)



* React.memo를 export 문에 써도 됨 *

![Pasted Graphic 4](https://user-images.githubusercontent.com/20436113/174415503-12636f2d-190f-413a-bf39-19a5d5317993.png)


# 6-12.최적화 3 - useCallback

- useCallback : 의존성 배열의 값이 바뀐지 확인하고 바뀌지 않았을 땐 메모이제이션된 콜백을 반환 
> useMemo와의 차이점 : useMemo는 memoizedValue이고 useCallback은 memoizedCallback 임.

[예제]
<App.js>
> onCreate함수가 DiaryEditor의 prop으로 전달되는데 이 때문에 DiaryEditor와 상관없는 DiaryList에서 삭제버튼을 누르고 리스트가 갱신될 때마다 DiaryEditor가 리렌더 됨.
> 이러한 비효율적 리렌더를 방지하기 위해 onCreate함수를 useCallback으로 감싸서 처리.
> 의존성 배열에 빈배열[]을 추가하게 되면 삭제버튼 클릭 시 리렌더는 막을 수 있지만 현재 상태의 값으로 빈배열[]을 기억하고 있기 때문에 일기장 새로 생성 시 기존의 리스트에 있더 일기 목록이 다 사라지는 현상이 발생.
> 콜백함수에 setData부분에 매개변수를 함수로 처리하여 data라는 현재 상태의 리스트 값을 가질 수 있도록 변경.

![Pasted Graphic](https://user-images.githubusercontent.com/20436113/174415513-fce1b3aa-83c5-4f6d-a6af-79b0b1baffd7.png)


# 6-13. 복잡한 상태 관리 로직 분리하기 - useReducer

useReducer ?
- State를 특정 조건에 따라 나누어 실행할 수 있도록 로직을 분리하게 해줌. 
- state와 유사하지만 dispatch와 reducer가 추가됨.
>> 비구조화 할당 두가지 요소 : 상태에 대한 값을 가지는 data, 조건에 따라 상태변화를 일으키는 함수인 dispatch.
>> 함수 매개변수 두가지 요소 : 조건에 따라 상태값을 다르게 반환 받는 reducer 함수, data의 초기값

<img width="379" alt="Pasted Graphic" src="https://user-images.githubusercontent.com/20436113/174415524-193665ec-4342-4777-9d20-30f7a4643b41.png">



<예제>
[App.js]
> App컴포넌트 바깥 부분에 reducer 함수 선언
> reducer 매개변수 두가지 요소 : 현재 값을 가지는 state, dispatch에서 갖고들어온 새로운 객체인 action
>>action.type에 따라 switch문을 통해 각기 다른 로직을 실행하여 리턴하도록 함.

<img width="630" alt="Pasted Graphic 1" src="https://user-images.githubusercontent.com/20436113/174415529-9e788088-8226-44ea-829e-9d1c0a4225f0.png">




> onCreate, onEdit, init, onRemove 상황에 따라 각기 다르게 dispatch 함수를 호출. 매개변수로 객체를 넣어주며 type 요소에는 switch문에서 구분할 type값을 전달.

<img width="630" alt="Pasted Graphic 2" src="https://user-images.githubusercontent.com/20436113/174415534-c85637c5-e803-4fa5-a6bf-16a4220b674a.png">
<img width="630" alt="Pasted Graphic 3" src="https://user-images.githubusercontent.com/20436113/174415543-45bc3086-e3ec-4165-ab21-476f62ae9693.png">


# 6-14. 컴포넌트 트리에 데이터 공급하기 - Context

- props driling : 최상위 컴포넌트(App)에서 데이터 및 함수를 전달할 때 트리 구조에서 최하위 컴포넌트에 전달을 하기 위해서 그 중간 컴포넌트는 관련 데이터를 사용하지 않음에도 props로 데이터를 전달받는 현상.
	> ex) DiaryItem에서 onEdit 함수를 사용하기 위해 App에서 해당 함수를 DiaryList의 prop으로 전달 후 DiaryList에서는 그대로 DiaryItem의 prop으로 전달 -> 하위컴포넌트에서 사용을 하기 위해 트리구조대로 prop이 계속해서 전해짐

- 위와 같은 현상을 방지하기 위해 리액트에서는 Provider라고 하는 데이터 공급자 역할을 생성할 수가 있음. 이 Provider는 트리 구조를 거치지 않고도 특정 컴포넌트에게 바로 데이터를 전달해줄 수 있음. 이 때 Provider가 관여하는 전체 boundary를 “Context”라고 함.

<예제>
[App.js]
> Provider 사용을 위한 Context 생성
>> DiaryStateContext: 일기장 data를 위한 Context
>> DiaryDispatchContext : 일기장 조작 함수(onCreate, onEdit, onRemove)를 위한 Context

<img width="587" alt="Pasted Graphic" src="https://user-images.githubusercontent.com/20436113/174415570-e177b6ad-24eb-4099-8332-15be050408e9.png">



> 관련 컴포넌트를 Context로 감싸서 Provider를 사용할 수 있게 함
> value 에는 하나의 데이터만 전달! : data, onCreate 등을 value에 한번에 전달하면 Provider도 컴포넌트의 한 종류이기 때문에 값이 바뀔 때마다 리렌더되고 기존에 적용한 최적화 코드들이 무효화되버림.

<img width="571" alt="Pasted Graphic 1" src="https://user-images.githubusercontent.com/20436113/174415575-f48567a0-4dc5-4924-bf1e-17e46720ec07.png">


[DiaryList.js]
> prop으로 전달받던 코드는 사라지고, useContext(콘텍스트 이름) 의 함수를 호출 해서 데이터를 전달받음

<img width="547" alt="Pasted Graphic 2" src="https://user-images.githubusercontent.com/20436113/174415579-73be3ae1-4e61-43d2-b91c-19dbc6cbad9c.png">



[DiaryItem.js]
> onRemove, onEdit 함수는 DiaryList를 거칠 필요없이 DiaryItem에서 바로 전달받아서 사용

<img width="642" alt="Pasted Graphic 3" src="https://user-images.githubusercontent.com/20436113/174415588-987c9511-645b-4be3-bf56-9b61dfc9d08b.png">
















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
