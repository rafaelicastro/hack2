import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from './Fonts';

import { ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const fonts = {
// 	...chakraTheme.fonts,
// 	body: `MonacoB`,
// 	heading: `MonacoB`
// }

// const theme = {
// 	styles: {
// 		global: {
// 			'html, body': {
// 				// bg: '#FEFFEF',
// 				bg: 'rgb(252, 247, 229)',
// 				fontFamily: 'MonacoB', 
// 				// use terminal font
// 			}
// 		}
// 	}
// }

const config = {
	initalColorMode: 'light',
	useSystemColorMode: true,
}

const theme = extendTheme({
	config,
	fonts: {
		heading: `'Source Code Pro', sans-serif`,
		body: `'Source Code Pro', sans-serif`
	},
})

root.render( 
//	<React.StrictMode>
		<ChakraProvider theme={theme}>
		  <Fonts />
		  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
			    <HashRouter basename={"/"}>
					<App />
			    </HashRouter>
		</ChakraProvider>
//	</React.StrictMode>
);
