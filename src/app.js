var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer.'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: 'Vishnu C Prasad',
    age: 20,
    location: 'Kanjirappally'
};

var templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);