// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// function SingleUser() {
//     const { id } = useParams();
//     const [user, setUser] = useState({});

//     useEffect(() => {
//         fetch(`https://dummyjson.com/users/${id}`)
//           .then((res) => res.json())
//           .then((d) => {
//             setUser(d);
//           });
//     }, [id]);
//     return ( 
//     <>
//       <div className="user-detail">
//    <div className="container">
//      <div className="row">
//        <div className="col-lg-9">
//          <div className="row align-items-center user-detail-top">
//            <div className="col-md-5">
//              <div className="user-slider-user">
//                <img src={user.image} alt="user Image" />
//              </div>
//            </div>
//            <div className="col-md-7">
//              <div className="user-content">
//                <div className="title">
//                  <h2>{user.firstName} {user.maidenName} {user.lastName}</h2>
//                </div>
//                <div className="ratting">
//                  <i className="fa fa-star" />
//                  <i className="fa fa-star" />
//                  <i className="fa fa-star" />
//                  <i className="fa fa-star" />
//                  <i className="fa fa-star" />
//                </div>
//                <div className="price">
//                  {user.price} 
//                </div>
//                <div className="details">
//                  <p>
//                    {user.email}
//                  </p>
//                </div>
//                <div className="quantity">
//                  <h4>Quantity:</h4>
//                  <div className="qty">
//                    <button className="btn-minus">
//                      <i className="fa fa-minus" />
//                    </button>
//                    <input type="text" defaultValue={1} />
//                    <button className="btn-plus">
//                      <i className="fa fa-plus" />
//                    </button>
//                  </div>
//                </div>
//                <div className="action">
//                  <a href="#">
//                    <i className="fa fa-cart-plus" />
//                  </a>
//                  <a href="#">
//                    <i className="fa fa-heart" />
//                  </a>
//                  <a href="#">
//                    <i className="fa fa-search" />
//                  </a>
//                </div>
//              </div>
//            </div>
//          </div>
//          <div className="row user-detail-bottom">
//            <div className="col-lg-12">
//              <ul className="nav nav-pills nav-justified">
//                <li className="nav-item">
//                  <a
//                    className="nav-link active"
//                    data-toggle="pill"
//                    href="#description"
//                  >
//                    Description
//                  </a>
//                </li>
//                <li className="nav-item">
//                  <a
//                    className="nav-link"
//                    data-toggle="pill"
//                    href="#specification"
//                  >
//                    Specification
//                  </a>
//                </li>
//                <li className="nav-item">
//                  <a className="nav-link" data-toggle="pill" href="#reviews">
//                    Reviews (1)
//                  </a>
//                </li>
//              </ul>
//              <div className="tab-content">
//                <div id="description" className="container tab-pane active">
//                  <br />
//                  <h4>user description</h4>
//                  <p>
//                  {user.description}
//                  </p>
//                </div>
//                <div id="specification" className="container tab-pane fade">
//                  <br />
//                  <h4>user specification</h4>
//                  <ul>
//                    <li>{user.warrantyInformation}</li>
//                    <li>{user.shippingInformation}</li>
//                    <li>{user.availabilityStatus}</li>
//                  </ul>
//                </div>
//                <div id="reviews" className="container tab-pane fade">
//                  <br />
//                  <div className="reviews-submitted">
//                    <div className="reviewer">
//                    {user.title} - <span>01 Jan 2020</span>
//                    </div>
//                    <div className="ratting">
//                      <i className="fa fa-star" />
//                      <i className="fa fa-star" />
//                      <i className="fa fa-star" />
//                      <i className="fa fa-star" />
//                      <i className="fa fa-star" />
//                    </div>
//                    <p>
//                      {user.description}
//                    </p>
//                  </div>
//                  <div className="reviews-submit">
//                    <h4>Give your Review:</h4>
//                    <div className="ratting">
//                      <i className="fa fa-star-o" />
//                      <i className="fa fa-star-o" />
//                      <i className="fa fa-star-o" />
//                      <i className="fa fa-star-o" />
//                      <i className="fa fa-star-o" />
//                    </div>
//                    <div className="row form">
//                      <div className="col-sm-6">
//                        <input type="text" placeholder="Name" />
//                      </div>
//                      <div className="col-sm-6">
//                        <input type="email" placeholder="Email" />
//                      </div>
//                      <div className="col-sm-12">
//                        <textarea placeholder="Review" defaultValue={""} />
//                      </div>
//                      <div className="col-sm-12">
//                        <button>Submit</button>
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>                                                                 

