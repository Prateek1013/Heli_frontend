import { Dropdown } from "antd";


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
        <div style={{ marginLeft: '50px' }}>filter:
            <Dropdown
                menu={{
                    items,
                    onClick,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                   {selectedavailable} 
                </a>
            </Dropdown>
        </div>
    );
}
export default AvailableFilter;
