import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import donationService from './donationService'

const initialState = {
    donations: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get user goals
export const getDonations = createAsyncThunk(
    'goals/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await donationService.getDonations(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder

            .addCase(getDonations.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getDonations.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.donations = action.payload
            })
            .addCase(getDonations.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
