import React,{useEffect,useState} from 'react'
import { useParams ,Link} from 'react-router-dom'
function Edit() {
   const {id}=useParams()
    
    const [edit, setedit] = useState([])
    const [etitle, setetitle] = useState("")
    const [eauthors, seteauthors] = useState("")
    const [edesc,setedesc]=useState("")
    useEffect(() => {      
        //article
        fetch(`https://article1blog.herokuapp.com/edit/${id}`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res=>{return res.json()})
        .then(data=>{
            setedit(data.data)
        })
        .catch(err=>console.log(err))  
    }, [id])

    const save=(e)=>{
        e.preventDefault()

        if(etitle.length<=0 || eauthors.length<=0 || edesc.length<=0){
            alert('enter data')
            return
        }

        fetch(`https://article1blog.herokuapp.com/edit/${e.target.dataset.id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title:etitle,
                authors:eauthors,
                description:edesc
            })
        })
        .then(res=>{return res.json()})
        .then(data=>{
            console.log(data.data,"from article");
           window.location.href=data.redirect
        })
        .catch(err=>console.log(err))
    }
    const title=(e)=>{
        setetitle(e.target.value)
    }
    const authors=(e)=>{
        seteauthors(e.target.value)
    }
    const desc=(e)=>{
        setedesc(e.target.value)
    }
    return (
        <div className='edit'>
             <h2>Article-{edit.title}</h2>
            <form >
            <div>
                <label htmlFor="title"  className="text-area">Title :</label>
                <input type="text" onChange={title} required/>
            </div>
            <div className="text-area">
                <label htmlFor="authors">Authors :</label>
                <textarea onChange={authors} required /> 
            </div>
            <div className="text-area">
                <label htmlFor="description" required>Description :</label>
                <textarea onChange={desc}  />
            </div>
            <div className="buttons">
                <button data-id={edit._id} onClick={save}>Update And Save</button>
                <button><Link to={`/article/${edit._id}`}>Cancel</Link></button>
            </div>
        </form>
        </div>
    )
}

export default Edit
