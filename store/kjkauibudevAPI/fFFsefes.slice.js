import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fffsefe_list = createAsyncThunk(
  "fFFsefes/api_v1_fffsefe_list",
  async payload => {
    const response = await apiService.api_v1_fffsefe_list(payload)
    return response.data
  }
)
export const api_v1_fffsefe_create = createAsyncThunk(
  "fFFsefes/api_v1_fffsefe_create",
  async payload => {
    const response = await apiService.api_v1_fffsefe_create(payload)
    return response.data
  }
)
export const api_v1_fffsefe_retrieve = createAsyncThunk(
  "fFFsefes/api_v1_fffsefe_retrieve",
  async payload => {
    const response = await apiService.api_v1_fffsefe_retrieve(payload)
    return response.data
  }
)
export const api_v1_fffsefe_update = createAsyncThunk(
  "fFFsefes/api_v1_fffsefe_update",
  async payload => {
    const response = await apiService.api_v1_fffsefe_update(payload)
    return response.data
  }
)
export const api_v1_fffsefe_partial_update = createAsyncThunk(
  "fFFsefes/api_v1_fffsefe_partial_update",
  async payload => {
    const response = await apiService.api_v1_fffsefe_partial_update(payload)
    return response.data
  }
)
export const api_v1_fffsefe_destroy = createAsyncThunk(
  "fFFsefes/api_v1_fffsefe_destroy",
  async payload => {
    const response = await apiService.api_v1_fffsefe_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fFFsefesSlice = createSlice({
  name: "fFFsefes",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_fffsefe_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fffsefe_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fffsefe_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fffsefe_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fffsefe_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fffsefe_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fffsefe_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fffsefe_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_fffsefe_list,
  api_v1_fffsefe_create,
  api_v1_fffsefe_retrieve,
  api_v1_fffsefe_update,
  api_v1_fffsefe_partial_update,
  api_v1_fffsefe_destroy,
  slice: fFFsefesSlice
}
