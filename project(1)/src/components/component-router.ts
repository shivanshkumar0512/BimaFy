// Component Router - Clean TypeScript Implementation
// This file provides a complete component management API structure

// Type definitions
interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user' | 'developer';
  permissions: string[];
  createdAt: Date;
  lastLogin?: Date;
}

interface ComponentData {
  id: string;
  name: string;
  version: string;
  description: string;
  type: 'react' | 'vue' | 'angular' | 'web-component';
  category: string;
  tags: string[];
  props?: Record<string, unknown>;
  dependencies: string[];
  author: User;
  status: 'draft' | 'published' | 'deprecated';
  visibility: 'public' | 'private' | 'organization';
  createdAt: Date;
  updatedAt: Date;
  downloadCount: number;
  rating: number;
  reviews: number;
}

interface ApiRequest {
  user?: User;
  component?: ComponentData;
  params: Record<string, string>;
  query: Record<string, unknown>;
  body: unknown;
  headers: Record<string, string>;
}

interface ApiResponse {
  json(data: unknown): void;
  status(code: number): ApiResponse;
  send(data?: unknown): void;
}

type NextFunction = (() => void) | undefined;

interface ComponentQuery {
  search?: string;
  category?: string;
  type?: string;
  tags?: string[];
  author?: string;
  status?: string;
  visibility?: string;
  sortBy?: 'name' | 'createdAt' | 'downloadCount' | 'rating';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

interface BulkOperation {
  operation: 'delete' | 'update' | 'publish' | 'unpublish';
  componentIds: string[];
  data?: Partial<ComponentData>;
}

interface CustomError extends Error {
  statusCode?: number;
  code?: string;
}

interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
  timestamp: string;
  path?: string;
}

// Mock Router class
class ComponentRouter {
  private routes: Array<{
    method: string;
    path: string;
    handlers: Array<(req: ApiRequest, res: ApiResponse, next?: NextFunction) => void>;
  }> = [];

  // HTTP methods
  get(path: string, ...handlers: Array<(req: ApiRequest, res: ApiResponse, next?: NextFunction) => void>): void {
    this.routes.push({ method: 'GET', path, handlers });
  }

  post(path: string, ...handlers: Array<(req: ApiRequest, res: ApiResponse, next?: NextFunction) => void>): void {
    this.routes.push({ method: 'POST', path, handlers });
  }

  put(path: string, ...handlers: Array<(req: ApiRequest, res: ApiResponse, next?: NextFunction) => void>): void {
    this.routes.push({ method: 'PUT', path, handlers });
  }

  delete(path: string, ...handlers: Array<(req: ApiRequest, res: ApiResponse, next?: NextFunction) => void>): void {
    this.routes.push({ method: 'DELETE', path, handlers });
  }

  patch(path: string, ...handlers: Array<(req: ApiRequest, res: ApiResponse, next?: NextFunction) => void>): void {
    this.routes.push({ method: 'PATCH', path, handlers });
  }

  use(pathOrHandler: string | ((error: CustomError, req: ApiRequest, res: ApiResponse, next?: NextFunction) => void), ...handlers: Array<(req: ApiRequest, res: ApiResponse, next?: NextFunction) => void>): void {
    if (typeof pathOrHandler === 'string') {
      this.routes.push({ method: 'USE', path: pathOrHandler, handlers });
    } 
  }

  getRoutes(): Array<{ method: string; path: string; handlers: Array<(req: ApiRequest, res: ApiResponse, next?: NextFunction) => void> }> {
    return this.routes;
  }
}

// Middleware functions
const authMiddleware = (req: ApiRequest, _res: ApiResponse, next?: NextFunction): void => {
  // Mock authentication logic
  const token = req.headers.authorization;
  if (!token) {
    throw new Error('Authentication required');
  }
  
  // Mock user data
  req.user = {
    id: '1',
    username: 'testuser',
    email: 'test@example.com',
    role: 'user',
    permissions: ['read', 'write'],
    createdAt: new Date(),
    lastLogin: new Date()
  };
  
  if (next) next();
};

