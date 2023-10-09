import {Space} from "antd";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <Space>
            <Link to='/peoples'>Peoples</Link>
            <Link to='/favorites'>Favorites</Link>
        </Space>
    );
};

export default Main;
