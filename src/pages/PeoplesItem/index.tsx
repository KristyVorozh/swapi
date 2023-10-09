import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPeopleById, PeopleDataSource} from "../../api/peoples";
import {columns} from "../../utils/columns.tsx";
import {Spin, Table} from "antd";

const PeoplesItem = () => {
    const {id} = useParams()
    const [peopleItem, setPeopleItem] = useState<PeopleDataSource[]>([]);

    const fetchPeopleItem = async () => {
        try {
            const arr = []
            const response = await getPeopleById(id || '')
            arr.push({
                key: 1,
                name: response.data.name,
                heights: response.data.height,
                mass: response.data.mass,
                hairColor: response.data.hair_color,
            })
            setPeopleItem(arr)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (id) {
            void fetchPeopleItem()
        }
    }, [id]);

    return (
        <>
            {
                !peopleItem.length ? <Spin /> :
                <Table columns={columns} dataSource={peopleItem} />
            }
        </>
    );
};

export default PeoplesItem;
