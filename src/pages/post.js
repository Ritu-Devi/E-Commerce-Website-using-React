import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Post() {
const [posts,setPosts]=useState([]);

useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((d) => {
        setPosts(d.posts);
      });
}, []);

    return ( 
        <>
        <>
      <div className="product-view">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="product-search">
                        <input type="text" placeholder="Search" />
                        <button>
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-short">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Product short by
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              Newest
                            </a>
                            <a href="#" className="dropdown-item">
                              Popular
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {posts.map((ty) => (
                  <div key={ty.id} className="col-lg-4">
                    <div className="product-item">
                    <Link to={`/singlePosts/${ty.id}`}>
                          <p>{ty.title}</p>
                        </Link>
                     
                      </div>
                      <div className="product-content">
                        <div className="title">
                          <a href="#">{ty.title}</a>
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

        </>
     );
}

export default Post;