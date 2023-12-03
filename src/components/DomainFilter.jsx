import { Dropdown,Space } from "antd";
import { DownOutlined } from '@ant-design/icons';


const DomainFilter = (props) => {
    const { domains,selectedDomain,setdomain } = props;
    
    const items=[];
    for(const domain of domains){
        const obj={
            key:domain,
            label:(<a>{domain}</a>)
        }
        items.push(obj);
    }
    const onClick = ({ key }) => {
        setdomain(key);
      };
    return (
        <div style={{ marginLeft: '50px' }}>
            <Dropdown
                menu={{
                    items,
                    onClick,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>

                   {selectedDomain} 
                   <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
}
export default DomainFilter;
