import { useState,useEffect } from "react"
import * as api from "./lib/api"
import Pager from "./lib/Pager"

const GridPanel = ({children,panelTitle}) => {

return (
    <>
     <div className="card ">
        <div className="card-header">
            <i className="fa fa-user"></i> &nbsp;{panelTitle}
            
        </div>
        <div className="card-body">
            {children}
        </div>
    </div>
    </>)    
}


const _gridModel = { 
    rows : [],
    pager : { 
        count : 100,
        currentPage : 1,
        pageSize : 10
    },
    basicFilter : {},
    api : "Users.json",
}

const EmployeeList = () => {
    const [grd,setGrd] = useState(_gridModel);
    const jnGridInfo = { grd : grd, setGrd : setGrd};

    useEffect( ()=>{

        const initData = async()=> {
            // const _data =await api.getData("/users.json",1,10);
            // console.log(_data);
            // setData(_data);
            await api.gridF.loadDataPaging(grd,setGrd);
        }
        initData();
    },[]);

    return (<>

<div className="row">
    <div className="col-md-10">
        <Pager grd={grd} setGrd={setGrd} />
        <GridPanel panelTitle="Employee List">
                <table className="table ">
                    <thead>
                        <tr>
                            <th width="100px">Photo</th>
                            <th width="5px">id</th>
                            <th width="100px">Employee Name</th>
                            <th >Address</th>
                            <th width="65px">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grd.rows.map( (r)=>{
                            return (
                            <tr key={r.id}>

                                <td>
                                    <a href={r.image} target="_blank">
                                    <img  className="img-thumbnail" src={r.image}></img>
                                    </a>
                                </td>
                                <td>
                                    {r.id}
                                </td>
                                <td>
                                    <span >{r.firstName}</span>&nbsp;<span>{r.lastName}</span>
                                </td>
                                <td>
                                    <span>{r.address.address}</span>
                                    <br></br>
                                    City : <span className="badge badge-primary">{r.address.city}</span>
                                    &nbsp;Country : <span className="badge badge-primary">{r.address.country}</span>
                                    <br></br>
                                    &nbsp;Pin Code : <span className="">{r.address.postalCode}</span>
                                </td>
                                <td>
                                    <a ><i className="fa fa-edit"></i></a>&nbsp;
                                    <a ><i className="fa fa-trash-o text-danger"></i></a>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>

                </table>
                <Pager grd={grd} setGrd={setGrd} />
        </GridPanel>
    </div>
    <div className="col-md-6">

    </div>

</div>
            




    </>)

}


export default EmployeeList;