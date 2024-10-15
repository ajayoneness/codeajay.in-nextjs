import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';



function MyApp({ Component, pageProps }) {
  return (
    <>
    
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      
      <Header/>
      <Component {...pageProps} /> 
      <Footer/>
      
    </>
  );
}

export default MyApp;
