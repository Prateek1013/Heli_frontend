import { Switch } from "antd";
const Title = (props) => {
    const { setoggle } = props;

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ background: 'cyan' }}>
                <h1>Heliverse</h1>
            </div>
            <div style={{ textAlign: 'right', marginLeft:'1200px' }}>
                <Switch checkedChildren="Users" unCheckedChildren="Teams" defaultChecked onChange={(checked)=>{
                    setoggle(checked)
                }}/>
            </div>

        </div>
    );
}

export default Title;