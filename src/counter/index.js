    import React, { Component } from 'react';
    import { connect } from 'react-redux';

    import {
        INCREMENT_COUNTER,
        DECREMENT_COUNTER,
        INCREMENT_COUNTER_ASYNC,
        DECREMENT_COUNTER_ASYNC
    } from "./ducks";

    class Counter extends Component {
        render() {
            console.log('props', this.props);
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
                        <button onClick={() => this.props.increment()}>
                            Increment
                        </button>
                        <button onClick={() => this.props.decrement()}>
                            Decrement
                        </button>
                        <button onClick={() => this.props.incrementAsync()}>
                            Increment after 1 sec
                        </button>
                        <button onClick={() => this.props.derementAsync()}>
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
            increment: () => dispatch({ type: INCREMENT_COUNTER }),
            decrement: () => dispatch({ type: DECREMENT_COUNTER }),
            incrementAsync: () => dispatch({ type: INCREMENT_COUNTER_ASYNC }),
            derementAsync: () => dispatch({ type: DECREMENT_COUNTER_ASYNC }),
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Counter);