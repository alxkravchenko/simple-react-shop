import React from 'react';
import styles from './Button.module.scss';
import { useIcon } from '../../../hooks/hooks';

const Button = ({
	text = 'Click',
	tag = 'button',
	mod = 'primary',
	link,
	style = null,
	icon = '',
	onClick = Function.prototype,
	disabled = false,
	...props
}) => {
	const handleClick = () => {
		// назначаем событие на кнопку полученное из пропсов.
		onClick();
	};

	return (
		<button
			className={[styles['btn'], styles[`btn--${mod}_mod`]].join(' ')}
			style={props.style}
			onClick={handleClick}
			disabled={disabled}
		>
			{useIcon(icon)}
			<span>{text}</span>
		</button>
	);
};

export default Button;