const validateComponent = (req: ApiRequest, _res: ApiResponse, next?: NextFunction): void => {
  const body = req.body as { name?: string; version?: string; type?: string };
  const { name, version, type } = body;
  
  if (!name || !version || !type) {
    throw new Error('Missing required fields: name, version, type');
  }
  
  if (!['react', 'vue', 'angular', 'web-component'].includes(type)) {
    throw new Error('Invalid component type');
  }
  
  if (next) next();
};

const checkPermissions = (permission: string) => {
  return (req: ApiRequest, _res: ApiResponse, next?: NextFunction): void => {
    if (!req.user?.permissions.includes(permission)) {
      throw new Error('Insufficient permissions');
    }
    if (next) next();
  };
};

// Error handler
const errorHandler = (error: CustomError, _req: ApiRequest, res: ApiResponse): void => {
  const errorResponse: ErrorResponse = {
    error: error.name || 'Error',
    message: error.message || 'An error occurred',
    statusCode: error.statusCode || 500,
    timestamp: new Date().toISOString(),
    path: _req.params?.path
  };
  
  res.status(errorResponse.statusCode).json(errorResponse);
};

// Create router instance
const router = new ComponentRouter();

// Route handlers
const getComponents = (req: ApiRequest, res: ApiResponse): void => {
  const query: ComponentQuery = req.query;
  
  // Mock component data
  const components: ComponentData[] = [
    {
      id: '1',
      name: 'Button Component',
      version: '1.0.0',
      description: 'A reusable button component',
      type: 'react',
      category: 'UI',
      tags: ['button', 'ui', 'interactive'],
      dependencies: ['react'],
      author: req.user!,
      status: 'published',
      visibility: 'public',
      createdAt: new Date(),
      updatedAt: new Date(),
      downloadCount: 150,
      rating: 4.5,
      reviews: 23
    }
  ];
  
  res.json({
    success: true,
    data: components,
    total: components.length,
    page: query.page || 1,
    limit: query.limit || 10
  });
};

const getComponentById = (req: ApiRequest, res: ApiResponse): void => {
  const { id } = req.params;
  
  // Mock finding component
  const component: ComponentData = {
    id,
    name: 'Sample Component',
    version: '1.0.0',
    description: 'A sample component',
    type: 'react',
    category: 'UI',
    tags: ['sample'],
    dependencies: ['react'],
    author: req.user!,
    status: 'published',
    visibility: 'public',
    createdAt: new Date(),
    updatedAt: new Date(),
    downloadCount: 100,
    rating: 4.0,
    reviews: 15
  };
  
  res.json({
    success: true,
    data: component
  });
};

const createComponent = (req: ApiRequest, res: ApiResponse): void => {
  const componentData = req.body as Partial<ComponentData>;
  
  // Mock creating component
  const newComponent: ComponentData = {
    id: Date.now().toString(),
    name: componentData.name || 'New Component',
    version: componentData.version || '1.0.0',
    description: componentData.description || 'A new component',
    type: componentData.type || 'react',
    category: componentData.category || 'UI',
    tags: componentData.tags || [],
    dependencies: componentData.dependencies || ['react'],
    author: req.user!,
    status: 'draft' as const,
    visibility: 'private' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
    downloadCount: 0,
    rating: 0,
    reviews: 0
  };
  
  res.status(201).json({
    success: true,
    data: newComponent,
    message: 'Component created successfully'
  });
};

