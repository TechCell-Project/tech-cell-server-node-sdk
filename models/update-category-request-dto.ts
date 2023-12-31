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



/**
 * 
 * @export
 * @interface UpdateCategoryRequestDTO
 */
export interface UpdateCategoryRequestDTO {
    /**
     * 
     * @type {string}
     * @memberof UpdateCategoryRequestDTO
     */
    'description'?: string;
    /**
     * Attribute\'s label of category
     * @type {Array<string>}
     * @memberof UpdateCategoryRequestDTO
     */
    'requireAttributes'?: Array<string>;
}

