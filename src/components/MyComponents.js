// src/components/MyComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../store/actions';

const MyComponent = ({ count, incrementCounter, decrementCounter }) => {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    count: state.counter 
});

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
