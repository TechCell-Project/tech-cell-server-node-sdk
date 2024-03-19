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
 * @interface ProductImageDTO
 */
export interface ProductImageDTO {
    /**
     * Public Id of the image
     * @type {string}
     * @memberof ProductImageDTO
     */
    'publicId': string;
    /**
     * Url of image
     * @type {string}
     * @memberof ProductImageDTO
     */
    'url': string;
    /**
     * Is image thumbnail?
     * @type {boolean}
     * @memberof ProductImageDTO
     */
    'isThumbnail'?: boolean;
}
