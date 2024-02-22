import '../styles/globals.css';
import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import { store } from '../store';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {

  // const router = useRouter();
  // const {pathname} = router;
    
    return (
      <Provider store={store}>
      {/* {
          pathname === '/login'
        ?
          <Component {...pageProps} />
        : */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
      {/* } */}
      </Provider>
    )
}