'use client'
import { ITicker } from '../types';
import Ticker, { NewsTicker } from 'nice-react-ticker';
import { useEffect, useState } from 'react';

export const TickerBanner = ({ text }: ITicker) => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		setMessage(`${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- ${text} --- `);
	}, []);

	return (
		<div className='tickerBanner h-[34px] bg-black'>
			<Ticker slideSpeed={1200}>
				<NewsTicker 
					id={1} 
					title={message} 
					url={''} 
					meta={''}
				/>
			</Ticker>
		</div>
	);
}