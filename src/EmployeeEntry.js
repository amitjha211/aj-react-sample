import { useState } from "react";



const Field  = ({label,val,required,regEx}) => {
    const validationStarted = false;
    const [localValue,setLocalValue] = useState(val);
    //const _children = children;

    return (<div className="form-group">
        <label>{label} { required==true && <span className="text-danger">*</span>}</label>
        <input type="text"  className="form-control" value={localValue} onChange={(e) => setLocalValue(e.target.value)}  />
    </div>);
}

const FieldDropDown  = ({label,val,required,drpData}) => {
    const validationStarted = false;
    const [localValue,setLocalValue] = useState(val);
    //const _children = children;

    return (<div className="form-group">
        <label>{label} { required==true && <span className="text-danger">*</span>} {val}</label>
        <select className="form-control" value={localValue} onChange={(e) => setLocalValue(e.target.value)}  >
            <option value="">--Select--</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
    </div>);
}



const EmployeeEntry = ({grd})=>{

    return (

        <div className="modal fade" id="modalEntry" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Employee Information</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {(grd.currentRow) && 
                    
                    <>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4">
                                    <Field label="First Name" val={grd.currentRow.firstName} required={true}></Field>
                                </div>
                                <div className="col-md-4">
                                    <Field label="Last Name" val={grd.currentRow.lastName}></Field>
                                </div>
                                <div className="col-md-4">
                                    <Field label="Last Name" val={grd.currentRow.lastName}></Field>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    
                                    <FieldDropDown label="Gender" val={grd.currentRow.gender}></FieldDropDown>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={grd.currentRow.image} className="img-thumbnail"></img>
                        </div>
                    </div>    
                    </>

                    
                }
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>



    )



}


export default EmployeeEntry;