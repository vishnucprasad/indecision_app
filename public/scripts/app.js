'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Vishnu C Prasad'
    ),
    React.createElement(
        'p',
        null,
        'Age: 20'
    ),
    React.createElement(
        'p',
        null,
        'Location: Kanjirappally'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
