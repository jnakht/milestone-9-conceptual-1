import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const {str} = useContext(AuthContext);
    return (
        <div>
            this is home {str}
        </div>
    );
};

export default Home;