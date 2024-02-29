import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_KEY, API_URL } from './config';

export const ShopContext = createContext();

const Context = (props) => {
	const [products, setProducts] = useState([]);
	const [productsLoading, setProductsLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const getProducts = () => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((data) => data.json())
			.then((data) => {
				data.items && setProducts([...data.items.slice(0, 15)]);
				setProductsLoading(false);
			});
	};

	const notify = (name) =>
		toast(`${name} was added to cart`, { 
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 2000,
		});

	const isInOrder = (id) => {
		return order?.find((orderItem) => orderItem.id === id);
	};

	const deleteFromCart = (id) => {
		const result = order?.filter((item) => item.id !== id);
		setOrder([...result]);
	};

	const setItemQuantity = (id, type = 'increment') => {
		const result = order?.map((item) => {
			if (item.id === id) {
				const quantity = +item.cartQuantity;
				if (type === 'decrement' && quantity > 1 && !isNaN(quantity)) {
					item.cartQuantity = quantity - 1;
				} else if (type === 'decrement' && quantity === 1 && !isNaN(quantity)) {
					item.cartQuantity = quantity;
				} else if (type === 'increment' && !isNaN(quantity)) {
					item.cartQuantity = quantity + 1;
				}
				return item;
			}
			return item;
		});
		setOrder([...result]);
	};

	const addToCart = (id) => {
		const item = products?.find((product) => product.id === id);
		if (isInOrder(item.id)) {
			return false;
		} else {
			const { id, name, price } = item;
			const newItem = {
				id,
				name,
				price,
				cartQuantity: 1,
			};
			setOrder([...order, newItem]);
		}
	};

	const handleCartOpen = (e) => {
		setIsCartOpen(!isCartOpen);
	};

	const value = {
		products,
		setProducts,
		getProducts,
		productsLoading,
		setProductsLoading,
		order,
		setOrder,
		addToCart,
		deleteFromCart,
		setItemQuantity,
		isInOrder,
		isCartOpen,
		handleCartOpen,
		notify,
	};

	return (
		<ShopContext.Provider value={value}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default Context;
