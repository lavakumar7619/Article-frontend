
import React,{useState,useEffect}  from 'react';
import { Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import './App.css';
import Load from "./components/loading"
import Form from './components/Form'
import Articles from './components/Articles'
import Nav from './components/Nav'
import Article from './components/Article';
import Edit from './components/Edit'
function App() {
  const [title, settitle] = useState("")
  const [authors, setauthors] = useState("")
  const [desc, setdesc] = useState("")
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    fetch("https://article1blog.herokuapp.com/articles",{
      method: 'GET',
      headers: {
          'Content-type': 'application/json'
      }
    })
    .then(res=>{return res.json()})
    .then(data=>{
      setloading(false) 
      setarticles(data)
    })
    .catch(err=>console.log(err))
      
  }, [])
 
  return (
    <div className="App">
      <Load loading={loading}></Load>
      <Router>
        <Nav/>
        <Switch>
           <Route path="/" exact >
              {articles.length>0 ? <Articles setloading={setloading} articles={articles}/>:'No Articles Has been added ....'}
           </Route>
          <Route path='/form' >
            <Form 
              title={title} authors={authors} desc={desc}
              settitle={settitle} setauthors={setauthors} setdesc={setdesc} 
            />
          </Route>
          <Route path={`/article/:id`}>
            <Article setloading={setloading}></Article>
          </Route>
          <Route  path={`/edit/:id`}>
            <Edit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
