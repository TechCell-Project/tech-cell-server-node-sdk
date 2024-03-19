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
import { AddressSchemaDTO } from './address-schema-dto';

/**
 * 
 * @export
 * @interface ShippingOrderSchemaDTO
 */
export interface ShippingOrderSchemaDTO {
    /**
     * 
     * @type {AddressSchemaDTO}
     * @memberof ShippingOrderSchemaDTO
     */
    'fromAddress'?: AddressSchemaDTO;
    /**
     * 
     * @type {AddressSchemaDTO}
     * @memberof ShippingOrderSchemaDTO
     */
    'toAddress': AddressSchemaDTO;
}

