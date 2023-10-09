import AddFavourite from "../components/AddFavourite";
import {PeopleDataSource} from "../api/peoples";

export const columns =  [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
},{
    title: 'Heights',
    dataIndex: 'heights',
    key: 'heights',
},{
    title: 'Mass',
    dataIndex: 'mass',
    key: 'mass',
},{
    title: 'HairColor',
    dataIndex: 'hairColor',
    key: 'hairColor'
}, {
    render: (_: any, record: PeopleDataSource) => <AddFavourite item={record} />,
}]