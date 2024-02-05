import React, {Component} from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import ScrollBox from '../components/ScrollBox';
import CardTray from '../components/CardTray';
import './App.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            robots: [],
            searchVal: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        
    }

    onSearchChange = (event) => {
        this.setState({searchVal: event.target.value });
        
    }

    render () {
        const { robots, searchVal } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes( searchVal.toLowerCase() );
        })

        return robots.length ?
        (
            <div className="tc">
                <h1 id='pageHeader' className='tc f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <ScrollBox>
                    <ErrorBoundary>
                        <CardTray cardArray={filteredRobots} />
                    </ErrorBoundary>
                </ScrollBox>
            </div>
        ) :
        <h1 className="tc">Loading</h1>;
        
    }
    
}

export default App;