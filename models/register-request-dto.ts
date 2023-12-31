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
 * @interface RegisterRequestDTO
 */
export interface RegisterRequestDTO {
    /**
     * The email of user to register
     * @type {string}
     * @memberof RegisterRequestDTO
     */
    'email': string;
    /**
     * Username of user to register
     * @type {string}
     * @memberof RegisterRequestDTO
     */
    'userName'?: string;
    /**
     * Password of user to register
     * @type {string}
     * @memberof RegisterRequestDTO
     */
    'password': string;
    /**
     * Re-password of user to register, must to be same as password
     * @type {string}
     * @memberof RegisterRequestDTO
     */
    're_password': string;
    /**
     * First name of user
     * @type {string}
     * @memberof RegisterRequestDTO
     */
    'firstName': string;
    /**
     * Last name of user
     * @type {string}
     * @memberof RegisterRequestDTO
     */
    'lastName': string;
}

