import axios, {AxiosResponse} from "axios";
import {PeoplesType} from "../../features/peoples";

export type PeopleApiResponse = {
    count: number;
    next: string;
    previous: null | string;
    results: PeoplesType[];
}

export type PeopleDataSource = {
    key: number,
    name: string,
    heights: string,
    mass: string,
    hairColor: string,
}

const baseURL = 'https://swapi.dev/api'
export const getPeoples = async (): Promise<AxiosResponse<PeopleApiResponse>> => await axios.get(`${baseURL}/people`)

export const getPeoplesByName = async (name: string): Promise<AxiosResponse<PeopleApiResponse>> => await axios.get(`${baseURL}/people/?search=${name}`)

export const getPeopleById = async (id: string): Promise<AxiosResponse<PeoplesType>> => await axios.get(`${baseURL}/people/${id}`)
