import {useEffect, useState} from "react";
import TutorialService from "../../service/TutorialService";

export const Products = () => {
    const [data, setData] = useState()

    useEffect(() => {
        TutorialService.tutorials().then(res => {
            setData(res.data)
        }).catch(e => console.log(e))
    }, [])


    return (
        <>
            <div className="container">
                <h3>Simple CRUD REACTJS - REDUX TOOKIT</h3>
                <table className="table table-bordered  border-secondary mt-3">
                    <thead>
                        <tr>
                            <td scope="col">Title</td>
                            <td scope="col">Description</td>
                            <td scope="col">Status</td>
                            <td scope="col">Action</td>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        data ? data.map((v, i) => {
                                return (
                                    <>
                                        <tr key={i}>
                                            <td>{v.title}</td>
                                            <td> {v.description}</td>
                                            <td>{v.published}</td>
                                            <td>
                                                <button type="button" className="btn btn-sm btn-primary me-2">edit</button>
                                                <button type="button" className="btn btn-sm btn-danger">delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                            :
                            <tr>
                                <td>ô tô</td>
                                <td> ô tô kia</td>
                                <td>1</td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-primary me-2">edit</button>
                                    <button type="button" className="btn btn-sm btn-danger">delete</button>
                                </td>
                            </tr>
                    }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Products
