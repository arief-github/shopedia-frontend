import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'reactstrap';
import { deleteUser, getAllUsers } from '../../../action/userActions';
import Error from '../../../components/Common/Error';
import Loading from '../../../components/Common/Loading';

export default function UsersList() {
  const [deletedUser, setDeleteUser] = useState(null);

  const dispatch = useDispatch();
  const getallusersstate = useSelector(state => state.getAllUsersReducer);
  const { users, loading, error } = getallusersstate;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [deletedUser]);

  const handleDelete = ({userid, username}) => {
    if(confirm(`Apakah anda yakin ingin menghapus ${username} ?`)) {
      dispatch(deleteUser(userid))
      setDeleteUser(userid)
    } else {
      alert('User Gagal Dihapus')
    }
  }

  return (
    <div>
      <h2>Users List</h2>
      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { loading ? (<Loading/>) : null }
          { error ? (<Error error="Something Went Wrong" />) : null }
          { users ? (
            users.map((user) => (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><FaTrash onClick={() => {handleDelete({userid: user._id, username: user.name})}}/></td> 
              </tr>
            ))
          ) : null }
        </tbody>
      </table>
    </div>
  )
}
