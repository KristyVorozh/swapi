import {useEffect, useState} from "react";
import {getPeoples, PeopleApiResponse} from "../../api/peoples";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch.ts";
import {setPeoples, usePeoples} from "../../features/peoples";
import {AxiosResponse} from "axios";
import {Button, Space, Spin, Table} from "antd";
import CreatePeople from "../../components/CreatePeople";
import {columns} from "../../utils/columns.tsx";
import SearchPeople from "../../components/SearchPeople";

const Peoples = () => {
    const peoples = usePeoples()
    const dispatch = useAppDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const fetchPeople = async () => {
        try {
            const response: AxiosResponse<PeopleApiResponse> = await getPeoples()
            dispatch(setPeoples(response.data.results.map((v, index) => ({
                key: index + 1,
                name: v.name,
                heights: v.height,
                mass: v.mass,
                hairColor: v.hair_color,
            }))))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
       void fetchPeople()
    },[])

    return (
        <Space align='center' direction='vertical'>
            <CreatePeople isModalOpen={isModalOpen} handleCancel={handleCancel} />
            <Button onClick={() => setIsModalOpen(true)}>Добавить персонажа</Button>
            <Space align='start'>
                {!peoples.length ? <Spin /> :
                    <Table columns={columns} dataSource={peoples} />
                }
                <SearchPeople />
            </Space>
        </Space>
    );
};

export default Peoples;
