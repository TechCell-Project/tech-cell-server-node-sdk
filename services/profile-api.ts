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
import { UpdateUserAddressRequestDTO } from '../models';
// @ts-ignore
import { UpdateUserRequestDTO } from '../models';
// @ts-ignore
import { UserMntResponseDTO } from '../models';
/**
 * ProfileApi - axios parameter creator
 * @export
 */
export const ProfileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get current user info
         * @summary Get current user info
         * @param {GetProfileXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile: async (xLang?: GetProfileXLangEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/profile`;
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
         * Update current user address
         * @summary Update current user address
         * @param {UpdateUserAddressRequestDTO} updateUserAddressRequestDTO 
         * @param {UpdateUserAddressXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserAddress: async (updateUserAddressRequestDTO: UpdateUserAddressRequestDTO, xLang?: UpdateUserAddressXLangEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateUserAddressRequestDTO' is not null or undefined
            assertParamExists('updateUserAddress', 'updateUserAddressRequestDTO', updateUserAddressRequestDTO)
            const localVarPath = `/profile/address`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateUserAddressRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update current user info
         * @summary Update current user info
         * @param {UpdateUserRequestDTO} updateUserRequestDTO 
         * @param {UpdateUserInfoXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserInfo: async (updateUserRequestDTO: UpdateUserRequestDTO, xLang?: UpdateUserInfoXLangEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateUserRequestDTO' is not null or undefined
            assertParamExists('updateUserInfo', 'updateUserRequestDTO', updateUserRequestDTO)
            const localVarPath = `/profile/info`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateUserRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfileApi - functional programming interface
 * @export
 */
export const ProfileApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProfileApiAxiosParamCreator(configuration)
    return {
        /**
         * Get current user info
         * @summary Get current user info
         * @param {GetProfileXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfile(xLang?: GetProfileXLangEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserMntResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfile(xLang, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProfileApi.getProfile']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Update current user address
         * @summary Update current user address
         * @param {UpdateUserAddressRequestDTO} updateUserAddressRequestDTO 
         * @param {UpdateUserAddressXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserAddress(updateUserAddressRequestDTO: UpdateUserAddressRequestDTO, xLang?: UpdateUserAddressXLangEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserMntResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserAddress(updateUserAddressRequestDTO, xLang, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProfileApi.updateUserAddress']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Update current user info
         * @summary Update current user info
         * @param {UpdateUserRequestDTO} updateUserRequestDTO 
         * @param {UpdateUserInfoXLangEnum} [xLang] The language of the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserInfo(updateUserRequestDTO: UpdateUserRequestDTO, xLang?: UpdateUserInfoXLangEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserMntResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserInfo(updateUserRequestDTO, xLang, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ProfileApi.updateUserInfo']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ProfileApi - factory interface
 * @export
 */
export const ProfileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProfileApiFp(configuration)
    return {
        /**
         * Get current user info
         * @summary Get current user info
         * @param {ProfileApiGetProfileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile(requestParameters: ProfileApiGetProfileRequest = {}, options?: AxiosRequestConfig): AxiosPromise<UserMntResponseDTO> {
            return localVarFp.getProfile(requestParameters.xLang, options).then((request) => request(axios, basePath));
        },
        /**
         * Update current user address
         * @summary Update current user address
         * @param {ProfileApiUpdateUserAddressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserAddress(requestParameters: ProfileApiUpdateUserAddressRequest, options?: AxiosRequestConfig): AxiosPromise<UserMntResponseDTO> {
            return localVarFp.updateUserAddress(requestParameters.updateUserAddressRequestDTO, requestParameters.xLang, options).then((request) => request(axios, basePath));
        },
        /**
         * Update current user info
         * @summary Update current user info
         * @param {ProfileApiUpdateUserInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserInfo(requestParameters: ProfileApiUpdateUserInfoRequest, options?: AxiosRequestConfig): AxiosPromise<UserMntResponseDTO> {
            return localVarFp.updateUserInfo(requestParameters.updateUserRequestDTO, requestParameters.xLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getProfile operation in ProfileApi.
 * @export
 * @interface ProfileApiGetProfileRequest
 */
export interface ProfileApiGetProfileRequest {
    /**
     * The language of the response
     * @type {'en' | 'vi_VN'}
     * @memberof ProfileApiGetProfile
     */
    readonly xLang?: GetProfileXLangEnum
}

/**
 * Request parameters for updateUserAddress operation in ProfileApi.
 * @export
 * @interface ProfileApiUpdateUserAddressRequest
 */
export interface ProfileApiUpdateUserAddressRequest {
    /**
     * 
     * @type {UpdateUserAddressRequestDTO}
     * @memberof ProfileApiUpdateUserAddress
     */
    readonly updateUserAddressRequestDTO: UpdateUserAddressRequestDTO

    /**
     * The language of the response
     * @type {'en' | 'vi_VN'}
     * @memberof ProfileApiUpdateUserAddress
     */
    readonly xLang?: UpdateUserAddressXLangEnum
}

/**
 * Request parameters for updateUserInfo operation in ProfileApi.
 * @export
 * @interface ProfileApiUpdateUserInfoRequest
 */
export interface ProfileApiUpdateUserInfoRequest {
    /**
     * 
     * @type {UpdateUserRequestDTO}
     * @memberof ProfileApiUpdateUserInfo
     */
    readonly updateUserRequestDTO: UpdateUserRequestDTO

    /**
     * The language of the response
     * @type {'en' | 'vi_VN'}
     * @memberof ProfileApiUpdateUserInfo
     */
    readonly xLang?: UpdateUserInfoXLangEnum
}

/**
 * ProfileApi - object-oriented interface
 * @export
 * @class ProfileApi
 * @extends {BaseAPI}
 */
export class ProfileApi extends BaseAPI {
    /**
     * Get current user info
     * @summary Get current user info
     * @param {ProfileApiGetProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public getProfile(requestParameters: ProfileApiGetProfileRequest = {}, options?: AxiosRequestConfig) {
        return ProfileApiFp(this.configuration).getProfile(requestParameters.xLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update current user address
     * @summary Update current user address
     * @param {ProfileApiUpdateUserAddressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public updateUserAddress(requestParameters: ProfileApiUpdateUserAddressRequest, options?: AxiosRequestConfig) {
        return ProfileApiFp(this.configuration).updateUserAddress(requestParameters.updateUserAddressRequestDTO, requestParameters.xLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update current user info
     * @summary Update current user info
     * @param {ProfileApiUpdateUserInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public updateUserInfo(requestParameters: ProfileApiUpdateUserInfoRequest, options?: AxiosRequestConfig) {
        return ProfileApiFp(this.configuration).updateUserInfo(requestParameters.updateUserRequestDTO, requestParameters.xLang, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
  * @export
  * @enum {string}
  */
export enum GetProfileXLangEnum {
    En = 'en',
    ViVn = 'vi_VN'
}
/**
  * @export
  * @enum {string}
  */
export enum UpdateUserAddressXLangEnum {
    En = 'en',
    ViVn = 'vi_VN'
}
/**
  * @export
  * @enum {string}
  */
export enum UpdateUserInfoXLangEnum {
    En = 'en',
    ViVn = 'vi_VN'
}
