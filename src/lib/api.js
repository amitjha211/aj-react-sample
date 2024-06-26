import axios from "axios";
const $ = window.$;

const getData = async(dataFile,iStart,iCount) =>{

    const req = await axios.get(dataFile)

    const _dataPager = req.data.slice(iStart,iStart+iCount);
    return { rows : _dataPager , count : req.data.length };
}


const gridF = {
    loadDataPaging : async (grd,setGrd) => {

        
        const iSize =  grd.pager.pageSize;
        const iStart =  grd.pager.pageSize * (grd.pager.currentPage -1);

        const req = await getData(grd.api,iStart,iSize);
        
        if(req.rows && req.rows.length>0) {
            grd.pager.count = req.count;
            grd.rows = req.rows;
            if(setGrd) setGrd({...grd});
        }
    }
    ,edit : (grd,r,e) =>{
        if(e) e.preventDefault();
        grd.currentRow = {...r};
        
        $("#modalEntry").modal("show");
    }

}



export {getData ,gridF}

