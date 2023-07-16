import React, {useContext} from 'react';
import Button from '../../ui/button/Button';
import { ShopContext } from '../../../Context';
import styles from './CartItem.module.scss';

const CartItem = ({
	id,
	name,
	price,
	cartQuantity,
	...props
}) => {
	const {deleteFromCart = Function.prototype, setItemQuantity = Function.prototype} = useContext(ShopContext);

	return (
		<li className={styles['cart_item']}>
			<div className={styles['cart_item__col']}>
				<span className={styles['cart_item__name']}>{name}</span>
			</div>
			<div className={styles['cart_item__col']}>
				<span className={styles['cart_item__price']}>{price * cartQuantity}</span>
			</div>
			<div className={styles['cart_item__col']}>
				<div className={styles['cart_item__quantity']}>
					<button className={styles['cart_item__quantity_btn']} onClick={() => {setItemQuantity(id, 'decrement')}}>-</button>
					<span className={styles['cart_item__quantity_count']}>{cartQuantity}</span>
					<button className={styles['cart_item__quantity_btn']} onClick={() => {setItemQuantity(id, 'increment')}}>+</button>
				</div>
			</div>
			<div className={styles['cart_item__col']}>
				<Button text='Delete' mod='danger' onClick={() => {deleteFromCart(id)}}/>
			</div>
		</li>
	);
}


export default CartItem;