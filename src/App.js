import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">
       <h2>THIS IS A SIMPLE REACT FORM</h2>
      </div>
       <form>
      <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Name</label>
      <input id="name" type="text" className="w-full px-4 py-2 mb-4 leading-tight border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />

      <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
      <input
        id="email" type="email" className="w-full px-4 py-2 mb-4 leading-tight border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />

      <label htmlFor="message" className="block font-medium text-gray-700 mb-2">Message</label>
      <textarea
        id="message" className="w-full px-4 py-2 mb-4 leading-tight border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
    </div>
  );
}

export default App;
