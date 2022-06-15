// import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';
import Friend from './components/Friend';
import Name from './components/Name';
import StarRating from './components/StarRating';
import Card from './components/Card';
import { friends } from './data';
import { addresses } from './data';
import { movies } from './data';
import { staffMembers } from './data';
import Item from './components/Item';
import TodoItem from './components/TodoItem';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           I love my wife so much!!!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const name = 'Brandon'
  const last = 'Drayton'

  const names = [
    'Bilbo',
    'Frodo',
    'Samwise',
    'Merry',
    'Pipping',
  ]



  return (
    <div className="App">
      <h1>Hello, my name is {name} {last}</h1>
      {/* <Greeter name="Brandon" bg="blue" number={10} />
      <Greeter name="Drayton" />
      <Greeter name="Thy" />
      <Greeter name="Douglas" />
      <Greeter name="Laura" /> */}
      <ul>
        <TodoItem task="Review user data" age={3} />
        <TodoItem task="Clear database cache" age={7} />
        <TodoItem task="Monitor network traffic" age={0} />
        <TodoItem task="Buy coffee" age={9} />
      </ul>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
      {friends.map((friend, i) => {
        return <Friend key={i} firstName={friend} />
      })}
      {addresses.map((address, i) => {
        return <Name key={i} firstName={address.first} lastName={address.last} />
      })}
      {movies.map((movie, i) => {
        return <StarRating key={movie.id} title={movie.title} releaseDate={movie.releaseDate} StarRating={movie.rating} />
      })}
      {staffMembers.map((member, i) => {
        return <Card key={i} name={member.name.first + " " + member.name.last} firstName={member.name.first} lastName={member.name.last} title={member.title} />
      })}
      <Friend firstName="John" lastName="Morales" />
      <Name firstName="John" lastName="Morales" />
      <StarRating StarRating={19} />
      <Card firstName="John" lastName="Miles" title="Legend" />
    </div>
  );
}

export default App;
