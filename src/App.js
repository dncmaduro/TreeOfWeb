import './App.scss';
import Sidebar from './component/Sidebar';
import Page from './component/Page'

function App() {
  return (
    <div className="App">
      <div className='app-box'>
        <div className="app-sidebar">
          <Sidebar />
        </div>
        <div className='app-page'>
          <Page />
        </div>
      </div>
    </div>
  );
}

export default App;
