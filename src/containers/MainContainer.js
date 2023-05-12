import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import Button from '../components/Button';
import * as counterActions from '../actions/counter';

class MainContainer extends React.Component {
  render() {
    const { counter, dispatch } = this.props;
    console.log(this.props);
    return (
      <div>
        <Counter counter={counter} />
        <Button
          type="Increment"
          handleClick={() => dispatch(counterActions.increment())}
        />
        <Button
          type="Decrement"
          handleClick={() => dispatch(counterActions.decrement())}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(MainContainer);
