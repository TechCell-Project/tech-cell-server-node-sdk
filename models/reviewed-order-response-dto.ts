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
import { ProductCartDTO } from './product-cart-dto';

/**
 * 
 * @export
 * @interface ReviewedOrderResponseDTO
 */
export interface ReviewedOrderResponseDTO {
    /**
     * Payment method
     * @type {string}
     * @memberof ReviewedOrderResponseDTO
     */
    'paymentMethod': ReviewedOrderResponseDTOPaymentMethodEnum;
    /**
     * Index of address selected
     * @type {number}
     * @memberof ReviewedOrderResponseDTO
     */
    'addressSelected': number;
    /**
     * List of product selected
     * @type {Array<ProductCartDTO>}
     * @memberof ReviewedOrderResponseDTO
     */
    'productSelected': Array<ProductCartDTO>;
    /**
     * Total product price
     * @type {number}
     * @memberof ReviewedOrderResponseDTO
     */
    'totalProductPrice': number;
    /**
     * Total shipping price
     * @type {object}
     * @memberof ReviewedOrderResponseDTO
     */
    'shipping': object;
}

/**
    * @export
    * @enum {string}
    */
export enum ReviewedOrderResponseDTOPaymentMethodEnum {
    Cod = 'COD',
    Vnpay = 'VNPAY',
    Atm = 'ATM',
    Visa = 'VISA',
    Mastercard = 'MASTERCARD',
    Jcb = 'JCB'
}

