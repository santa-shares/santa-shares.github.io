import React from 'react'

const Stock = ({ items }) => {
    return (
        <div class="container">
            <h3>Current Stock</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                   {items.map((item) => (
                   <tr>
                       <td>{item.item_id}</td>
                       <td>{item.item_name}</td>
                       <td>£{item.price}</td>
                       <td>£{item.amount}</td>
                   </tr>
               ))} 
               </tbody>
            </table>
        </div>
    )
}

export default Stock;