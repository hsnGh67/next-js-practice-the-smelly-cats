import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from '../components/ui/mainLayout/Layout.Main';
import store from '../store';
import{Provider} from "react-redux"
import { createWrapper} from "next-redux-wrapper"

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}

const wrapper = createWrapper(()=>store)
export default wrapper.withRedux(MyApp)
