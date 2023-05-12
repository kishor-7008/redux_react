import React from 'react';

class Counter extends React.Component {
  render() {
    const { counter } = this.props;

    return (
      <div>
        <h1
          style={{
            fontSize: '45px',
            fontFamily: 'sans-serif',
            textAlign: 'center',
          }}
        >
          {counter.value}
        </h1>
      </div>
    );
  }
}

export default Counter;
