import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_kungshu_list = createAsyncThunk(
  "kungshus/api_v1_kungshu_list",
  async payload => {
    const response = await apiService.api_v1_kungshu_list(payload)
    return response.data
  }
)
export const api_v1_kungshu_create = createAsyncThunk(
  "kungshus/api_v1_kungshu_create",
  async payload => {
    const response = await apiService.api_v1_kungshu_create(payload)
    return response.data
  }
)
export const api_v1_kungshu_retrieve = createAsyncThunk(
  "kungshus/api_v1_kungshu_retrieve",
  async payload => {
    const response = await apiService.api_v1_kungshu_retrieve(payload)
    return response.data
  }
)
export const api_v1_kungshu_update = createAsyncThunk(
  "kungshus/api_v1_kungshu_update",
  async payload => {
    const response = await apiService.api_v1_kungshu_update(payload)
    return response.data
  }
)
export const api_v1_kungshu_partial_update = createAsyncThunk(
  "kungshus/api_v1_kungshu_partial_update",
  async payload => {
    const response = await apiService.api_v1_kungshu_partial_update(payload)
    return response.data
  }
)
export const api_v1_kungshu_destroy = createAsyncThunk(
  "kungshus/api_v1_kungshu_destroy",
  async payload => {
    const response = await apiService.api_v1_kungshu_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const kungshusSlice = createSlice({
  name: "kungshus",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_kungshu_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kungshu_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kungshu_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kungshu_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kungshu_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kungshu_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kungshu_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kungshu_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_kungshu_list,
  api_v1_kungshu_create,
  api_v1_kungshu_retrieve,
  api_v1_kungshu_update,
  api_v1_kungshu_partial_update,
  api_v1_kungshu_destroy,
  slice: kungshusSlice
}
