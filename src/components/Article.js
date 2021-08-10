import React,{useEffect,useState} from 'react'
import { useParams ,Link} from 'react-router-dom'
import Load from './loading'

function Article({setloading}) {
    const [article, setarticle] = useState([])
    const {id}=useParams()
    useEffect(() => {
        setloading(true)
        fetch(`https://article1blog.herokuapp.com/article/${id}`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res=>{return res.json()})
        .then(data=>{
            setloading(false) 
            setarticle(data.data)
        })
        .catch(err=>console.log(err))      
    }, [id])
  
  
    return (
        <div className='article'>
            <div className='x'>
                <h1>Article :{article.title}</h1>
                <div className="author">Author :{article.authors}  </div>
            </div>
            <div className="description">{article.description}</div>
            <button ><Link to={`/edit/${article._id}`}>Edit</Link></button>
        </div>
        
    )
}

export default Article
