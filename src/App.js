import {useState, React} from 'react';
import './index.scss';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>✨ Открыть окно</button>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setOpen(false)}>
            <title/>
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img alt="gif" src="https://64.media.tumblr.com/f59e05c9984808ca9f2249917db9de70/tumblr_nu3w6mwpBz1sfet3to1_500.gif" />
        </div>
      </div>
    </div>
  );
}

export default App;
