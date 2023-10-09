import {Input, Modal, Space} from "antd";
import {ChangeEvent, useState} from "react";
import toast from "react-hot-toast";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch.ts";
import {setPeoples, usePeoples} from "../../features/peoples";
import {PeopleDataSource} from "../../api/peoples";

const CreatePeople = ({isModalOpen, handleCancel}: {isModalOpen: boolean, handleCancel: () => void}) => {
    const [peopleItem, setPeopleItem] = useState<PeopleDataSource>({} as PeopleDataSource);
    const dispatch = useAppDispatch()
    const peoples = usePeoples()

    const createPeople = () => {
        if (!peopleItem.name || !peopleItem.mass || !peopleItem.hairColor || !peopleItem.heights) {
            toast.error('Заполните все поля')
        } else {
            dispatch(setPeoples([{...peopleItem, key: peoples.length + 1}, ...peoples]))
            handleCancel()
            setPeopleItem({name: '', mass: '', key: 0, heights: '', hairColor: ''})
        }
    }
    const onChangeInput = (key: keyof PeopleDataSource, e: ChangeEvent<HTMLInputElement>) => {
        setPeopleItem({ ...peopleItem, [key]: e.target.value });
    }

    return (
        <Modal title="Добавление персонажа" open={isModalOpen} onOk={createPeople} onCancel={handleCancel}>
           <Space style={{width: '100%'}} direction='vertical'>
               <Input value={peopleItem.name} onChange={(e) => onChangeInput("name", e)} placeholder="Введите имя" />
               <Input value={peopleItem.heights} onChange={(e) => onChangeInput("heights", e)} placeholder="Введите рост" />
               <Input value={peopleItem.mass} onChange={(e) => onChangeInput("mass", e)} placeholder="Введите вес" />
               <Input value={peopleItem.hairColor} onChange={(e) => onChangeInput("hairColor", e)} placeholder="Введите цвет волос" />
           </Space>
        </Modal>
    );
};

export default CreatePeople;
