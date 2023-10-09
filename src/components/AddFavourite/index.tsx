import {useEffect, useState} from 'react';
import {Button} from "antd";
import {setPeoplesFavourite, usePeoplesFavourite} from "../../features/peoples";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch.ts";
import {PeopleDataSource} from "../../api/peoples";
import {useParams} from "react-router-dom";

const AddFavourite = ({item}: { item: PeopleDataSource }) => {
    const [checkFavourite, setCheckFavourite] = useState(false);
    const dispatch = useAppDispatch()
    const peopleFavourite = usePeoplesFavourite()
    const {id} = useParams()

    const changeFavouriteArray = () => {
        const arr =
            !peopleFavourite?.filter((v) => v.name === item.name).length ?
                [...peopleFavourite, item] :
                [...peopleFavourite.filter((v) => v.name !== item.name)]
        dispatch(setPeoplesFavourite(arr))
        localStorage.setItem('peopleFavourite', JSON.stringify(arr))
    }

    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('peopleFavourite') as string) as PeopleDataSource[]
        dispatch(setPeoplesFavourite(arr || []))
    }, []);

    useEffect(() => {
        setCheckFavourite(!!peopleFavourite?.filter((v) => v.name === item.name).length)
    }, [peopleFavourite]);

    if (id && checkFavourite) return null
    return (
        <Button
            type={checkFavourite ? "primary" : undefined}
            onClick={changeFavouriteArray}>
            {checkFavourite ? 'Убрать из избранного' : 'добавить в избранное'}
        </Button>
    );
};

export default AddFavourite;
