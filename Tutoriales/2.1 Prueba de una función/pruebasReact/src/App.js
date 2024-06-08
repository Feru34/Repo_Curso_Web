import './App.css';
import { Container} from 'react-bootstrap';
import Titulo from './components/titulo.js';
import Checkbox from './components/checkbox.js';
import Like from './components/like.js';

function App() {
  return (
    <Container>
      <Titulo/>
      <Checkbox/>
      <Like/>
    </Container>
  );
}

export default App;
