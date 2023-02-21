import { Link } from 'react-router-dom';
import css from './GoBackButton.module.css';

const GoBackButton = ({ backLinkHref }) => {
  return (
    <div className={css.container}>
      <Link to={backLinkHref} className={css.link}>
        Go back
      </Link>
    </div>
  );
};

export default GoBackButton;
