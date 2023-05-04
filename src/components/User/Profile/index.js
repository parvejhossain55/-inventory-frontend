import { useState, useEffect } from "react";
import { getUser, updateProfile } from "../../../apiRequest";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [newPass, setNewPass] = useState("");
  const [confPass, setConfPass] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const user = await getUser();
    setUser(user);
  };

  const updateValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateUserProfile = async () => {
    await updateProfile({ ...user, newPass, confPass });
    await loadUser();
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h4>User Profile</h4>
            </div>
            <div className="card-body">
              <div class="row">
                <div className="col-12">
                  <div class="form-group">
                    <label for="firstname">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstname"
                      name="firstName"
                      value={user.firstName}
                      onChange={updateValue}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastname"
                      name="lastName"
                      value={user.lastName}
                      onChange={updateValue}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div class="form-group">
                    <label for="emailaddress">Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="emailaddress"
                      name="email"
                      value={user.email}
                      onChange={updateValue}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div class="form-group">
                    <label for="phonenumber">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      id="phonenumber"
                      name="phone"
                      value={user.phone}
                      onChange={updateValue}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button onClick={updateUserProfile} className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h4>Update Password</h4>
            </div>
            <div className="card-body">
              <div class="row">
                <div className="col-12">
                  <div class="form-group">
                    <label for="exampleInputPassword2">New Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword2"
                      placeholder="New Password"
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                      value={confPass}
                      onChange={(e) => setConfPass(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button onClick={updateUserProfile} className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
