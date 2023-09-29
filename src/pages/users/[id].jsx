import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Info = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://reqres.in/api/users/${router.query.id}`)
        .then(response => {
          setUser(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  }, [router.query.id]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <img src={user.avatar} className="card-img-top" alt="User Avatar" />
              <div className="card-body">
                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <Link href="/" legacyBehavior>
              <a className="btn btn-primary">Back to Home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
