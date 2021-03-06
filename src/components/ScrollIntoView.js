import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = prevProps => {
    document.querySelector('.App').classList.remove('loading');
    if (this.props.location !== prevProps.location) {
      if (this.props.location.hash !== '#gyik' && this.props.location.hash !== '#map') {
        document.querySelector('.App').scrollTop = 0;
      } else if (this.props.location.hash === '#gyik') {
        document.querySelector('.App').scrollTop = document.querySelector('#gyik').offsetTop;
      } else if (this.props.location.hash === '#map') {
        document.querySelector('.App').scrollTop = document.querySelector('#map').offsetTop;
      }
      document.querySelector('.App').classList.add('loading');
    }
  };

  render = () => this.props.children;
}

export default withRouter(ScrollIntoView);