//                                         </div>
//                                     </div>
//                                 </div>
                        
//                         </div>
                
//     </> 
//     );
// }

// export default SingleUser;




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function SingleUser() {
//     const { id } = useParams();
//     const [user, setUser] = useState({});

//     useEffect(() => {
//         fetch(`https://dummyjson.com/users/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setUser(data);
//             });
//     }, [id]);

//     return (
//         <>
//             <div className="user-detail">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-9">
//                             <div className="row align-items-center user-detail-top">
//                                 <div className="col-md-5">
//                                     <div className="user-slider-user">
//                                         <img src={user.image} alt="User Image" />
//                                     </div>
//                                 </div>
//                                 <div className="col-md-7">
//                                     <div className="user-content">
//                                         <div className="title">
//                                             <h2>{user.firstName} {user.maidenName} {user.lastName}</h2>
//                                         </div>
//                                         <div className="info">
//                                             <p><strong>Age:</strong> {user.age}</p>
//                                             <p><strong>Gender:</strong> {user.gender}</p>
//                                             <p><strong>Email:</strong> {user.email}</p>
//                                             <p><strong>Phone:</strong> {user.phone}</p>
//                                             <p><strong>Username:</strong> {user.username}</p>
//                                             <p><strong>Birthdate:</strong> {user.birthDate}</p>
//                                             <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
//                                             <p><strong>Height:</strong> {user.height} cm</p>
//                                             <p><strong>Weight:</strong> {user.weight} kg</p>
//                                             <p><strong>Eye Color:</strong> {user.eyeColor}</p>
//                                             <p><strong>Hair Color:</strong> {user.hair?.color}</p>
//                                             <p><strong>Hair Type:</strong> {user.hair?.type}</p>
//                                             <p><strong>IP Address:</strong> {user.ip}</p>
//                                         </div>
//                                         <div className="address">
//                                             <h4>Address:</h4>
//                                             <p>{user.address?.address}, {user.address?.city}, {user.address?.state} {user.address?.postalCode}, {user.address?.country}</p>
//                                             <p><strong>Coordinates:</strong> Lat: {user.address?.coordinates?.lat}, Lng: {user.address?.coordinates?.lng}</p>
//                                         </div>
//                                         <div className="company">
//                                             <h4>Company Information:</h4>
//                                             <p><strong>Company:</strong> {user.company?.name}</p>
//                                             <p><strong>Department:</strong> {user.company?.department}</p>
//                                             <p><strong>Title:</strong> {user.company?.title}</p>
//                                             <p><strong>Company Address:</strong> {user.company?.address?.address}, {user.company?.address?.city}, {user.company?.address?.state} {user.company?.address?.postalCode}</p>
//                                         </div>
//                                         <div className="bank-info">
//                                             <h4>Bank Information:</h4>
//                                             <p><strong>Card Type:</strong> {user.bank?.cardType}</p>
//                                             <p><strong>Card Number:</strong> {user.bank?.cardNumber}</p>
//                                             <p><strong>Card Expire:</strong> {user.bank?.cardExpire}</p>
//                                             <p><strong>Currency:</strong> {user.bank?.currency}</p>
//                                             <p><strong>IBAN:</strong> {user.bank?.iban}</p>
//                                         </div>
//                                         <div className="crypto-info">
//                                             <h4>Crypto Information:</h4>
//                                             <p><strong>Coin:</strong> {user.crypto?.coin}</p>
//                                             <p><strong>Wallet:</strong> {user.crypto?.wallet}</p>
//                                             <p><strong>Network:</strong> {user.crypto?.network}</p>
//                                         </div>
//                                         <div className="misc">
//                                             <p><strong>Role:</strong> {user.role}</p>
//                                             <p><strong>SSN:</strong> {user.ssn}</p>
//                                             <p><strong>MAC Address:</strong> {user.macAddress}</p>
//                                             <p><strong>University:</strong> {user.university}</p>
//                                             <p><strong>User Agent:</strong> {user.userAgent}</p>
//                                             <p><strong>EIN:</strong> {user.ein}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SingleUser;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleUser() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, [id]);

    return (
        <>
            <div className="user-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row align-items-center user-detail-top">
                                <div className="col-md-5">
                                    <div className="user-slider-user">
                                        <img src={user.image} alt="User Image" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="user-content">
                                        <div className="title">
                                            <h2>{user.firstName} {user.maidenName} {user.lastName}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Basic Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h4>Basic Information</h4>
                                    <p><strong>Age:</strong> {user.age}</p>
                                    <p><strong>Gender:</strong> {user.gender}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Phone:</strong> {user.phone}</p>
                                    <p><strong>Username:</strong> {user.username}</p>
                                    <p><strong>Password:</strong> {user.password}</p>
                                    <p><strong>Birthdate:</strong> {user.birthDate}</p>
                                    <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Physical Information</h4>
                                    <p><strong>Height:</strong> {user.height} cm</p>
                                    <p><strong>Weight:</strong> {user.weight} kg</p>
                                    <p><strong>Eye Color:</strong> {user.eyeColor}</p>
                                    <p><strong>Hair Color:</strong> {user.hair?.color}</p>
                                    <p><strong>Hair Type:</strong> {user.hair?.type}</p>
                                </div>
                            </div>

                            {/* Address Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h4>Address Information</h4>
                                    <p>{user.address?.address}, {user.address?.city}, {user.address?.state} {user.address?.postalCode}, {user.address?.country}</p>
                                    <p><strong>Coordinates:</strong> Lat: {user.address?.coordinates?.lat}, Lng: {user.address?.coordinates?.lng}</p>
                                </div>
                            </div>

                            {/* Company Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h4>Company Information</h4>
                                    <p><strong>Company:</strong> {user.company?.name}</p>
                                    <p><strong>Department:</strong> {user.company?.department}</p>
                                    <p><strong>Title:</strong> {user.company?.title}</p>
                                    <p><strong>Company Address:</strong> {user.company?.address?.address}, {user.company?.address?.city}, {user.company?.address?.state} {user.company?.address?.postalCode}</p>
                                </div>
                            </div>

                            {/* Bank Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h4>Bank Information</h4>
                                    <p><strong>Card Type:</strong> {user.bank?.cardType}</p>
                                    <p><strong>Card Number:</strong> {user.bank?.cardNumber}</p>
                                    <p><strong>Card Expire:</strong> {user.bank?.cardExpire}</p>
                                    <p><strong>Currency:</strong> {user.bank?.currency}</p>
                                    <p><strong>IBAN:</strong> {user.bank?.iban}</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Crypto Information</h4>
                                    <p><strong>Coin:</strong> {user.crypto?.coin}</p>
                                    <p><strong>Wallet:</strong> {user.crypto?.wallet}</p>
                                    <p><strong>Network:</strong> {user.crypto?.network}</p>
                                </div>
                            </div>

                            {/* Miscellaneous Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h4>Miscellaneous Information</h4>
                                    <p><strong>Role:</strong> {user.role}</p>
                                    <p><strong>SSN:</strong> {user.ssn}</p>
                                    <p><strong>MAC Address:</strong> {user.macAddress}</p>
                                    <p><strong>University:</strong> {user.university}</p>
                                    <p><strong>User Agent:</strong> {user.userAgent}</p>
                                    <p><strong>EIN:</strong> {user.ein}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleUser;
