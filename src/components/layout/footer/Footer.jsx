import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={`container ${styles['footer__container']}`}>
				<div className={styles['footer__copyright']}>© {new Date().getFullYear()} Alxkravchenko</div>
			</div>
		</footer>
	);
}


export default Footer;