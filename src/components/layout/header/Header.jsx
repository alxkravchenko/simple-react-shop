import React from 'react';
import Cart from '../../cart/Cart';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles['header']}>
			<div className={`container ${styles['header__container']}`}>
				<a href="https://github.com/alxkravchenko/simple-react-shop" rel='noreferrer' className={styles['header__logo']} title='logo'>
					React shop
				</a>
				<nav className={styles['header_nav']}>
					<ul className={styles['header_nav__list']}>
						<li className={styles['header_nav__item']}>
							<a href="https://github.com/alxkravchenko/simple-react-shop" target='_blank' rel='noreferrer' className={styles['header_nav__link']}>Repo</a>
						</li>
					</ul>
				</nav>
				<Cart />
			</div>
		</header>
	);
}


export default Header;