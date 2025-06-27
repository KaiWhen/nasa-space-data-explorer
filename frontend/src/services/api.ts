import type { ApiResponse } from "../types/api";

const API_URL: string =
  (import.meta.env.VITE_API_BASE_URL as string) ?? "http://localhost:3000";

export async function fetchNasaData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_URL}${url}`);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data: ApiResponse<T> = await response.json();
  return data;
}
