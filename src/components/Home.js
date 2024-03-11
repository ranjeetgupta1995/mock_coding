import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
    let [name, setName] = useState("");
    let [category, setCategory] = useState('');
    let [difficulty, setDifficulty] = useState('');
    let [numberOfQues, setNumberOfQues] = useState(0);

    let quizStart = () => {
        <Navigate to={'/quiz'} />
    }

    return (
        <div>
            <h1>Set up your Quiz</h1>
            <div style={{width:"30%", margin:"auto", display:"flex", flexDirection:"column", gap:"10px"}} >
                <input style={{width:"100%", height:"30px"}} type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                
                <select style={{width:"100%", height:"30px"}}
                type='text'
                value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value={''}>Select Category</option>
                <option value={'general'}>General Knowledge</option>
                <option value={'sports'}>Sports</option>
                <option value={'geography'}>Geography</option>
                </select>
                
                <select style={{width:"100%", height:"30px"}}
                type='text'
                value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value={''}>Select Difficulty</option>
                <option value={'hard'}>Hard</option>
                <option value={'medium'}>Medium</option>
                <option value={'easy'}>Easy</option>
                </select>
                
                <input style={{width:"100%", height:"30px"}} type="text" placeholder="Choose number of Question" value={numberOfQues} onChange={(e) => setNumberOfQues(e.target.value)}/>

                <button onClick={()=>quizStart} style={{width:"100%", height:"30px", background:'#E91E63', border:"none"}}>START QUIZ</button>
            </div>
        </div>
    );
}

export default Home;