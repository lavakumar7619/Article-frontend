import React from 'react'
import {Link} from 'react-router-dom'
function Articles({articles,setarticle}) {
    
    const senddelete=(e)=>{
        
        fetch(`https://article1blog.herokuapp.com/article/${e.target.dataset.id}`,{
            method:"DELETE"
        })
        .then((response)=>{return response.json()})
        .then(data=>{
            window.location.href=data.redirect
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div className="articles">
            <h2>articles</h2>
            {articles.map(article=> { 
                return(
                    <div className="article" key={article._id}>
                        <h4> {article.title}</h4>
                        <p>{article.authors}</p>
                        <button><Link to={`/article/${article._id}`}>Read More</Link></button>
                        <button ><Link to={`/edit/${article._id}`}>Edit</Link></button>
                        <button className='delete'data-id={article._id} onClick={senddelete} >Delete</button> 
                    </div>
                )}
            )}
        </div>
    )
}

export default Articles
