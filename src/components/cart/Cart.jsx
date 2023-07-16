import React, {useContext} from 'react';
import Button from '../ui/button/Button';
import CartList from './cart-list/CartList';
import { ShopContext } from '../../Context';


const Cart = () => {
	const { order, handleCartOpen = Function.prototype } = useContext(ShopContext);

	return (
		<div className='cart'>
			<Button text={order?.length ? `Cart(${order?.length})` : 'Cart'} icon='cart' style={{display: 'none'}} onClick={handleCartOpen}/>
			<CartList />
		</div>
	);
}


export default Cart;