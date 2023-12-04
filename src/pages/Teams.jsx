import { Card ,Button} from "antd";
import {Row,Col} from "antd"
import { useState } from "react";
const BACKEND_URL='https://heliverse-backend-4o3c.onrender.com'
const Teams = (props) => {
    const [savedTeams,setsavedTeams]=useState([]);
    const {currTeam,setcurrTeam}=props;
    const teamhandle=(item)=>{
        const temp=currTeam.filter(team=>team!=item);
        setcurrTeam(temp);
    }
    const saveteam=()=>{
        if(currTeam.length==0){ alert("Kindly select some members!"); return; }
        fetch(`${BACKEND_URL}/addTeam`,{
            method:'post',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(currTeam)
        }).then(()=>{
            console.log('inserted')
            setcurrTeam([]);

        }).catch((err)=>{
            console.log(err)
        })
    }
    const savedteamshandle=()=>{
        fetch(`${BACKEND_URL}/getallTeams`).then(resp=>resp.json())
        .then(jsondata=>{
            setsavedTeams(jsondata);
            console.log(jsondata);
        })
        .catch((err)=>{console.log(err)})
    }

    const deleteTeam=(id)=>{
      fetch(`${BACKEND_URL}/deleteTeam?id=${id}`,{
        method:'delete'
      }).then(()=>{
        console.log("Deleted");
      }).catch(err=>console.log(err))
    }

    return ( 
        <>
       <div>
        <Card
        hoverable={true}
        title="Curent Team"
        style={{width:1200}}
        extra={<Button onClick={saveteam}>Save</Button>}
        >
        <div>
       <Row 
       gutter={[16,16]}>
            {
              currTeam.map(item => {
                return (
                  <Col
                  gutter={[16,16]}
                  xs={{
                    span: 8,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                  >
                    <Card.Grid
                      hoverable
                      style={{width:'50%', textAlign:'center'}}
                    >
                    <img alt="example" src={`${item.avatar}`}/>
                      <h2>{item.first_name} {item.last_name}</h2>
                      <p>{item.domain} && {item.gender} && {(item.available)?'Available':'Not available'}</p>
                      <Button onClick={()=> teamhandle(item)}>Remove</Button>
                    </Card.Grid>

                  </Col>
                )
              })
            }
          </Row>
          </div>
          </Card>
          <Card style={{marginTop:'50px', width:800}}
          hoverable
          title="Saved Teams show here..."
          extra={<Button onClick={savedteamshandle}>Fetch saved Teams</Button>}
          >
            <Row 
       gutter={[24,24]}>
            {
              savedTeams.map(team => {
                return (
                    <Card title={`Team id: ${team._id}`}
                    style={{alignContent:'justify'}}
                    extra={<Button onClick={()=>deleteTeam(team._id)}>Delete Team</Button>}
                    >
                        <Row gutter={[24,24]}>
                    {team.users.map(item => 
                    {return (
                        <Row gutter={[16,16]}>
                        <Col
                        gutter={[16,16]}
                        className="gutter-row"
                        xs={{
                          span: 8,
                          offset: 1,
                        }}
                        lg={{
                          span: 6,
                          offset: 2,
                        }}
                        >
                          <Card.Grid
                          hoverable={false}
                            style={{width:180}}
                          >
                            {/* <img alt="example" src={`${item.avatar}`}/> */}
                            <h2>{item.first_name} {item.last_name}</h2>
                            <p>{item.domain} && {item.gender} && {(item.available)?'Available':'Not available'}</p>
                          </Card.Grid>
      
                        </Col>
                        </Row>
                      )})}
                      </Row>
                      </Card>
                      )
              })
            }
          </Row>
          </Card>
       </div>

        </>
     );
}
 
export default Teams;