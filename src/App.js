import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import GitInit from './GitInit';
import GitClone from './GitClone';
import GitStatus from './GitStatus';
import GitPull from './GitPull';
import GitAdd from './GitAdd';
import GitStash from './GitStash'
import GitCommit from './GitCommit'
import GitReset from './GitReset'
import GitPush from './GitPush'
import GitQuestion from './GitQuestion';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/GitInit/" component={GitInit} />
                    <Route path="/GitClone/" component={GitClone} />
                    <Route path="/GitStatus/" component={GitStatus} />
                    <Route path="/GitPull/" component={GitPull} />
                    <Route path="/GitAdd/" component={GitAdd} />
                    <Route path="/GitStash/" component={GitStash} />
                    <Route path="/GitCommit/" component={GitCommit} />
                    <Route path="/GitReset/" component={GitReset} />
                    <Route path="/GitPush/" component={GitPush} />
                    <Route path="/GitQuestion/" component={GitQuestion} />
                </Switch>
                </div>
            </Router>
        )
    }
}

export default App;