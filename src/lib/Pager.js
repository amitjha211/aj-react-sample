
import {  gridF } from "./api"

const jnPager = {
    getPageSize : (pager) => {
        return Math.ceil(pager.count/pager.pageSize);
    }
}

const Pager =  ({grd,setGrd}) => {

    const gotoPage = async (grd,iPage) => {
        //alert("hi");
        let _iPage = iPage < 1 ? 1 : iPage;
        _iPage = iPage > (grd.pager.count -1) ? grd.pager.count - 1: _iPage; 
        
        grd.pager.currentPage = _iPage;
        await gridF.loadDataPaging(grd,setGrd);
    }

    const handleGotoPage  = (grd,iPage,e) => {
        if(e) e.preventDefault();

        gotoPage(grd,iPage)
    }

    return (

        <div className="d-flex d-flex-row ">
            <div className="ml-2">
                <ul className="pagination pagination-sm">
                    <li className="page-item"><a href="#" className="page-link" onClick={(e)=> handleGotoPage(grd,grd.pager.currentPage-1,e)}><span aria-hidden="true">&laquo;</span></a></li> 
                    <li className="page-item active" aria-current="page" >
                        <span className="page-link">{grd.pager.currentPage}</span>
                    </li>
                    <li className="page-item"><a href="#" className="page-link"   onClick={(e) => handleGotoPage(grd,grd.pager.currentPage+1,e)}><span aria-hidden="true">&raquo;</span></a></li> 
                </ul>
            </div>
            <div className="flex-fill text-right">
                <span className="badge badge-success">{grd.pager.currentPage}</span>   of <span className="badge badge-primary">{jnPager.getPageSize(grd.pager)}</span>| Records : <span className="badge badge-primary">{grd.pager.count}</span>
            </div>
        </div>
    
);
}

export default Pager;