export const FormTutorial = ({onSubmit, handleChange, data}) => {

    return (
        <>
            <div className="container w-25">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input name="title" type="text" value={data.title} className="form-control" onChange={handleChange} id="exampleInputEmail1"
                               aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Desciption</label>
                        <input name="description" value={data.description} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputPassword1" className="form-label">published</label>
                        <select defaultValue={data.published} onChange={handleChange} className="form-select" name="published" aria-label="Default select example">
                            <option value={true}>Active</option>
                            <option value={false}>UnActive</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormTutorial
