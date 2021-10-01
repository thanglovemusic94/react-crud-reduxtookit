import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllTutorial, deleteTutorial, refreshTutorial} from "../../action/TutorialAction";

export const Products = () => {
    const data = useSelector(state =>  state.state);
    const dispatch = useDispatch()

    const onClickDelete = (id) => {
            dispatch(deleteTutorial(id))
    }

    const onClickDeleteAll = () => {
        dispatch(deleteAllTutorial())
    }

    useEffect(() => {
            dispatch(refreshTutorial())
    }, [])


    return (
        <>
            <div className="container">
                <h3>Simple CRUD REACTJS - REDUX TOOKIT</h3>
                <a href={"/product/create"}
                   type="button"
                   className="btn btn-sm btn-primary me-2">add Tutorial
                </a>
                <a onClick={onClickDeleteAll}
                   type="button"
                   className="btn btn-sm btn-danger me-2">Remove All Tutorial
                </a>
                {
                    data &&
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
                            data.map((v, i) => {
                                return (

                                    <tr key={i}>
                                        <td>{v.title}</td>
                                        <td> {v.description}</td>
                                        <td>{v.published}</td>
                                        <td>
                                            <a href={"/product/edit/" + v.id}
                                               type="button"
                                               className="btn btn-sm btn-primary me-2">edit
                                            </a>
                                            <a onClick={() => onClickDelete(v.id)}
                                               type="button"
                                               className="btn btn-sm btn-danger">
                                                delete
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                }

            </div>
        </>
    )
}

export default Products
