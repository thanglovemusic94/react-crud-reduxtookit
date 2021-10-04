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
                        {/*<select defaultValue={data.published} value={data.published} onChange={handleChange} className="form-select" name="published" aria-label="Default select example">*/}
                        {/*    <option value={1}>Active</option>*/}
                        {/*    <option value={0}>UnActive</option>*/}
                        {/*</select>*/}
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="published" id="inlineRadio1"
                                       value={true}  defaultChecked={data.published === true} onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="inlineRadio1">active</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="published" id="inlineRadio2"
                                       value={false} defaultChecked={data.published === false} onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="inlineRadio2">unactive</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormTutorial
