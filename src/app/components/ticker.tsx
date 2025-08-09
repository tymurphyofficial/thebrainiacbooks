import { ITicker } from '../types';
import Ticker, { NewsTicker } from 'nice-react-ticker';

export const TickerBanner = ({ text }: ITicker) => {
	const message = `${text} ${text} ${text} ${text} ${text} ${text} ${text}`;

	return (
		<div className='tickerBanner'>
			<Ticker slideSpeed={500}>
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