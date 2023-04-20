import { PureComponent } from "react";
import { connect } from "../hoc/connect";

export class About extends PureComponent {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>
          About counter: {counter}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter
});

const mapDispatchToProps = dispatch => ({
  // addCounter: counter => dispatch(addCounter(counter))
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
