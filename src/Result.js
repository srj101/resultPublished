import React, { useState } from 'react'
import axios from 'axios';
function Result() {
    const [Allinfo , setInfo] = useState();
    const [result , setResult] = useState();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const id = e.target.elements['id'].value;
        const semester = e.target.elements['semester'].value;
        const url1 = `http://software.diu.edu.bd:8189/result?grecaptcha=&semesterId=${semester}&studentId=${id}`;
        const url2 = `http://software.diu.edu.bd:8189/result/studentInfo?studentId=${id}`;
        const resultt = await axios.get(url1);
        const info = await axios.get(url2);
        setInfo(info.data);
        setResult(resultt.data);
    }
  return (
    <div className='resultContainer'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='id' placeholder='201-15-3117'/>
            <input type="text" name='semester' placeholder='221' />
            <input type="submit" />
        </form>
        <div className="display">
            <h2>Info: <br /></h2>
            <pre>
            {JSON.stringify(Allinfo, null, 2)}
            </pre>
            <br />
            <hr />
            <h2>Result: <br /></h2>
            <pre>
            {result?.map((res,i) => (
                <pre key={i}>
                    {JSON.stringify(res, null, 2)}
                </pre>
            ))}
            </pre>
        </div>
    </div>
  )
}

export default Result