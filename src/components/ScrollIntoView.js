import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = prevProps => {
    document.querySelector('.App').classList.remove('loading');
    if (this.props.location !== prevProps.location) {
      if (!['#gyik', '#map', '#muveszitorna','#mozdulatmuveszet','#keziszeresgimnasztika','#moderntanc','#koreografia','#kezmuves','#szabadtanc'].includes(this.props.location.hash)) {
        document.querySelector('.App').scrollTop = 0;
      } else if (['#gyik', '#map', '#muveszitorna','#mozdulatmuveszet','#keziszeresgimnasztika','#moderntanc','#koreografia','#kezmuves','#szabadtanc'].includes(this.props.location.hash)) {
        document.querySelector('.App').scrollTop = document.querySelector(this.props.location.hash).offsetTop;
      }

      document.querySelector('.App').classList.add('loading');
    }
  };

  render = () => this.props.children;
}

export default withRouter(ScrollIntoView);