import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) {
        document.querySelector('.App').scrollTop = 0;
    }
  };

  render = () => this.props.children;
}

export default withRouter(ScrollIntoView);