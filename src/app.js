var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Vishnu C Prasad</h1>
        <p>Age: 20</p>
        <p>Location: Kanjirappally</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);