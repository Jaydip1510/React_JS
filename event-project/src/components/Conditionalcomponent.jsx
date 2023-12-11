import React, { useState } from "react"; 

const Conditionalcomponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Welcome, User!</h1>
                    <button className="btn btn-success" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Please Login</h1>
                    <button className="btn btn-info" onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>

    )
}

export default Conditionalcomponent

