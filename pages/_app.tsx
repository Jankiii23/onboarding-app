
// import { Provider } from 'react-redux';
// import { store } from '../store';
// import type { AppProps } from 'next/app';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default MyApp;

// import { store } from '../store';  // This should be the correct path to 'index.ts' in the store folder
// import { Provider } from 'react-redux';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default MyApp;

// import type { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
// import { store } from '@/redux/store';

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import { join } from 'path';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}


