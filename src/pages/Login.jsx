import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {user, userLogin, facebookLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location on login page: ', location);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userEmail = form.get('email');
        const userPassword = form.get('password');
        console.log(userEmail, userPassword);

        // login with email and password
        userLogin(userEmail, userPassword)
        .then(result => {
          console.log(result.user);
          // navigate to state or homepage
        //   navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
          console.error(error);
        })
        

    };
    const handleFacebookLogin = () => {
        facebookLogin()
        .then(result => {
            console.log(result.user);
            // navigate to state or homepage
        //   navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    useEffect( () => {
        if (user) {
            navigate(location?.state ? location.state : '/');
        }
        // 
    } ,[user])

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                
                               
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" required />

                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" required />
                                
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </form>
                    <button onClick={handleFacebookLogin} className="btn btn-neutral mt-4">Facebook Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;