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


// May contain unused imports in some cases
// @ts-ignore
import { Readiness200ResponseInfoValue } from './readiness200-response-info-value';

/**
 * 
 * @export
 * @interface Readiness503Response
 */
export interface Readiness503Response {
    /**
     * 
     * @type {string}
     * @memberof Readiness503Response
     */
    'status'?: string;
    /**
     * 
     * @type {{ [key: string]: Readiness200ResponseInfoValue; }}
     * @memberof Readiness503Response
     */
    'info'?: { [key: string]: Readiness200ResponseInfoValue; } | null;
    /**
     * 
     * @type {{ [key: string]: Readiness200ResponseInfoValue; }}
     * @memberof Readiness503Response
     */
    'error'?: { [key: string]: Readiness200ResponseInfoValue; } | null;
    /**
     * 
     * @type {{ [key: string]: Readiness200ResponseInfoValue; }}
     * @memberof Readiness503Response
     */
    'details'?: { [key: string]: Readiness200ResponseInfoValue; };
}

