import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        
        <nav className={styles.Navbar}>
           
            <div className={styles.navbar_content} >
                <ul className='nav-list'>
                 
                    <li className={styles.nav_item} >
                        <Link href="/SecondaryPage/AboutUs">
                        <a className='nav-link'>About</a>
                        </Link>
                    </li>
                 
                    <li className={styles.nav_item}>
                        <Link href="/SecondaryPage/Video">
                        <a className='nav-link'>Video</a>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="/SecondaryPage/Shop">
                        <a className='nav-link'>Shop</a>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="/SecondaryPage/Jobs">
                        <a className='nav-link'>Jobs</a>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="/SecondaryPage/Contact">
                        <a className='nav-link'>Contact</a>
                        </Link>
                    </li>
                 
                </ul>
            </div> 
        </nav>
        
    );
}

export default Navbar;