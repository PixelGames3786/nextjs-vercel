declare module 'multiparty' {
    import { IncomingMessage } from 'http';
  
    type Callback = (error: Error | null, fields: Record<string, any>, files: Record<string, any>) => void;
  
    export interface File {
      fieldName: string;
      originalFilename: string;
      path: string;
      headers: Record<string, string>;
      size: number;
    }
  
    export interface Options {
      uploadDir?: string;
      maxFields?: number;
      maxFieldsSize?: number;
      maxFilesSize?: number;
      keepExtensions?: boolean;
      encoding?: string;
    }
  
    export class Form {
      constructor(options?: Options);
      parse(req: IncomingMessage, callback: Callback): void;
    }
  }
  