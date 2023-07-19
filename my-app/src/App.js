import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

const currentYear = new Date().getFullYear();

// export const App = () => {
// 	return (
// 		<div className="App" /* Декларативный код */>
// 			<header className="App-header" /* Декларативный код */>
// 				<img src={logo} className="App-logo" alt="logo" /* Декларативный код */ />
// 				<p> Edit src/App.js and save to {/* Декларативный код */}reload. </p>
// 				<a
// 					className="App-link" /* Декларативный код */
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>
// 					Current Year: {currentYear} {/* Декларативный код */}
// 				</p>
// 			</header>
// 		</div>
// 	);
// };

export const App = () => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement('p', null, 'Edit src/App.js and save to reload.'),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, 'Current Year: ', currentYear),
		),
	);
};
