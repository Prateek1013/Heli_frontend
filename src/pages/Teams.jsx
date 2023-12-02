import { Card ,Button} from "antd";
import {Row,Col} from "antd"
const Teams = (props) => {
    const {currTeam,setcurrTeam}=props;
    const teamhandle=(item)=>{
        const temp=currTeam.filter(team=>team!=item);
        setcurrTeam(temp);
    }
    const saveteam=()=>{
        
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
        <div style={{marginLeft:0}}>
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
                    ><img alt="example" src={`${item.avatar}`}/>
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
       </div>

        </>
     );
}
 
export default Teams;