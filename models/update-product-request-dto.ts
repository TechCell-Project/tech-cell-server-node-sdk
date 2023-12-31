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
import { AttributeDTO } from './attribute-dto';
// May contain unused imports in some cases
// @ts-ignore
import { CategoryIdDTO } from './category-id-dto';
// May contain unused imports in some cases
// @ts-ignore
import { ImageRequestDTO } from './image-request-dto';
// May contain unused imports in some cases
// @ts-ignore
import { VariationRequestDTO } from './variation-request-dto';

/**
 * 
 * @export
 * @interface UpdateProductRequestDTO
 */
export interface UpdateProductRequestDTO {
    /**
     * Name of product
     * @type {string}
     * @memberof UpdateProductRequestDTO
     */
    'name'?: string;
    /**
     * Description of product
     * @type {string}
     * @memberof UpdateProductRequestDTO
     */
    'description'?: string;
    /**
     * 
     * @type {CategoryIdDTO}
     * @memberof UpdateProductRequestDTO
     */
    'category'?: CategoryIdDTO;
    /**
     * Variations of product
     * @type {Array<VariationRequestDTO>}
     * @memberof UpdateProductRequestDTO
     */
    'variations'?: Array<VariationRequestDTO>;
    /**
     * Status of product
     * @type {string}
     * @memberof UpdateProductRequestDTO
     */
    'status'?: UpdateProductRequestDTOStatusEnum;
    /**
     * General attributes of product
     * @type {Array<AttributeDTO>}
     * @memberof UpdateProductRequestDTO
     */
    'generalAttributes'?: Array<AttributeDTO>;
    /**
     * General images of product
     * @type {Array<ImageRequestDTO>}
     * @memberof UpdateProductRequestDTO
     */
    'generalImages'?: Array<ImageRequestDTO>;
    /**
     * Description images of product
     * @type {Array<ImageRequestDTO>}
     * @memberof UpdateProductRequestDTO
     */
    'descriptionImages'?: Array<ImageRequestDTO>;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateProductRequestDTOStatusEnum {
    _1ComingSoon = '1: ComingSoon',
    _2NewArrival = '2: NewArrival',
    _3PreOrder = '3: Pre_order',
    _4OnSales = '4: OnSales',
    _5Hide = '5: Hide',
    _6NotSales = '6: NotSales',
    _7LowStock = '7: LowStock',
    _8TemporarilyOutOfStock = '8: TemporarilyOutOfStock',
    Deleted1 = 'Deleted: -1',
    _1Deleted = '-1: Deleted',
    ComingSoon1 = 'ComingSoon: 1',
    NewArrival2 = 'NewArrival: 2',
    PreOrder3 = 'Pre_order: 3',
    OnSales4 = 'OnSales: 4',
    Hide5 = 'Hide: 5',
    NotSales6 = 'NotSales: 6',
    LowStock7 = 'LowStock: 7',
    TemporarilyOutOfStock8 = 'TemporarilyOutOfStock: 8'
}


