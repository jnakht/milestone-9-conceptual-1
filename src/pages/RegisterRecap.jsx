
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../providers/AuthProvider";

const RegisterRecap = () => {
    const {createUser} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log('this is register recap');
        console.log('this is the data',data);
        // create user with email and password
        createUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    // console.log('this is the fullName: ', watch("fullName")) // watch input value by passing the name of it
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Full Name</label>
                                <input type="text" className="input" placeholder="Full Name" {...register("fullName", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.fullName && <span className='text-red-600'>This field is required</span>}
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                                <label className="fieldset-label">Image URL</label>
                                <input type="text" className="input" placeholder="Image URL" {...register("imageURL")} />
                                
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" {...register("password", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.password && <span className='text-red-600'>This field is required</span>}
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

export default RegisterRecap;