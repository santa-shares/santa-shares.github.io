import React from 'react'

const Leaderboard = ({ users }) => {
    return (
        <div class="container">
            <h3>Leaderboard</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Cash</th>
                    </tr>
                </thead>
                <tbody>
                   {users.map((user) => (
                   <tr>
                       <td>{user.user_id}</td>
                       <td>{user.user_name}</td>
                       <td>£{user.balance}</td>
                   </tr>
               ))} 
               </tbody>
            </table>
        </div>
    )
}

export default Leaderboard;