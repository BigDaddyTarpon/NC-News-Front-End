import { useContext, useEffect, useState } from 'react';
import { UserContext, UserProvider } from '../contexts/UserContext';

import { getUsers } from '../utils/api';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { setUser } = useContext(UserContext);

    function handleUserClick(username) {
        setUser(username);
      }

      useEffect(() => {
        getUsers()
          .then((data) => {
            setUsers(data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setError(true);
          });
      }, []);

      if (loading) {
        return <p>loading!</p>;
      }
      if (error) {
        return <p>error!</p>;
      }

      return (
        <>
          <h2>Click on any user below to log on as that user</h2>

    <p> you are curently logged in as {user}</p>

<h3>Available Users. </h3>
          <ul>
            {users.map((user) => {
              return (
                <li key={user.username}>
                  <p
                    onClick={() => {
                      handleUserClick(user.username);
                    }}
                  >
                    Username: {user.username}
                  </p>
            
                </li>
              );
            })}
          </ul>
        </>
      );

}
export default Users;