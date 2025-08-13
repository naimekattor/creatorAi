"use client"

import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"

type User = {
  id: string
  email: string
  firstName?: string
  lastName?: string
  avatarUrl?: string
}

type AuthState = {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
  pendingEmail?: string
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  pendingEmail: undefined,
}

async function jsonFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
  })
  if (!res.ok) {
    const j = await res.json().catch(() => ({}))
    throw new Error(j.message || `Request failed: ${res.status}`)
  }
  return res.json()
}

export const login = createAsyncThunk("auth/login", async (payload: { email: string; password: string }) => {
  return jsonFetch<{ user: User; token: string }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  })
})

export const register = createAsyncThunk(
  "auth/register",
  async (payload: {
    firstName: string
    lastName: string
    email: string
    password: string
  }) => {
    return jsonFetch<{ message: string; email: string }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    })
  },
)

export const forgotPassword = createAsyncThunk("auth/forgotPassword", async (payload: { email: string }) => {
  return jsonFetch<{ message: string; email: string }>("/api/auth/forgot", {
    method: "POST",
    body: JSON.stringify(payload),
  })
})

export const verifyCode = createAsyncThunk("auth/verifyCode", async (payload: { email: string; code: string }) => {
  return jsonFetch<{ message: string }>("/api/auth/verify", {
    method: "POST",
    body: JSON.stringify(payload),
  })
})

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (payload: { email: string; password: string }) => {
    return jsonFetch<{ message: string }>("/api/auth/reset", {
      method: "POST",
      body: JSON.stringify(payload),
    })
  },
)

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPendingEmail(state, action: PayloadAction<string | undefined>) {
      state.pendingEmail = action.payload
    },
    logout(state) {
      state.user = null
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (s) => {
        s.isLoading = true
        s.error = null
      })
      .addCase(login.fulfilled, (s, a) => {
        s.isLoading = false
        s.user = a.payload.user
        s.token = a.payload.token
        s.error = null
      })
      .addCase(login.rejected, (s, a) => {
        s.isLoading = false
        s.error = a.error.message || "Login failed"
      })

      .addCase(register.pending, (s) => {
        s.isLoading = true
        s.error = null
      })
      .addCase(register.fulfilled, (s, a) => {
        s.isLoading = false
        s.pendingEmail = a.payload.email
      })
      .addCase(register.rejected, (s, a) => {
        s.isLoading = false
        s.error = a.error.message || "Register failed"
      })

      .addCase(forgotPassword.pending, (s) => {
        s.isLoading = true
        s.error = null
      })
      .addCase(forgotPassword.fulfilled, (s, a) => {
        s.isLoading = false
        s.pendingEmail = a.payload.email
      })
      .addCase(forgotPassword.rejected, (s, a) => {
        s.isLoading = false
        s.error = a.error.message || "Request failed"
      })

      .addCase(verifyCode.pending, (s) => {
        s.isLoading = true
        s.error = null
      })
      .addCase(verifyCode.fulfilled, (s) => {
        s.isLoading = false
      })
      .addCase(verifyCode.rejected, (s, a) => {
        s.isLoading = false
        s.error = a.error.message || "Invalid code"
      })

      .addCase(resetPassword.pending, (s) => {
        s.isLoading = true
        s.error = null
      })
      .addCase(resetPassword.fulfilled, (s) => {
        s.isLoading = false
      })
      .addCase(resetPassword.rejected, (s, a) => {
        s.isLoading = false
        s.error = a.error.message || "Reset failed"
      })
  },
})

export const { logout, setPendingEmail } = slice.actions
export default slice.reducer
