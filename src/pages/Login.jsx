
const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userEmail = form.get('email');
        const userPassword = form.get('password');
        console.log(userEmail, userPassword)
    }
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
                </div>
            </div>
        </div>
    );
};

export default Login;