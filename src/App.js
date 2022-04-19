import './App.css';

import AnotherComponent from './components/AnotherComponent';
import Container from './components/Container';
import FirstComponent from './components/FirstComponent';
import Fragment from './components/Fragment';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';
// comentario


function App() {
  return (
   
    <div className="App">
       {/* comentário */ }
       {console.log('testando')}
      <h2>Hello Word</h2>
      <FirstComponent />
      <AnotherComponent /><br></br>
      <Images />
      <hr></hr>
      <Hooks/>
      <br></br>
      <List />
      <br></br>
      <hr></hr>
      <RenderCond x={8}/>
      <br></br>
      <Fragment />
      <Container>
        <h1> Este é o filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
