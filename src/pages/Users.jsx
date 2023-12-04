import { Card ,Button} from 'antd';
import { Col, Row } from 'antd';
import DomainFilter from '../components/DomainFilter';
import AvailableFilter from '../components/AvailableFilter';
import GenderFilter from '../components/GenderFilter';
import { useState } from 'react';
const LIMIT=20;
const BACKEND_URL='https://heliverse-backend-4o3c.onrender.com'

const Users = (props) => {
  const {chars,data,pagecount,genders,domains,setchars,currpage,setcurrpage,currTeam,setcurrTeam}=props;
  const [selectedDomain,setselectedDomain]=useState("Select Domain");
  const [selectedavailable,setavailable]=useState("Select Available");
  const [selectedgender,setgender]=useState("Select Gender");
  const handleprev = () => {
    if (currpage > 1) {
      setcurrpage(currpage - 1);
      setchars(data.slice((currpage-2)*LIMIT,LIMIT*(currpage-1)));
    }
  }
  const handlenext = () => { 
    if(currpage<pagecount)
      {setcurrpage(currpage + 1);
      setchars(data.slice((currpage)*LIMIT,LIMIT*(currpage+1)));}
  }
  const filterhandle=()=>{
    const URL=`${BACKEND_URL}/filter?domain=${selectedDomain}&available=${selectedavailable}&gender=${selectedgender}`;
    fetch(URL).then(resp=>resp.json()).then(jsondata=>{
      setchars(jsondata);
    })
  }
  const teamhandle=(item)=>{
    for (let i = 0; i < currTeam.length; i++) {
      const team = currTeam[i];
      
      if (team == item) {
        alert(`${item.first_name} ${item.last_name} already added in the team`);
        return;
      } else if (team.domain == item.domain) {
        alert(`A member from ${team.domain} already exists`);
        return;
      }
      else if(!item.available) {
        alert(`${item.first_name} ${item.last_name} is not available`);
        return;
      }
    }
    
    currTeam.push(item);
    setcurrTeam(currTeam);
  }
  return (
    <>
      <div>
        <div style={{ marginTop: '8px', textAlign: 'center',alignContent:'center'}}>
          <input type="text" placeholder='Search name...'  onChange={(e) => {
           if(e.target.value)
           setchars(data.filter(item => item.first_name.toLowerCase().includes(e.target.value) || item.last_name.toLowerCase().includes(e.target.value) ));
           else setchars(data.slice((currpage-1)*LIMIT,LIMIT*currpage));
          }} />
        </div>
        <div style={{display:'flex' }}>
       <DomainFilter domains={domains} selectedDomain={selectedDomain} setdomain={setselectedDomain}/>
       <AvailableFilter selectedavailable={selectedavailable} setavailable={setavailable}/>
       <GenderFilter  genders={genders} selectedgender={selectedgender} setgender={setgender}/>
       <Button type='primary' style={{marginLeft:'50px'}} onClick={filterhandle}>Filter!</Button>
       </div>
        <div style={{ marginTop: '30px' }}>
          <Row gutter={[24, 24]}>
            {
              chars.map(item => {
                return (
                  <Col
                    xs={{
                      span: 8,
                      offset: 1,
                    }}
                    lg={{
                      span: 6,
                      offset: 2,
                    }}
                  >
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img alt="example" src={`${item.avatar}`}/>}
                    >
                      <h2>{item.first_name} {item.last_name}</h2>
                      <p>{item.domain} && {item.gender} && {(item.available)?'Available':'Not available'}</p>
                      <Button onClick={()=> teamhandle(item)}>Add</Button>
                    </Card>

                  </Col>
                )
              })
            }
          </Row>
        </div>
        <div style={{ marginTop: '10px', textAlign: "center" }}>
          <button onClick={handleprev}> Prev</button> Page  {currpage} of {pagecount}
           <button onClick={handlenext}>Next</button>
        </div>
      </div>


    </>
  );
}
 
export default Users;