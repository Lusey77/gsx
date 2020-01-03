import { ODataMetadata } from "./odata-metadata";

export type ODataResponse<T extends {}> = T & ODataMetadata;
