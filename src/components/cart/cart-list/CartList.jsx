import React, {useContext} from 'react';
import CartItem from '../cart-item/CartItem';
import { ShopContext } from '../../../Context';
import Button from '../../ui/button/Button';
import styles from './CartList.module.scss';

const CartList = () => {

	const {order = [], handleCartOpen = Function.prototype, isCartOpen = false} = useContext(ShopContext);

	const totalPrice = order.reduce((acc, item) => {
		return acc + item.price * item.cartQuantity;
	}, 0)

	return (
		<div className={isCartOpen ? [styles['cart__w'], styles['cart__w--visible_state']].join(' ') : styles['cart__w']} >
			<div className={styles['cart__inner']}>
				<button className={styles['cart__close']} onClick={handleCartOpen} >&times;</button>
				<h3 className={styles['cart__title']}>Cart</h3>
				{
					order.length ?
					(<>
						<div className={styles['cart__info']}>
							<div className={styles['cart__info_col']}>Name</div>
							<div className={styles['cart__info_col']}>Price</div>
							<div className={styles['cart__info_col']}>Quantity</div>
							<div className={styles['cart__info_col']}></div>
						</div>
						<ul className={styles['cart_list']}>
							{
								order.map((orderItem) => (
									<CartItem key={orderItem.id} {...orderItem}/>
								))
							}
						</ul>
						<div className={styles['cart__total']}>
							<span>Total price: </span>
							<span>{totalPrice}</span>
						</div>
						<div className={styles['cart__submit']}>
							<Button text='Make a purchase (currently N\A)' disabled={true} />
						</div>
					</>) : (<div className={styles['cart__empty']}>The cart is empty</div>)
					
				}
			</div>
		</div>
	);
}


export default CartList;