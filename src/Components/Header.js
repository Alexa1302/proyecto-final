import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/Header.module.css';

const Header = ({ isMenuOpen, toggleMenu }) => {
    return (
        <header className={styles.header}>
            <button onClick={toggleMenu} className={styles.toggleButton}>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
            <div className={styles.titleContainer}>
                <h1>FemPloy</h1>
            </div>
        </header>
    );
};

export default Header;