import React, { useContext } from 'react';
import Button from '../../ui/button/Button';
import styles from './Product.module.scss';
import { ShopContext } from '../../../Context';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Product = ({
	id,
	name,
	description,
	type: { name: typeName },
	images: { icon_background: img },
	rarity: { name: rarityName },
	price,
	...props
}) => {
	const { addToCart, isInOrder, notify } = useContext(ShopContext);

	let rarityColor;
	switch (rarityName.toLowerCase()) {
		case 'common': {
			rarityColor = 1;
			break;
		}
		case 'uncommon': {
			rarityColor = 2;
			break;
		}
		case 'rare': {
			rarityColor = 3;
			break;
		}
		case 'epic': {
			rarityColor = 4;
			break;
		}
		case 'legendary': {
			rarityColor = 5;
			break;
		}
		case 'mythic': {
			rarityColor = 6;
			break;
		}
		default: {
			rarityColor = 1;
		}
	}

	return (
		<li className={styles['product']}>
			<div className={styles['product__img_w']}>
				<img src={img} alt={name} className={styles['product__img']} />
			</div>
			<div className={styles['product__info']}>
				<h3 className={styles['product__title']}>{name}</h3>
				<span className={styles['product__descr']}>{description}</span>
			</div>
			<div className={styles['product__subinfo']}>
				<span
					className={[styles['product__rarity'], styles[`product__rarity--color${rarityColor}_mod`]].join(
						' ',
					)}
				>
					{rarityName}
				</span>
				<span className={styles['product__type']}>{typeName}</span>
			</div>
			<div className={styles['product__action']}>
				<span className={styles['product__price']}>{price}</span>
				<Button
					text={isInOrder(id) ? 'Added to cart' : 'Buy'}
					icon="money"
					disabled={isInOrder(id)}
					onClick={() => {
						addToCart(id);
						notify(name);
					}}
				/>
			</div>
		</li>
	);
};

export default Product;
