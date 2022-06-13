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
 > Container 컴포넌트 하위에 다른 컴포넌트들을 넣어서 감싸주는 형태로 만듬. Container의 하위에 있는 모든 요소가 props로 전달됨
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
