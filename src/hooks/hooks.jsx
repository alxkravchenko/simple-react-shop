import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';


const useIcon = (iconName) => {
	switch (iconName) {
		case 'bag': {
			return <BiShoppingBag />
		}
		case 'money': {
			return <FaMoneyBillWave />
		}
		case 'cart': {
			return <FaShoppingCart />
		}
		default: {
			return null;
		}
	}
}

export {
	useIcon,
}