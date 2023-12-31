/* tslint:disable */
/* eslint-disable */
/**
 * TechCell RESTful API Documentations
 * This is the documentation for the TechCell RESTful API.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: teams@techcell.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { CreateKpiRequestDTO } from '../models';
// @ts-ignore
import { KpiDTO } from '../models';
// @ts-ignore
import { ListKpisResponseDTO } from '../models';
// @ts-ignore
import { UpdateKpiRequestDTO } from '../models';
/**
 * KpiApi - axios parameter creator
 * @export
 */
export const KpiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create kpi
         * @param {CreateKpiRequestDTO} createKpiRequestDTO 
         * @param {CreateKpiXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createKpi: async (createKpiRequestDTO: CreateKpiRequestDTO, xLang?: CreateKpiXLangEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createKpiRequestDTO' is not null or undefined
            assertParamExists('createKpi', 'createKpiRequestDTO', createKpiRequestDTO)
            const localVarPath = `/kpi`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (xLang != null) {
                localVarHeaderParameter['x-lang'] = String(xLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createKpiRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get kpi
         * @param {string} id A valid mongodb id
         * @param {GetKpiXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKpi: async (id: string, xLang?: GetKpiXLangEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getKpi', 'id', id)
            const localVarPath = `/kpi/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (xLang != null) {
                localVarHeaderParameter['x-lang'] = String(xLang);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get kpis
         * @param {number} [page] Page number
         * @param {number} [pageSize] Number of items per page
         * @param {string} [name] KPI name
         * @param {GetKpisKpiTypeEnum} [kpiType] KPI type
         * @param {string} [startDate] KPI start date
         * @param {string} [endDate] KPI end date
         * @param {GetKpisXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKpis: async (page?: number, pageSize?: number, name?: string, kpiType?: GetKpisKpiTypeEnum, startDate?: string, endDate?: string, xLang?: GetKpisXLangEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/kpi`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (kpiType !== undefined) {
                localVarQueryParameter['kpiType'] = kpiType;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString() :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString() :
                    endDate;
            }

            if (xLang != null) {
                localVarHeaderParameter['x-lang'] = String(xLang);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update kpi
         * @param {string} id A valid mongodb id
         * @param {UpdateKpiRequestDTO} updateKpiRequestDTO 
         * @param {UpdateKpiXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateKpi: async (id: string, updateKpiRequestDTO: UpdateKpiRequestDTO, xLang?: UpdateKpiXLangEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateKpi', 'id', id)
            // verify required parameter 'updateKpiRequestDTO' is not null or undefined
            assertParamExists('updateKpi', 'updateKpiRequestDTO', updateKpiRequestDTO)
            const localVarPath = `/kpi/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (xLang != null) {
                localVarHeaderParameter['x-lang'] = String(xLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateKpiRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * KpiApi - functional programming interface
 * @export
 */
export const KpiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = KpiApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create kpi
         * @param {CreateKpiRequestDTO} createKpiRequestDTO 
         * @param {CreateKpiXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createKpi(createKpiRequestDTO: CreateKpiRequestDTO, xLang?: CreateKpiXLangEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KpiDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createKpi(createKpiRequestDTO, xLang, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['KpiApi.createKpi']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get kpi
         * @param {string} id A valid mongodb id
         * @param {GetKpiXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getKpi(id: string, xLang?: GetKpiXLangEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KpiDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getKpi(id, xLang, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['KpiApi.getKpi']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get kpis
         * @param {number} [page] Page number
         * @param {number} [pageSize] Number of items per page
         * @param {string} [name] KPI name
         * @param {GetKpisKpiTypeEnum} [kpiType] KPI type
         * @param {string} [startDate] KPI start date
         * @param {string} [endDate] KPI end date
         * @param {GetKpisXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getKpis(page?: number, pageSize?: number, name?: string, kpiType?: GetKpisKpiTypeEnum, startDate?: string, endDate?: string, xLang?: GetKpisXLangEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListKpisResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getKpis(page, pageSize, name, kpiType, startDate, endDate, xLang, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['KpiApi.getKpis']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Update kpi
         * @param {string} id A valid mongodb id
         * @param {UpdateKpiRequestDTO} updateKpiRequestDTO 
         * @param {UpdateKpiXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateKpi(id: string, updateKpiRequestDTO: UpdateKpiRequestDTO, xLang?: UpdateKpiXLangEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KpiDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateKpi(id, updateKpiRequestDTO, xLang, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['KpiApi.updateKpi']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * KpiApi - factory interface
 * @export
 */
export const KpiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = KpiApiFp(configuration)
    return {
        /**
         * 
         * @summary Create kpi
         * @param {KpiApiCreateKpiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createKpi(requestParameters: KpiApiCreateKpiRequest, options?: AxiosRequestConfig): AxiosPromise<KpiDTO> {
            return localVarFp.createKpi(requestParameters.createKpiRequestDTO, requestParameters.xLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get kpi
         * @param {KpiApiGetKpiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKpi(requestParameters: KpiApiGetKpiRequest, options?: AxiosRequestConfig): AxiosPromise<KpiDTO> {
            return localVarFp.getKpi(requestParameters.id, requestParameters.xLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get kpis
         * @param {KpiApiGetKpisRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKpis(requestParameters: KpiApiGetKpisRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ListKpisResponseDTO> {
            return localVarFp.getKpis(requestParameters.page, requestParameters.pageSize, requestParameters.name, requestParameters.kpiType, requestParameters.startDate, requestParameters.endDate, requestParameters.xLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update kpi
         * @param {KpiApiUpdateKpiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateKpi(requestParameters: KpiApiUpdateKpiRequest, options?: AxiosRequestConfig): AxiosPromise<KpiDTO> {
            return localVarFp.updateKpi(requestParameters.id, requestParameters.updateKpiRequestDTO, requestParameters.xLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createKpi operation in KpiApi.
 * @export
 * @interface KpiApiCreateKpiRequest
 */
export interface KpiApiCreateKpiRequest {
    /**
     * 
     * @type {CreateKpiRequestDTO}
     * @memberof KpiApiCreateKpi
     */
    readonly createKpiRequestDTO: CreateKpiRequestDTO

    /**
     * The language of the response
     * @type {'en' | 'vi_VN'}
     * @memberof KpiApiCreateKpi
     */
    readonly xLang?: CreateKpiXLangEnum
}

/**
 * Request parameters for getKpi operation in KpiApi.
 * @export
 * @interface KpiApiGetKpiRequest
 */
export interface KpiApiGetKpiRequest {
    /**
     * A valid mongodb id
     * @type {string}
     * @memberof KpiApiGetKpi
     */
    readonly id: string

    /**
     * The language of the response
     * @type {'en' | 'vi_VN'}
     * @memberof KpiApiGetKpi
     */
    readonly xLang?: GetKpiXLangEnum
}

/**
 * Request parameters for getKpis operation in KpiApi.
 * @export
 * @interface KpiApiGetKpisRequest
 */
export interface KpiApiGetKpisRequest {
    /**
     * Page number
     * @type {number}
     * @memberof KpiApiGetKpis
     */
    readonly page?: number

    /**
     * Number of items per page
     * @type {number}
     * @memberof KpiApiGetKpis
     */
    readonly pageSize?: number

    /**
     * KPI name
     * @type {string}
     * @memberof KpiApiGetKpis
     */
    readonly name?: string

    /**
     * KPI type
     * @type {'revenue' | 'order_complete'}
     * @memberof KpiApiGetKpis
     */
    readonly kpiType?: GetKpisKpiTypeEnum

    /**
     * KPI start date
     * @type {string}
     * @memberof KpiApiGetKpis
     */
    readonly startDate?: string

    /**
     * KPI end date
     * @type {string}
     * @memberof KpiApiGetKpis
     */
    readonly endDate?: string

    /**
     * The language of the response
     * @type {'en' | 'vi_VN'}
     * @memberof KpiApiGetKpis
     */
    readonly xLang?: GetKpisXLangEnum
}

/**
 * Request parameters for updateKpi operation in KpiApi.
 * @export
 * @interface KpiApiUpdateKpiRequest
 */
export interface KpiApiUpdateKpiRequest {
    /**
     * A valid mongodb id
     * @type {string}
     * @memberof KpiApiUpdateKpi
     */
    readonly id: string

    /**
     * 
     * @type {UpdateKpiRequestDTO}
     * @memberof KpiApiUpdateKpi
     */
    readonly updateKpiRequestDTO: UpdateKpiRequestDTO

    /**
     * The language of the response
     * @type {'en' | 'vi_VN'}
     * @memberof KpiApiUpdateKpi
     */
    readonly xLang?: UpdateKpiXLangEnum
}

/**
 * KpiApi - object-oriented interface
 * @export
 * @class KpiApi
 * @extends {BaseAPI}
 */
export class KpiApi extends BaseAPI {
    /**
     * 
     * @summary Create kpi
     * @param {KpiApiCreateKpiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KpiApi
     */
    public createKpi(requestParameters: KpiApiCreateKpiRequest, options?: AxiosRequestConfig) {
        return KpiApiFp(this.configuration).createKpi(requestParameters.createKpiRequestDTO, requestParameters.xLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get kpi
     * @param {KpiApiGetKpiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KpiApi
     */
    public getKpi(requestParameters: KpiApiGetKpiRequest, options?: AxiosRequestConfig) {
        return KpiApiFp(this.configuration).getKpi(requestParameters.id, requestParameters.xLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get kpis
     * @param {KpiApiGetKpisRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KpiApi
     */
    public getKpis(requestParameters: KpiApiGetKpisRequest = {}, options?: AxiosRequestConfig) {
        return KpiApiFp(this.configuration).getKpis(requestParameters.page, requestParameters.pageSize, requestParameters.name, requestParameters.kpiType, requestParameters.startDate, requestParameters.endDate, requestParameters.xLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update kpi
     * @param {KpiApiUpdateKpiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KpiApi
     */
    public updateKpi(requestParameters: KpiApiUpdateKpiRequest, options?: AxiosRequestConfig) {
        return KpiApiFp(this.configuration).updateKpi(requestParameters.id, requestParameters.updateKpiRequestDTO, requestParameters.xLang, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
  * @export
  * @enum {string}
  */
export enum CreateKpiXLangEnum {
    En = 'en',
    ViVn = 'vi_VN'
}
/**
  * @export
  * @enum {string}
  */
export enum GetKpiXLangEnum {
    En = 'en',
    ViVn = 'vi_VN'
}
/**
  * @export
  * @enum {string}
  */
export enum GetKpisKpiTypeEnum {
    Revenue = 'revenue',
    OrderComplete = 'order_complete'
}
/**
  * @export
  * @enum {string}
  */
export enum GetKpisXLangEnum {
    En = 'en',
    ViVn = 'vi_VN'
}
/**
  * @export
  * @enum {string}
  */
export enum UpdateKpiXLangEnum {
    En = 'en',
    ViVn = 'vi_VN'
}
