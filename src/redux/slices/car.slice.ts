import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IState {
    cars: ICar[]
}

const initialState: IState = {
    cars: []
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll()
        return data
    }
);

const createCar = createAsyncThunk<ICar, { car: ICar }>(
    'carSlice/createCar',
    async ({car}) => {
        const {data} = await carService.createCar(car);
        return data
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
    }
});


const {reducer: carReducer} = carSlice;
const carActions = {getAll, createCar}

export {carReducer, carActions}