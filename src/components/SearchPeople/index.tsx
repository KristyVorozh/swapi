import {Select} from "antd";
import {getPeoplesByName} from "../../api/peoples";
import {useState} from "react";
import {Link} from "react-router-dom";

type OptionType = {
    label: string
    value: string
    url: string
}

const { Option } = Select;

const SearchPeople = () => {
    const [name, setName] = useState('');
    const [option, setOption] = useState<OptionType[]>([]);
    let timeout: ReturnType<typeof setTimeout> | null;

    const fetchPeopleSearch = async (value: string) => {
        try {
            const response = await getPeoplesByName(value)
            setOption(response.data.results.map((v) => ({value: v.name, label: v.name, url: v.url})))
        } catch (e) {
            console.log(e)
        }
    }
    const fetch = (value: string) => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        if (value) {
            timeout = setTimeout(() => fetchPeopleSearch(value), 300);
        } else {
            setOption([]);
        }
    }
    const onSearch = (value: string) => {
        void fetch(value)
    };
    const onChange = (value: string) => {
        setName(value)
    }

    return (
        <Select
            showSearch
            style={{width: '250px'}}
            placeholder="Select a person"
            optionFilterProp="children"
            onSearch={onSearch}
            onChange={onChange}
            defaultValue={name}
            value={name}
            defaultActiveFirstOption={false}
            filterOption={false}
            optionLabelProp="label"
        >
            {
                option.map((v) => (
                    <Option key={v.value} value={v.value} label={v.label}>
                        <Link to={`/peoples/${v.url.split('https://swapi.dev/api/people/')[1].split('')[0]}`}>{v.label}</Link>
                    </Option>
                    ))
            }
        </Select>
    );
};

export default SearchPeople;
