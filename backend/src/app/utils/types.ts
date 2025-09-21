export interface AppError extends Error {
  statusCode?: number;
  errors?: { message: string }[]; // for ZodError-like structure
}
