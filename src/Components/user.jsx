import React, { useState, useEffect } from "react";

// Functional Component 

const User = (props) => {

    const [planet, setPlanet] = useState("earth");

    //componentDidMount
    useEffect(() => {
        // setPlanet("Eden"); statically updating state
        console.log("component mounting");

        return console.log("Bye Bye");
        //componentDidUnmount
    }, []);
    // we passed empty array as a second array so that it won't be executed again after initial render which will save time.

    // componentDidUpdate
    // shouldComponentUpdate
    useEffect(
        // first argument function
        () => {
            console.log("Planet changes");
        },
        // second argument dependency
        [planet]);

    return (
        <div>
            <h1>
                {props.name}
                {/* for javs Script code we need to wrap our code in curly braces.  */}
            </h1>
            <p>
                {props.description}
            </p>
            <button onClick={() => setPlanet("pluto")}>{planet}</button>
        </div>
    );
};

export default User;

/* Class Component

class User extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            number: 892384347,
        };
        console.log("Hey I'm from constructor");
    }

     componentDidMount() {
        console.log("componentDidMount state changed");
        this.setState({number: 123456789});
     }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("I'm from getDerivedStateFromProps");
    //     return {number:6264204384};
    // }

    shouldComponentUpdate(nextProp, nextState) {
        console.log("from shouldComponentUpdate");
        console.log(
            {
            nextProp,
            nextState,
            }
        );
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log("form getSnapshotBeforeUpdate");
        console.log({prevProp,prevState});
        return true;
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {

        //Component Life-Cycle Methods

        console.log("Hey I'm from render");

        return (
            <div>
               <h1>{this.props.name}</h1>
               <p>{this.props.description}</p>
               <h3>{this.state.number}</h3>
            </div>
        );
    }

}

export default User;

*/