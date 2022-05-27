import './App.scss';
import Menu from './components/Menu';
import Main from './components/Main';
import Join from './components/Join';
import Discover from './components/Discover';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {

  return (
    <>

      <Row><Menu /></Row>
      <Row><Main/></Row>
      <Row><Discover /></Row>
      <Row><Join /></Row>

    </>
  );
}

export default App;
