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
import { BlockActivitySchemaDTO } from './block-activity-schema-dto';

/**
 * 
 * @export
 * @interface BlockSchemaDTO
 */
export interface BlockSchemaDTO {
    /**
     * Whether the user is blocked or not
     * @type {boolean}
     * @memberof BlockSchemaDTO
     */
    'isBlocked': boolean;
    /**
     * An array of activities performed on the user
     * @type {Array<BlockActivitySchemaDTO>}
     * @memberof BlockSchemaDTO
     */
    'activityLogs': Array<BlockActivitySchemaDTO>;
}
