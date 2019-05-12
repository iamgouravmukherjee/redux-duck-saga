    import React, { Component } from 'react';
    import { connect } from 'react-redux';

    import {
        INCREMENT,
        DECREMENT,
        INCREMENT_ASYNC,
        DECREMENT_ASYNC,
    } from "./ducks";

    class Counter extends Component {
        render() {
            console.log('[render called] props', this.props);
            return (
                <div
                    style={{
                        display: 'flex',
                        width: '100vw',
                        height: '100vh',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <div>
                        <button onClick={() => this.props.increment(10)}>
                            Increment
                        </button>
                        <button onClick={() => this.props.decrement(10)}>
                            Decrement
                        </button>
                        <button onClick={() => this.props.incrementAsync(10)}>
                            Increment after 1 sec
                        </button>
                        <button onClick={() => this.props.derementAsync(10)}>
                            Decrement after 1 sec
                        </button>
                    </div>
                    <div>{this.props.count}</div>
                </div>
            )
        }
    }

    const mapStateToProps = (state) => {
        return { count: state.count }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            // increment: (payload) => dispatch({ type: INCREMENT_COUNTER, payload }),
            increment: (payload) => dispatch(INCREMENT(payload)),
            decrement: (payload) => dispatch(DECREMENT(payload)),
            incrementAsync: (payload) => dispatch(INCREMENT_ASYNC(payload)),
            derementAsync: (payload) => dispatch(DECREMENT_ASYNC(payload))
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Counter);