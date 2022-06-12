import Form from './component/Form';
import './App.css';

const style={
  app:{
      display:'flex',
      justifyContent:'center',
      flexDirection:'Column',
      alignItems:'Center',
  }
}

function App() {
  return (
    <div style={style.app}>
      <Form/>
    </div>
  );
}

export default App;
