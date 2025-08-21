"use client";

import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  pendingEmail?: string;
  authFlow: "register" | "resetPassword" | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  pendingEmail: undefined,
  authFlow: null,
};

async function jsonFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const fullUrl = `${API_BASE_URL}${url}`;
  const res = await fetch(fullUrl, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
  });
  if (!res.ok) {
    const j = await res.json().catch(() => ({}));
    throw new Error(j.message || `Request failed: ${res.status}`);
  }
  return res.json();
}

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }) => {
    return jsonFetch<{ user: User; token: string }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    return jsonFetch<{ message: string; email: string }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (payload: { email: string }) => {
    return jsonFetch<{ message: string; email: string }>(
      "/api/auth/forgot-password",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
  }
);

export const verifyCode = createAsyncThunk(
  "auth/verifyCode",
  async (payload: { email: string; code: string }) => {
    return jsonFetch<{ message: string }>("/api/auth/verify-email", {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        verificationCode: payload.code,
      }),
    });
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (payload: { email: string; password: string }) => {
    return jsonFetch<{ message: string }>("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }
);

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPendingEmail(state, action: PayloadAction<string | undefined>) {
      state.pendingEmail = action.payload;
    },
    setAuthFlow(
      state,
      action: PayloadAction<"register" | "resetPassword" | null>
    ) {
      state.authFlow = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.authFlow = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (s) => {
        s.isLoading = true;
        s.error = null;
      })
      .addCase(register.fulfilled, (s) => {
        s.isLoading = false;
      })
      .addCase(register.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.error.message || "Register failed";
      })

      .addCase(forgotPassword.pending, (s) => {
        s.isLoading = true;
        s.error = null;
      })
      .addCase(forgotPassword.fulfilled, (s) => {
        s.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.error.message || "Request failed";
      })

      .addCase(verifyCode.pending, (s) => {
        s.isLoading = true;
        s.error = null;
      })
      .addCase(verifyCode.fulfilled, (s, a: any) => {
        s.isLoading = false;

        if (a.payload.user && a.payload.token) {
          s.user = a.payload.user;
          s.token = a.payload.token;
        }
      })
      .addCase(verifyCode.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.error.message || "Invalid code";
      })

      .addCase(resetPassword.pending, (s) => {
        s.isLoading = true;
        s.error = null;
      })
      .addCase(resetPassword.fulfilled, (s) => {
        s.isLoading = false;
      })
      .addCase(resetPassword.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.error.message || "Reset failed";
      });
  },
});

export const { logout, setPendingEmail, setAuthFlow } = slice.actions;
export default slice.reducer;
