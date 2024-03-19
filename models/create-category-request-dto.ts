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
 * @interface CreateCategoryRequestDTO
 */
export interface CreateCategoryRequestDTO {
    /**
     * Name of category
     * @type {string}
     * @memberof CreateCategoryRequestDTO
     */
    'name': string;
    /**
     * Label of category, keep in lowercase and no space, can use underscore (\'_\')
     * @type {string}
     * @memberof CreateCategoryRequestDTO
     */
    'label': string;
    /**
     * Description of category
     * @type {string}
     * @memberof CreateCategoryRequestDTO
     */
    'description': string;
    /**
     * Url of category
     * @type {string}
     * @memberof CreateCategoryRequestDTO
     */
    'url'?: string | null;
    /**
     * Attribute\'s label of category
     * @type {Array<string>}
     * @memberof CreateCategoryRequestDTO
     */
    'requireAttributes'?: Array<string>;
}
