import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import MainLayout from '../components/ui/mainLayout/Layout.Main';
import store from '../store';
import{Provider, useDispatch} from "react-redux"
import { createWrapper} from "next-redux-wrapper"
import { getSession } from 'next-auth/react';
import { userAutoSignIn } from '../store/actions/user.action';
import Loading from '../components/loading/Loading';
import roles from '../database/utils/roles';

function MyApp({ Component, pageProps }) {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(async()=>{
    const session = await getSession()
    if(session){
      dispatch(userAutoSignIn(()=>setLoading(false)))
    }
    else{
      setLoading(false)
    }
  },[])
  
  return (
    <Provider store={store}>
      {
        loading?
        <Loading/>:
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      }
    </Provider>
  )
}

const wrapper = createWrapper(()=>store)
export default wrapper.withRedux(MyApp)
