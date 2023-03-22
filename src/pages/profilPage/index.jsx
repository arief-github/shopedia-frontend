import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../action/userActions";
import Error from "../../components/Common/Error";
import Loading from "../../components/Common/Loading";
import Success from "../../components/Common/Success";

export default function ProfilePage() {
  const loginstate = useSelector((state) => state.loginReducer);
  const updateuserstate = useSelector((state) => state.updateReducer);
  const currentUser = loginstate.currentUser;
  const { loading, success, error } = updateuserstate;
  const dispatch = useDispatch();
  const [name, setname] = useState(currentUser.name);
  const [email, setemail] = useState(currentUser.email);
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const updateUserHandler = (e) => {
    e.preventDefault();

    if (password === cpassword) {
      const updateduser = {
        name: name,
        email: email,
        password: password,
      };

      dispatch(updateUser(currentUser._id, updateduser));
    } else {
      alert("Password Not Matched");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
        <div>
          <h2 className="text-center m-3">Update</h2>

          {loading ? <Loading /> : null}
          {error ? <Error error="Something Went Wrong" /> : null}
          {success ? (
            <Success success="Your Detail Updated success, Please Re-Login" />
          ) : null}

          <form onSubmit={updateUserHandler}>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              name="name"
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              className="form-control"
              name="email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <input
              type="password"
              placeholder="password"
              className="form-control"
              name="password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              required
              value={cpassword}
              onChange={(e) => setcpassword(e.target.value)}
            />

            <div className="text-right">
              <button type="submit" className="btn mt-3">
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