const updateComponent = (req: ApiRequest, res: ApiResponse): void => {
  const { id } = req.params;
  const updates = req.body as Partial<ComponentData>;
  
  // Mock updating component
  const updatedComponent: ComponentData = {
    id,
    name: updates.name || 'Updated Component',
    version: updates.version || '1.1.0',
    description: updates.description || 'An updated component',
    type: updates.type || 'react',
    category: updates.category || 'UI',
    tags: updates.tags || ['updated'],
    dependencies: updates.dependencies || ['react'],
    author: req.user!,
    status: updates.status || 'published',
    visibility: updates.visibility || 'public',
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    updatedAt: new Date(),
    downloadCount: updates.downloadCount || 200,
    rating: updates.rating || 4.2,
    reviews: updates.reviews || 30
  };
  
  res.json({
    success: true,
    data: updatedComponent,
    message: 'Component updated successfully'
  });
};

const deleteComponent = (req: ApiRequest, res: ApiResponse): void => {
  const { id } = req.params;
  
  // Mock deleting component
  res.json({
    success: true,
    message: `Component ${id} deleted successfully`
  });
};

const searchComponents = (req: ApiRequest, res: ApiResponse): void => {
  const { q } = req.query;
  
  // Mock search results
  const results: ComponentData[] = [];
  
  res.json({
    success: true,
    data: results,
    query: q,
    total: results.length
  });
};

const getComponentVersions = (req: ApiRequest, res: ApiResponse): void => {
  const { id } = req.params;
  
  // Mock version data
  const versions = [
    { version: '1.0.0', createdAt: new Date(Date.now() - 172800000) }, // 2 days ago
    { version: '1.1.0', createdAt: new Date(Date.now() - 86400000) },  // 1 day ago
    { version: '1.2.0', createdAt: new Date() }                        // now
  ];
  
  res.json({
    success: true,
    data: versions,
    componentId: id
  });
};

const publishComponent = (req: ApiRequest, res: ApiResponse): void => {
  const { id } = req.params;
  
  res.json({
    success: true,
    message: `Component ${id} published successfully`
  });
};

const unpublishComponent = (req: ApiRequest, res: ApiResponse): void => {
  const { id } = req.params;
  
  res.json({
    success: true,
    message: `Component ${id} unpublished successfully`
  });
};

const bulkOperations = (req: ApiRequest, res: ApiResponse): void => {
  const operation = req.body as BulkOperation;
  
  res.json({
    success: true,
    message: `Bulk ${operation.operation} completed for ${operation.componentIds.length} components`
  });
};

const getAnalytics = (req: ApiRequest, res: ApiResponse): void => {
  const { id } = req.params;
  
  // Mock analytics data
  const analytics = {
    componentId: id,
    downloads: {
      total: 1500,
      lastMonth: 300,
      lastWeek: 75
    },
    views: {
      total: 5000,
      lastMonth: 1200,
      lastWeek: 280
    },
    ratings: {
      average: 4.3,
      total: 67,
      distribution: {
        5: 35,
        4: 20,
        3: 8,
        2: 3,
        1: 1
      }
    }
  };
  
  res.json({
    success: true,
    data: analytics
  });
};

// Define routes
router.get('/components', authMiddleware, getComponents);
router.get('/components/search', authMiddleware, searchComponents);
router.get('/components/:id', authMiddleware, getComponentById);
router.get('/components/:id/versions', authMiddleware, getComponentVersions);
router.get('/components/:id/analytics', authMiddleware, checkPermissions('analytics'), getAnalytics);

router.post('/components', authMiddleware, validateComponent, checkPermissions('create'), createComponent);
router.post('/components/bulk', authMiddleware, checkPermissions('admin'), bulkOperations);

router.put('/components/:id', authMiddleware, validateComponent, checkPermissions('update'), updateComponent);
router.patch('/components/:id/publish', authMiddleware, checkPermissions('publish'), publishComponent);
router.patch('/components/:id/unpublish', authMiddleware, checkPermissions('publish'), unpublishComponent);

router.delete('/components/:id', authMiddleware, checkPermissions('delete'), deleteComponent);

// Error handling
router.use(errorHandler);

// Export the router
export default router;
export type { ComponentRouter, User, ComponentData, ApiRequest, ApiResponse, ComponentQuery, BulkOperation };