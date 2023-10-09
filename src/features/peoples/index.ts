import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useAppSelector} from "../../utils/hooks/useAppSelector.ts";
import {PeopleDataSource} from "../../api/peoples";

export type PeoplesType = {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: any[]
    vehicles: string[]
    starships: string[]
    created: string
    edited: string
    url: string
}
export interface CounterState {
    peoples: PeopleDataSource[]
    peoplesFavourite: PeopleDataSource[]
}

const initialState: CounterState = {
    peoples: [],
    peoplesFavourite: []
}

export const peoplesSlice = createSlice({
    name: 'peoples',
    initialState,
    reducers: {
        setPeoples: (state, { payload }: PayloadAction<PeopleDataSource[]>) => {
            state.peoples = payload
        },
        setPeoplesFavourite: (state, { payload }: PayloadAction<PeopleDataSource[]>) => {
            state.peoplesFavourite = payload
        },
    },
})

export const { setPeoples, setPeoplesFavourite  } = peoplesSlice.actions

export const usePeoples = () => useAppSelector((store) => store.peoples.peoples)

export const usePeoplesFavourite = () => useAppSelector((store) => store.peoples.peoplesFavourite)