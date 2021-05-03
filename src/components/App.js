import React, { useState, useEffect } from 'react'
import Title from './Title'
import Searchbar from './Searchbar'
import '../styles/style.css'
import CardList from './CardList'

const App = () => {
    const [data, setData] = useState([]);
    const [copyData, setCopyData] = useState([data]);
    const [pageLoaded, setPageLoaded] = useState(false);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                let items=data.map(({ id, name, email }) => {
                    return { id, name, email };
                })
                setData(items);
                setCopyData(items);
                setPageLoaded(true)
            })
            
    }, []);
    const handleChange = (event)=>{
        let inputValue = event.target.value.toLowerCase();
        const filteredRobotList = data.filter((robot)=>{
            return robot.name.toLowerCase().includes(inputValue);
        });
        setCopyData(filteredRobotList);
    }
    if(!pageLoaded){
        return(
            <div className="page-loader">
                <div className="sk-cube-grid">
                    <div className="sk-cube sk-cube1"></div>
                    <div className="sk-cube sk-cube2"></div>
                    <div className="sk-cube sk-cube3"></div>
                    <div className="sk-cube sk-cube4"></div>
                    <div className="sk-cube sk-cube5"></div>
                    <div className="sk-cube sk-cube6"></div>
                    <div className="sk-cube sk-cube7"></div>
                    <div className="sk-cube sk-cube8"></div>
                    <div className="sk-cube sk-cube9"></div>
                </div>
                <div class="loading-text">LOADING ...</div>
            </div>
        );
    } else{
        return (
            <div className="page page--color">
                <div>
                    <Title text='MES AMIS ROBOTS' />
                </div>
                <div>
                    <Searchbar onChange = {handleChange} />
                </div>
                <CardList arrayList={copyData} />
            </div>
        );
    }
}

export default App;
