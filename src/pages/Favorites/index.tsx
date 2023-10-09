import {setPeoplesFavourite, usePeoplesFavourite} from "../../features/peoples";
import {Space, Spin, Table, Typography} from "antd";
import {columns} from "../../utils/columns.tsx";
import {useEffect} from "react";
import {PeopleDataSource} from "../../api/peoples";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch.ts";

const Favorites = () => {
    const favourite = usePeoplesFavourite()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('peopleFavourite') as string) as PeopleDataSource[]
        dispatch(setPeoplesFavourite(arr))
    }, []);

    return (
        <Space>
            {!favourite ?
                <Typography>Избранных пользователей нет</Typography> :
                !favourite?.length ?
                 <Spin /> :
                <Table columns={columns} dataSource={favourite} />
            }
        </Space>
    );
};

export default Favorites;
