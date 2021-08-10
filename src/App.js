
import React,{useState,useEffect}  from 'react';
import { Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import './App.css';
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

  useEffect(() => {
    fetch("http://localhost:5000/articles",{
      method: 'GET',
      headers: {
          'Content-type': 'application/json'
      }
    })
    .then(res=>{return res.json()})
    .then(data=>{
      
      setarticles(data)
    })
    .catch(err=>console.log(err))
      
  }, [])
 
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
           <Route path="/" exact >
              {articles.length>0 ? <Articles articles={articles}/>:'No Articles Has been added ....'}
           </Route>
          <Route path='/form' >
            <Form 
              title={title} authors={authors} desc={desc}
              settitle={settitle} setauthors={setauthors} setdesc={setdesc} 
            />
          </Route>
          <Route path={`/article/:id`}>
            <Article />
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
