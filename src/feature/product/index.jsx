export const Products = () =>{
    return (
        <>
           <div className="container">
               <h3>Simple CRUD REACTJS - REDUX TOOKIT</h3>
               <table className="table mt-3">
                   <thead>
                   <tr>
                       <th scope="col">Title</th>
                       <th scope="col">Description</th>
                       <th scope="col">Status</th>
                       <th scope="col">Action</th>
                   </tr>
                   </thead>
                   <tbody>
                   <tr>
                       <td>ô tô</td>
                       <td> ô tô kia</td>
                       <td>1</td>
                       <td>
                           <button type="button" className="btn btn-sm btn-primary me-2">edit</button>
                           <button type="button" className="btn btn-sm btn-danger">delete</button>
                       </td>
                   </tr>

                   </tbody>
               </table>
           </div>

        </>
    )
}

export default Products
