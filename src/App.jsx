import { PureComponent } from "react";
import { connect } from "react-redux";
import { addCounter as addCounters } from "./store/features/counter";
import Home from "./pages/Home";
import WrapperCss from "./css/style";
import About from "./pages/About";

export class App extends PureComponent {
  render() {
    const { counter, addCounter } = this.props;
    return (
      <div>
        <h2>
          App counter: {counter}
        </h2>
        <button onClick={() => addCounter(8)}>+8</button>
        <WrapperCss className="app-pages">
          <Home />
          <About />
        </WrapperCss>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter
});

const mapDispatchToProps = dispatch => ({
  addCounter: counter => dispatch(addCounters(counter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
