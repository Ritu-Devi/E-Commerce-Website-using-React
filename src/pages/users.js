import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => {
            setUsers(data.users);
        });
    }, []);

    console.log(users);

    return ( 
        <>

        <div className="user-view">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="user-search">
                                            <input type="text" placeholder="Search Users" />
                                            <button>
                                                <i className="fa fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {users.map((user) => (
                                <div key={user.id} className="col-lg-4">
                                    <div className="user-item">
                                        <div className="user-image">
                                        <Link to={`/singleUser/${user.id}`}>
                                              <img src={user.image} alt={user.title} />
                                            </Link>
                                        </div>
                                        <div className="user-content">
                                            <div className="title">
                                                <a href="#">{user.firstName} {user.lastName} {user.maidenName}</a>
                                            </div>
                                            <div className="age">
                                                <strong>Age:</strong> {user.age}
                                            </div>
                                            <div className="email">
                                                <strong>Email:</strong> {user.email}
                                            </div>
                                            <div className="phone">
                                                <strong>Phone:</strong> {user.phone}
                                            </div>
                                            <div className="birthdate">
                                                <strong>Date of Birth:</strong> {user.birthDate}
                                            </div>
                                            <div className="address">
                                                <strong>Address:</strong> 
                                                <p>{user.address.address}, {user.address.city}, {user.address.state}</p>
                                                <p>Postal Code: {user.address.postalCode}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Users;
