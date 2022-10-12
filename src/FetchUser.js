import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "./redux/userReducer";

function FetchUser(props) {
  return (
    <div className="containerDiv">
      <button onClick={() => props.fetchUser()}>Fetch Data</button>
      {props.userData.loading && <h5>Loading ...</h5>}
      {props.userData.users.length > 0 && (
        <>
          <p>Following are the Users</p>
          <table>
            <tr>
              <th>Username</th>
              <th>Mail</th>
              <th>Company</th>
            </tr>

            {props.userData.users.map((item, ind) => {
              return (
                <tr>
                  <td key={ind}>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.company.name}</td>
                </tr>
              );
            })}
          </table>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchUser);
