import logo from './logo.svg';
import './App.css';

function App() {

    let posts = '글 내용입니다';
    
    function 함수() {
        return 100;
    }

  return (
    <div className="App">
      <div className="black-nav">
          <div className={posts} style={{color:'red', fontSize : '30px'}}>개발</div>
      </div>
        <img src={logo} alt="로고"/>
        <h4>{posts}</h4>
        <h4>{함수()}</h4>
    </div>
  );
}

export default App;
