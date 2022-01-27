/**
 * FactSet People API
 * The FactSet People API exposes FactSet data for individuals and their jobs. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CompanyStats model module.
 * @module model/CompanyStats
 * @version 0.9.0
 */
class CompanyStats {
    /**
     * Constructs a new <code>CompanyStats</code>.
     * List of the statistics such as the average age, tenure, compensation of leadership, the number of executives, and the gender diversity of leadership for the requested identifier.
     * @alias module:model/CompanyStats
     */
    constructor() { 
        
        CompanyStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyStats} obj Optional instance to populate.
     * @return {module:model/CompanyStats} The populated <code>CompanyStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyStats();

            if (data.hasOwnProperty('averageMgmtCompensation')) {
                obj['averageMgmtCompensation'] = ApiClient.convertToType(data['averageMgmtCompensation'], 'Number');
            }
            if (data.hasOwnProperty('averageTenure')) {
                obj['averageTenure'] = ApiClient.convertToType(data['averageTenure'], 'Number');
            }
            if (data.hasOwnProperty('medianTenure')) {
                obj['medianTenure'] = ApiClient.convertToType(data['medianTenure'], 'Number');
            }
            if (data.hasOwnProperty('averageAge')) {
                obj['averageAge'] = ApiClient.convertToType(data['averageAge'], 'Number');
            }
            if (data.hasOwnProperty('maxAge')) {
                obj['maxAge'] = ApiClient.convertToType(data['maxAge'], 'Number');
            }
            if (data.hasOwnProperty('minimumAge')) {
                obj['minimumAge'] = ApiClient.convertToType(data['minimumAge'], 'Number');
            }
            if (data.hasOwnProperty('medianAge')) {
                obj['medianAge'] = ApiClient.convertToType(data['medianAge'], 'Number');
            }
            if (data.hasOwnProperty('boardIndependentDirectors')) {
                obj['boardIndependentDirectors'] = ApiClient.convertToType(data['boardIndependentDirectors'], 'Number');
            }
            if (data.hasOwnProperty('femaleBoardMembers')) {
                obj['femaleBoardMembers'] = ApiClient.convertToType(data['femaleBoardMembers'], 'Number');
            }
            if (data.hasOwnProperty('numberOfMembers')) {
                obj['numberOfMembers'] = ApiClient.convertToType(data['numberOfMembers'], 'Number');
            }
            if (data.hasOwnProperty('onOtherBoardsAll')) {
                obj['onOtherBoardsAll'] = ApiClient.convertToType(data['onOtherBoardsAll'], 'Number');
            }
            if (data.hasOwnProperty('onOtherBoardsCorporate')) {
                obj['onOtherBoardsCorporate'] = ApiClient.convertToType(data['onOtherBoardsCorporate'], 'Number');
            }
            if (data.hasOwnProperty('mbType')) {
                obj['mbType'] = ApiClient.convertToType(data['mbType'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Average compensation for the executives
 * @member {Number} averageMgmtCompensation
 */
CompanyStats.prototype['averageMgmtCompensation'] = undefined;

/**
 * Avergae tenure of the people
 * @member {Number} averageTenure
 */
CompanyStats.prototype['averageTenure'] = undefined;

/**
 * Median tenure
 * @member {Number} medianTenure
 */
CompanyStats.prototype['medianTenure'] = undefined;

/**
 * Average of the executives on the management and board
 * @member {Number} averageAge
 */
CompanyStats.prototype['averageAge'] = undefined;

/**
 * Maximum age of the people on Management & Board
 * @member {Number} maxAge
 */
CompanyStats.prototype['maxAge'] = undefined;

/**
 * Minimum age of the person on board
 * @member {Number} minimumAge
 */
CompanyStats.prototype['minimumAge'] = undefined;

/**
 * Median age of the people on board
 * @member {Number} medianAge
 */
CompanyStats.prototype['medianAge'] = undefined;

/**
 * Independent directors on the board
 * @member {Number} boardIndependentDirectors
 */
CompanyStats.prototype['boardIndependentDirectors'] = undefined;

/**
 * Number of female members on the board
 * @member {Number} femaleBoardMembers
 */
CompanyStats.prototype['femaleBoardMembers'] = undefined;

/**
 * Number of people on board.
 * @member {Number} numberOfMembers
 */
CompanyStats.prototype['numberOfMembers'] = undefined;

/**
 * On Other Boards All
 * @member {Number} onOtherBoardsAll
 */
CompanyStats.prototype['onOtherBoardsAll'] = undefined;

/**
 * On Other Boards Corporate
 * @member {Number} onOtherBoardsCorporate
 */
CompanyStats.prototype['onOtherBoardsCorporate'] = undefined;

/**
 * Management and Board type, where MB = Management & Board, MGMT = Management, and BRD = Board. This is a pass-through value from the input used in the `mbType` query parameter.
 * @member {String} mbType
 */
CompanyStats.prototype['mbType'] = undefined;

/**
 * Original identifier used for the request.
 * @member {String} requestId
 */
CompanyStats.prototype['requestId'] = undefined;






export default CompanyStats;
