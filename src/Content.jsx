import Home from './pages/Home';
import About from './pages/About';
import Createaccount from './pages/Create_account';
import Signinaccount from './pages/Signin_account';
import './Content.css';

function Content(){

    return(
        <div className='Content'>
            <Home/>
            <About/>
            <Createaccount/>
            <Signinaccount/>
            
        </div>
    )
}
export default Content;