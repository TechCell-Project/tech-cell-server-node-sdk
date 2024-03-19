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
 * @interface UpdateOrderStatusDTO
 */
export interface UpdateOrderStatusDTO {
    /**
     * Order status to update
     * @type {string}
     * @memberof UpdateOrderStatusDTO
     */
    'orderStatus': UpdateOrderStatusDTOOrderStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateOrderStatusDTOOrderStatusEnum {
    Pending = 'pending',
    Cancelled = 'cancelled',
    Processing = 'processing',
    Shipping = 'shipping',
    Completed = 'completed',
    Refunded = 'refunded'
}


