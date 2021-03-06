import React, {Component} from "react";
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import ErrorBoundry from "../Components/ErrorBoundry";
import './App.css'
import Scrolll from '../Components/Scrolll'
// import { findByTestId } from "@testing-library/react";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scrolll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scrolll>
                </div>
            );
    }
}
export default App;