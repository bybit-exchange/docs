import { ApiMetadata, APIOptions, SidebarOptions } from "../types";
import { OpenApiObject, TagObject } from "./types";
interface OpenApiFiles {
    source: string;
    sourceDirName: string;
    data: OpenApiObject;
}
export declare function readOpenapiFiles(openapiPath: string, options: APIOptions): Promise<OpenApiFiles[]>;
export declare function processOpenapiFiles(files: OpenApiFiles[], sidebarOptions: SidebarOptions): Promise<[ApiMetadata[], TagObject[][]]>;
export declare function processOpenapiFile(openapiData: OpenApiObject, sidebarOptions: SidebarOptions): Promise<[ApiMetadata[], TagObject[]]>;
export declare function getTagDisplayName(tagName: string, tags: TagObject[]): string;
export {};
