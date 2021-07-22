import User from "./Components/user";
//first letter of alias must be capital like User.

// JSX
function App() {
  return <div>
    <h1>Users:</h1>
    <br></br>
    <User name="Mohammad Akib Khan" description="FSWD intern"/>
    <User name="Palak Mundra" description="IMD intern"/>
  </div>;
}

export default App;

// Props - A data that is being passed from one component to another.
// state - set of data that an indivisual component can holds.