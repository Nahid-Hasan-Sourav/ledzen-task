import React from 'react';

const Pagination = ({totalPost,postPerPage,setCurrentPage}) => {
    let pages=[]
    for(let i=1; i<=Math.ceil(totalPost/postPerPage);i++){
        pages.push(i)
    }
    return (
        <div className="btn-group w-[200px] mx-auto block">
          
          {
            pages?.map((page,index)=>{
                return(
                    <button key={index}
                    className="btn btn-sm "

                    onClick={()=>setCurrentPage(page)}

                    >{page}</button>
                )
            })
           } 
         
        </div>
    );
};

export default Pagination;