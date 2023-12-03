import { Dropdown ,Space} from "antd";
import { DownOutlined } from '@ant-design/icons';


const AvailableFilter = (props) => {
    const { selectedavailable,setavailable } = props;
    
    const items=[{
        key:true,
        label:'Available'
    },
    {
    key:false,
    label:'Not available'
    }
];
   
    const onClick = ({ key }) => {
        setavailable(key);
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

                   {selectedavailable} 
                   <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
}
export default AvailableFilter;
