import elderRunes from './data/elder-runes.json';

import List from './components/List';

const App = () => (
  <div className="container mx-auto p-2">
    <div className="my-4">
      <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 text-3xl">
        {elderRunes.title}<br />
        {elderRunes.period}
      </span>
    </div>
    <List />
  </div>
);

export default App
