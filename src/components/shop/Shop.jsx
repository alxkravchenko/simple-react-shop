import React, { useEffect, useContext } from 'react';
import Preloader from '../preloader/Preloader';
import ProductsList from './products-list/ProductsList';
import { ShopContext } from '../../Context';

const Shop = () => {
	const { products = [], productsLoading, getProducts} = useContext(ShopContext);
	// eslint-disable-next-line
	useEffect(getProducts, []);

	return (
	productsLoading ? <Preloader/> :
	<ProductsList products={products}/>);
};

export default Shop;
