import React , {useEffect, useState} from 'react';
import Sentiment from 'sentiment';
import PuffLoader from "react-spinners/PuffLoader";
import './analysis.css';

const sentiment = new Sentiment();

const Analysis = () => {
    const [load, setload] = useState(false);
    const [generalSentiment, setGeneralSentiment] = useState(null)
    const [content, setcontent] = useState('')

    useEffect(()=>{
        setload(true)
        setTimeout(()=>{
            setload(false)
        }, 3000)

    }, [])
    const updatetxt=(e)=>{
            setcontent(e.target.value)
    }
    const findSentiment=(e)=>{
        e.preventDefault();
        const result = sentiment.analyze(content)
        if(result.score < 0){
            setGeneralSentiment("Negative")
        }
        else if(result.score === 0){
            setGeneralSentiment("Neutral")
        }
        else{
            setGeneralSentiment("Positive")
        }
    }
    return (
        <div>{
                load?<PuffLoader
                className='Analysis'
                color={'red'}
                loading={load}
                size={80}
              />:            
            <div className='analysisform'>
            <h1>Sentimental Analysis</h1>
            <textarea onChange={updatetxt} cols = {100} rows = {7}/><br/><br />
            <button onClick ={findSentiment}>Analyse</button>
            <h5> Statement After Analysis : <span>{generalSentiment}</span></h5>
            </div>
        }
        </div>
    );
};

export default Analysis;