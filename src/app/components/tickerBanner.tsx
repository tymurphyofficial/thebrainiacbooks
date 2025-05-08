import { ITickerBanner } from '../types';
import Ticker, { NewsTicker } from 'nice-react-ticker';
import moment from 'moment';

export const TickerBanner = ({ copy, date }: ITickerBanner) => {
	const now = moment();
	const release = moment(date);
	const totalHours = -moment.duration(now.diff(release)).asHours();

	const weeks = Math.floor(totalHours / 168);
	const days = Math.floor(((totalHours / 168) % 1) * 7);
	const hours = Math.floor(((((totalHours / 168) % 1) * 7) % 1) * 24);

	const msg = `${copy} in ${weeks} WEEKS ${days} DAYS ${hours} HOURS! -- `;
	const msgString = `
		${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}
		${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}
		${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}
		${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}${msg}
	`;

	return (
		<div className='tickerBanner'>
			<Ticker slideSpeed={3000}>
				<NewsTicker 
					id={1} 
					title={msgString} 
					url={''} 
					meta={''}
				/>
			</Ticker>
		</div>
	);
}