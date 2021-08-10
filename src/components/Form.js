import React from 'react'

function Form({title,authors,desc,settitle,setauthors,setdesc}) {
    const getTitle=(e)=>{
        settitle(e.target.value)
    }
    const getauthors=(e)=>{
        setauthors(e.target.value)
    }
    const getdesc=(e)=>{
        setdesc(e.target.value)
    }
    const Submit=(e)=>{
        e.preventDefault()
        if(title.length<1 || authors.lenght<1 || desc.length<1){
           alert('enter all fields')
            return
        }
        
        fetch('https://article1blog.herokuapp.com/form',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title:title,
                authors:authors,
                description:desc
            })
        })
        .then(res=>{return res.json()})
        .then(data=>{
            
            window.location.href = data.redirect
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='form-div'>
        <h2>Add Article</h2>
        <form>
                <div className="text-area">
                    <label htmlFor="title" >Title :</label>
                    <input type="text" onChange={getTitle}/>
                </div>
                <div className="text-area">
                    <label htmlFor="authors">Authors :</label>
                    <textarea  onChange={getauthors} value={authors}> </textarea>
                </div>
                <div className="text-area">
                    <label htmlFor="description">Description :</label>
                    <textarea  onChange={getdesc} value={desc}></textarea>
                </div>
                <div className="add">
                    <button onClick={Submit}  value="" type="submit">Submit</button>
                </div>
        </form>
        </div>
    )
}

export default Form
