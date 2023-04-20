import store from "../store";
import { PureComponent } from "react";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrapperComponent) {
    class newComponennt extends PureComponent {
      constructor(props) {
        super(props);
        this.state = mapStateToProps(store.getState());
      }
      componentDidMount() {
        console.log("store.getState()", store.getState());
        console.log(
          "mapStateToProps(store.getState())",
          mapStateToProps(store.getState())
        );
        this.subscribe = store.subscribe(() => {
          // this.forceUpdate();
          this.setState({
            state: mapStateToProps(store.getState())
          });
        });
      }
      componentWillUnmount() {
        this.subscribe();
      }
      render() {
        const stateObj = mapStateToProps(store.getState());
        const dispatchObj = mapDispatchToProps(store.dispatch);
        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        );
      }
    }
    return newComponennt;
  };
}
