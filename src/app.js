const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer.',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        {app.options.length > 0 ? 'Here are your options' : 'No options'}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'Vishnu C Prasad',
    age: 20,
    location: 'Kanjirappally'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

let count = 0;

const addOne = () => {
    console.log('addOne');
};

const minusOne = () => {
    console.log('minusOne');
};

const reset = () => {
    console.log('Reset');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+</button>
        <button onClick={minusOne}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);