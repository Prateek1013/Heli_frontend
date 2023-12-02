import './App.css';
import { Card ,Button} from 'antd';
import { Col, Row } from 'antd';
import DomainFilter from './components/DomainFilter';
import AvailableFilter from './components/AvailableFilter';
import GenderFilter from './components/GenderFilter';
import { useEffect, useState } from 'react';
import Users from './pages/Users';
const LIMIT=20;
function App() {
  // const [chars,setchars]=useState([]);
  // const [data,setdata]=useState([]);
  // const [domains,setdomains]=useState([]);
  // const [genders,setgenders]=useState([]);
  // const [pagecount, setpagecount] = useState(0);
  // const [currpage, setcurrpage] = useState(1);
  // const [selectedDomain,setselectedDomain]=useState("Select Domain");
  // const [selectedavailable,setavailable]=useState("Select Available");
  // const [selectedgender,setgender]=useState("Select Gender");

  // useEffect(()=>{
  //   const func=()=>{
  //     fetch('http://localhost:4000/get').then(resp=>resp.json()).then(jsondata=>{
  //     setdata(jsondata);
  //     setchars(jsondata.slice(0,LIMIT));
  //     setpagecount(Math.ceil(jsondata.length / LIMIT ));
  //     fetch('http://localhost:4000/getAllDomain').then(resp=>resp.json()).then(jsondata=>{
  //       setdomains(jsondata);
  //       fetch('http://localhost:4000/getAllgenders').then(resp=>resp.json()).then(jsondata=>{
  //         setgenders(jsondata);
  //       })
  //     })
  //     })
  //   }
  //   func();
  // },[])
  // const handleprev = () => {
  //   if (currpage > 1) {
  //     setcurrpage(currpage - 1);
  //     setchars(data.slice((currpage-2)*LIMIT,LIMIT*(currpage-1)));
  //   }
  // }
  // const handlenext = () => { 
  //   if(currpage<pagecount)
  //     {setcurrpage(currpage + 1);
  //     setchars(data.slice((currpage)*LIMIT,LIMIT*(currpage+1)));}
  // }
  // const filterhandle=()=>{
  //   const URL=`http://localhost:4000/filter?domain=${selectedDomain}&available=${selectedavailable}&gender=${selectedgender}`;
  //   fetch(URL).then(resp=>resp.json()).then(jsondata=>{
  //     setchars(jsondata);
  //   })
  // }
  // return (
  //   <>
  //     <div>
  //       <div style={{ textAlign: 'center', background: 'cyan' }}>
  //         <h1>Heliverse</h1>
  //       </div>
  //       <div style={{ marginTop: '8px', textAlign: 'left', display:'flex'}}>
  //         <input type="text" placeholder='Search name...'  onChange={(e) => {
  //          if(e.target.value)
  //          setchars(data.filter(item => item.first_name.toLowerCase().includes(e.target.value) || item.last_name.toLowerCase().includes(e.target.value) ));
  //          else setchars(data.slice((currpage-1)*LIMIT,LIMIT*currpage));
  //         }} />
  //       </div>
  //       <div style={{display:'flex'}}>
  //      <DomainFilter domains={domains} selectedDomain={selectedDomain} setdomain={setselectedDomain}/>
  //      <AvailableFilter selectedavailable={selectedavailable} setavailable={setavailable}/>
  //      <GenderFilter  genders={genders} selectedgender={selectedgender} setgender={setgender}/>
  //      <Button type='text' onClick={filterhandle}>Filter!</Button>
  //      </div>
  //       <div style={{ marginTop: '30px' }}>
  //         <Row gutter={[24, 24]}>
  //           {
  //             chars.map(item => {
  //               return (
  //                 <Col
  //                   xs={{
  //                     span: 8,
  //                     offset: 1,
  //                   }}
  //                   lg={{
  //                     span: 6,
  //                     offset: 2,
  //                   }}
  //                 >
  //                   <Card
  //                     hoverable
  //                     style={{
  //                       width: 240,
  //                     }}
  //                     cover={<img alt="example" src={`${item.avatar}`}/>}
  //                   >
  //                     <h2>{item.first_name} {item.last_name}</h2>
  //                     <p>{item.domain} && {item.gender} && {item.available}</p>
  //                   </Card>

  //                 </Col>
  //               )
  //             })
  //           }
  //         </Row>
  //       </div>
  //       <div style={{ marginTop: '10px', textAlign: "center" }}>
  //         <button onClick={handleprev}> Prev</button> Page  {currpage} of {pagecount}
  //          <button onClick={handlenext}>Next</button>
  //       </div>
  //     </div>


  //   </>
  // );
  return (
    <Users/>
  )
}

export default App;
