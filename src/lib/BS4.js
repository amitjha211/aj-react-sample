
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
    
   
const PopUp = () => {

    
}


export {GridPanel}