import React, { useState, useEffect } from "react";

import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

import { apiData } from "../../services/apiData";

import { IBlockChainData } from "../../interfaces";
import Constants from "../../Constants";

const Home: React.FC = () => {

    const [data, setData] = useState<IBlockChainData>({} as IBlockChainData);

    useEffect(() => {
        apiData.get("stores").then(
            res => console.log(res.data)            
        )        
    }, [])

    return(
        <>
            <Nav />
            <h1>Home</h1>
            <Footer />
        </>
    )
}

export default Home;