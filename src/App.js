import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/GitInit/">GitInit</Link>
                    </li>
                    <li>
                        <Link to="/GitClone/">GitClone</Link>
                    </li>
                    <li>
                        <Link to="/GitStatus/">GitStatus</Link>
                    </li>
                    <li>
                        <Link to="/GitPull/">GitPull</Link>
                    </li>
                    <li>
                        <Link to="/GitAdd/">GitAdd</Link>
                    </li>
                    <li>
                        <Link to="/GitStash/">GitStash</Link>
                    </li>
                    <li>
                        <Link to="/GitCommit/">GitCommit</Link>
                    </li>
                    <li>
                        <Link to="/GitReset/">GitReset</Link>
                    </li>
                    <li>
                        <Link to="/GitPush/">GitPush</Link>
                    </li>
                    <li>
                        <Link to="/GitQuestion/">GotQuestions</Link>
                    </li>
                    </ul>
                </nav>
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