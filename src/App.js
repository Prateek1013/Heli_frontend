import { useState, useEffect } from 'react';
import './App.css';
import Users from './pages/Users';
import Title from './components/Title';
import Teams from './pages/Teams';
const LIMIT = 20;
const BACKEND_URL='http://localhost:4000';
function App() {
  const [toggle, setoggle] = useState(true);
  const [chars, setchars] = useState([]);
  const [data, setdata] = useState([]);
  const [domains, setdomains] = useState([]);
  const [genders, setgenders] = useState([]);
  const [pagecount, setpagecount] = useState(0);
  const [currpage, setcurrpage] = useState(1);
  const [currTeam,setcurrTeam]=useState([]);

  useEffect(() => {
    const func = () => {
      fetch(`${BACKEND_URL}/get`).then(resp => resp.json()).then(jsondata => {
        setdata(jsondata);
        setchars(jsondata.slice(0, LIMIT));
        setpagecount(Math.ceil(jsondata.length / LIMIT));
        fetch(`${BACKEND_URL}/getAllDomain`).then(resp => resp.json()).then(jsondata => {
          setdomains(jsondata);
          fetch(`${BACKEND_URL}/getAllgenders`).then(resp => resp.json()).then(jsondata => {
            setgenders(jsondata);
          })
        })
      })
    }
    func();
  }, [])

  return (
    <>
      <Title setoggle={setoggle} />
      {toggle ? 
      (<Users chars={chars} data={data} domains={domains} genders={genders} 
      pagecount={pagecount} setchars={setchars} currpage={currpage} setcurrpage={setcurrpage} currTeam={currTeam}
      setcurrTeam={setcurrTeam} />) :
       (<Teams currTeam={currTeam} setcurrTeam={setcurrTeam} />)}
    </>
  )
}

export default App;
