import './App.css';
import Header  from './components/Header';
import Card from './components/Card';
import Search from './components/Search';
function App() {

  return (
    <>
      <Header/>
      {/* <div className="container">
       {keyboardData.map((data) => {
         return <Card name={data.name} img={data.img} />;
        })}
      </div> */}
      <Search/>
      </>
  );
}

export default App;

/**
 * 
 * react-fiber https://www.google.com/search?q=react+fiber&oq=react+fiber&aqs=chrome..69i57.5070j0j4&sourceid=chrome&ie=UTF-8
 * difference b/t map and foreach https://www.geeksforgeeks.org/difference-between-foreach-and-map-loop-in-javascript/
 * confg driven ui https://iamrajatsingh1.medium.com/config-driven-ui-c8e93b730993
 * optional chaing https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * 
*/