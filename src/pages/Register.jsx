
import { authHook } from "../hooks/AuthHook";

const Register = () => {
    const {createUser} = authHook();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userName = form.get('name');
        const userPhoto = form.get('photo');
        const userEmail = form.get('email');
        const userPassword = form.get('password');
        const userConfirmPassword = form.get('confirmPassword');
        console.log(userName, userPhoto, userEmail, userPassword, userConfirmPassword);

        // create user with email and password
        createUser(userEmail, userPassword)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Name" required />
                                <label className="fieldset-label">Photo</label>
                                <input name="photo" type="text" className="input" placeholder="Photo URL" required />
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" required />

                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" required />
                                <label className="fieldset-label">Confirm Password</label>
                                <input name="confirmPassword" type="password" className="input" placeholder="Password" required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;