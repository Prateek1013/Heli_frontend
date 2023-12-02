import { Dropdown } from "antd";


const GenderFilter = (props) => {
    const { genders,selectedgender,setgender } = props;
    
    const items=[];
    for(const gender of genders){
        const obj={
            key:gender,
            label:(<a href='#'>{gender}</a>)
        }
        items.push(obj);
    }
    const onClick = ({ key }) => {
        setgender(key);
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
                   {selectedgender} 
                </a>
            </Dropdown>
        </div>
    );
}
export default GenderFilter;
