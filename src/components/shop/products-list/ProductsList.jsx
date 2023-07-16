import React from 'react';
import styles from './ProductsList.module.scss';
import Product from '../product/Product';

const ProductsList = ({ products = [], ...props }) => {

	if(!products.length) {
		return (
			<h2>Products were not found</h2>
		)
	}
	return (
		<ul className={styles['products_list']}>
			{products.map((item) => (
				<Product key={item.id} {...item} />
			))}
		</ul>
	);
};

export default ProductsList;
