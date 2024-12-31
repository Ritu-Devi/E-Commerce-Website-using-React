import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comments";

function SinglePosts() {
    const { id } = useParams();
    const [singlePosts, setSinglePosts] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
          .then((res) => res.json())
          .then((d) => {
            setSinglePosts(d);
          });
    }, [id]);

    useEffect(() => {
      fetch(`https://dummyjson.com/users/${id}`)
          .then((res) => res.json())
          .then((data) => {
              setUser(data);
          });
  }, [id]);
    return (
      <>
      <div className="post-detail">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="post-content">
                          <div className="title">
                              <h2>{singlePosts.title}</h2>
                          </div>
                          <div className="body">
                              <p>{singlePosts.body}</p>
                          </div>
                          <div className="tags">
                              <p><strong>Tags:</strong> {singlePosts.tags?.join(", ")}</p>
                          </div>
                          <div className="reactions">
                              <p><strong>Likes:</strong> {singlePosts.reactions?.likes || 0}</p>
                              <p><strong>Dislikes:</strong> {singlePosts.reactions?.dislikes || 0}</p>
                          </div>
                          <div className="views">
                              <p><strong>Views:</strong> {singlePosts.views}</p>
                          </div>
                          <div className="user-id">
                              <p><strong>User ID:</strong> {singlePosts.userId}</p>
                          </div>
                          <div className="user-id">
                              <p><strong>Name:</strong> {user.firstName}</p>
                          </div>

                      
                          
                      </div>
                  </div>
                  <div>
                      <Comment />
                  </div>
              </div>
          </div>
      </div>
  </>
    )
}

export default SinglePosts;