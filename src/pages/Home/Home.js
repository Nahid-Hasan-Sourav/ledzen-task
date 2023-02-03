import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
    const [data,setAllData]=useState()
    const [currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(3)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setAllData(data));
    },[])
    // console.log("All",data)
    const lastPostIndex= currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost=data?.slice(firstPostIndex,lastPostIndex)
    return (
        <div className="container bg-[#cbd5e1] mx-auto p-10">
           <>
           {
            currentPost?.map((item,index)=>{
                return(
                    <Card
                    key={index}
                    item={item}
                    />
                )
            })
           }
           </>

           <div>
            <Pagination
            totalPost={data?.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            />
           </div>

        </div>
    );
};

export default Home;