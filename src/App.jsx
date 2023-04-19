import { PureComponent } from "react";
import { connect } from "react-redux";
import sliceReducer from "./store/features/counter";

export class App extends PureComponent {
  render() {
    const { counter, addCounter } = this.props;
    return (
      <div>
        <h2>
          App counter: {counter}
        </h2>
        <button onClick={addCounter(8)}>+8</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter
});

const mapDispatchToProps = dispatch => ({
  addCounter: counter => dispatch(sliceReducer.action.addCounter(counter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
