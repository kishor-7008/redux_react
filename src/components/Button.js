import React from 'react';

class Button extends React.Component {
  render() {
    const { type, handleClick } = this.props;
    const styles = {
      button: {
        display: 'inline-block',
        width: '150px',
        height: '35px',
        background: '#EFEFEF',
        outline: 'none',
        border: '0',
        textTransform: 'uppercase',
      },
      container: {
        display: 'block',
        width: '100%',
        textAlign: 'center',
        marginBottom: '20px',
      },
    };
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={handleClick}>{type}</button>
      </div>
    );
  }
}

export default Button;
