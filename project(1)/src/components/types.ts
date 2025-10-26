// Type definitions for component router

export interface User {
  id: string;
  email: string;
  role: string;
}

export interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface Request {
  params: { [key: string]: string };
  query: { [key: string]: string | string[] };
  body: any;
  headers: { [key: string]: string };
  method: string;
  url: string;
  originalUrl: string;
  user?: User;
  component?: Component;
}

export interface Response {
  status: (code: number) => Response;
  json: (data: any) => Response;
  send: (data: any) => Response;
  set: (field: string, value: string) => Response;
}

export interface NextFunction {
  (error?: any): void;
}

export interface ComponentRequest extends Request {
  user?: User;
  component?: Component;
}

export interface CustomError extends Error {
  status?: number;
  stack?: string;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface ComponentQuery {
  category?: string;
  search?: string;
  tags?: string[];
  sortBy?: 'createdAt' | 'updatedAt' | 'name' | 'rating';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface BulkOperationData {
  name?: string;
  description?: string;
  category?: string;
  tags?: string[];
}

export interface BulkOperation {
  componentIds: string[];
  operation: 'delete' | 'update' | 'export';
  data?: BulkOperationData;
}