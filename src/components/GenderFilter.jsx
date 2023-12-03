import { Dropdown, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';


const GenderFilter = (props) => {
    const { genders,selectedgender,setgender } = props;
    
    const items=[];
    for(const gender of genders){
        const obj={
            key:gender,
            label:(<a>{gender}</a>)
        }
        items.push(obj);
    }
    const onClick = ({ key }) => {
        setgender(key);
      };
    return (
        <div style={{ marginLeft: '50px'}}>
            <Dropdown
                menu={{
                    items,
                    onClick,
                }}
            >
                <a  onClick={(e) => e.preventDefault()}>
                    <Space>
                   {selectedgender} 
                   <DownOutlined/>
                   </Space>
                </a>
            </Dropdown>
        </div>
    );
}
export default GenderFilter;
