// import logo from './logo.svg'; logo 이미지 지웠기 때문에 주석 처리 or 제거 
import './App.css';
import Hello from './component/Hello';
 
// 함수형태의 컴포넌트, 즉 함수형 컴포넌트를 생성 
function App() {
  const name = "mike";
  const user ={
      name : "minsu"
    }
    const naver={
      name :"네이버",
      url : "https://naver.com"
    }
  return (
    // react에서는 html의 Class를 ClassName으로 나타낸다. 
    <div className="App"> 
       <h1
        style={{
          color : "red",
          backgroundColor : "green",
          }}
          >
        Welcome, {name}, <p>link </p>
        <p> {user.name}</p>
        <a href={naver.url}>{naver.name} </a>
        
          {/*
          <p> {user}</p>로 객체 자체를 JSX에서 직접 출력하려고 하면 오류가 발생합니다.
          */}
        <Hello/>
       </h1>
    </div>
  );
}

export default App;
