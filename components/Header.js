// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Demo Store</h1>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
            </nav>
        </header>
    );
};

export default Header;
