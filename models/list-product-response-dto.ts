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
import { ProductDTO } from './product-dto';

/**
 * 
 * @export
 * @interface ListProductResponseDTO
 */
export interface ListProductResponseDTO {
    /**
     * Page number
     * @type {number}
     * @memberof ListProductResponseDTO
     */
    'page': number;
    /**
     * Page size
     * @type {number}
     * @memberof ListProductResponseDTO
     */
    'pageSize': number;
    /**
     * Total page with page size
     * @type {number}
     * @memberof ListProductResponseDTO
     */
    'totalPage': number;
    /**
     * Total record with filter
     * @type {number}
     * @memberof ListProductResponseDTO
     */
    'totalRecord': number;
    /**
     * List of categories
     * @type {Array<ProductDTO>}
     * @memberof ListProductResponseDTO
     */
    'data': Array<ProductDTO>;
}

