import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '../components/ui/mainLayout/Layout.Main';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
