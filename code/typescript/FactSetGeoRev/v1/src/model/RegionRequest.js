/**
 * FactSet GeoRev API
 * FactSet Revere Geographic Revenue (\"GeoRev\") Exposure data provides a highly structured and normalized display of companies’ revenues by geography. Using a four level taxonomy structure, understand the companies' Super-Region-->Region-->Area-->Country revenue breakdowns. Quickly understand a company’s revenue exposure in countries impacted by geopolitical, macroeconomic, and market risk. Understand the geographic footprint of a company based on sources of revenue versus country of domicile, and analyze global revenue exposures at the company, index, or portfolio level.<p> Geographic revenue has historically been difficult to analyze due to companies’ non-standard and incomplete reporting. Investors relying solely on this as-reported data are limited in their ability to compare, aggregate or screen exposures across a universe or portfolio of companies. To achieve normalization, FactSet GeoRev captures data through a proprietary four-level geographic classification structure. An estimation algorithm based on GDP weighting and accounting logic is then applied to solve for any non-explicit disclosures. The result is a consistent, accurate, and flexible dataset that can take a company’s revenues and break them down into any geographic country or region categories.</p><p>As markets become more integrated and companies expand operations beyond their domestic markets, GeoRev provides a new and valuable country factor to help investors discover alpha, model risk exposure, optimize portfolio weighting, and improve fund administration and reporting.</p><p>Data Frequency -  Annual; Update Frequency - Daily. 49,000+ Publically Listed Companies. All Russell 3000 and MSCI ACWI Index Consituents. U.S. Data is available from 2003, with Non-US data from 2007. For more details, visit [OA 17555](https://my.apps.factset.com/oa/pages/17555)</p> 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Frequency from './Frequency';

/**
 * The RegionRequest model module.
 * @module model/RegionRequest
 * @version 0.9.0
 */
class RegionRequest {
    /**
     * Constructs a new <code>RegionRequest</code>.
     * Region Request Body
     * @alias module:model/RegionRequest
     * @param ids {Array.<String>} Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  300 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
     */
    constructor(ids) { 
        
        RegionRequest.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>RegionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegionRequest} obj Optional instance to populate.
     * @return {module:model/RegionRequest} The populated <code>RegionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegionRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('regionIds')) {
                obj['regionIds'] = ApiClient.convertToType(data['regionIds'], ['String']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = Frequency.constructFromObject(data['frequency']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  300 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
 * @member {Array.<String>} ids
 */
RegionRequest.prototype['ids'] = undefined;

/**
 * The Regional Identifier or Regional Group. Groups include \"SUPER_REGIONS\", \"REGIONS\", and \"AREAS\". When requesting a group, all regionIds within that group will be requested. To limit or specify select regions returned in the response, provide a comma-separated list of the below regionIds. |Regional Group|regionId|Descriptions| |---|---|---| |Group|SUPER_REGIONS|Fetchs all regionIds for Super Regions| |Group|REGIONS|Fetchs all regionIds for Regions| |Group|AREAS|Fetchs all regionIds for Areas|  |Level|regionId|Parent|Description|Level|regionId|Parent|Description| |---|---|---|---|---|---|---|---| |__**Super Region**__||||__**Area**__|||| |Super Region|R1|R100|Africa and Middle East|Area|R3|R2|Eastern Africa| |Super Region|R101|R100|Americas|Area|R18|R2|Southern Africa| |Super Region|R170|R100|Asia/Pacific|Area|R45|R2|Western Africa| |Super Region|R274|R100|Europe|Area|R69|R68|Central Middle East| |Super Region|R349|R100|Non-Disclosed Revenue|Area|R87|R68|Eastern Middle East| |Super Region|R354|R100|No Operations|Area|R97|R68|Western Middle East| |Super Region|R393|R100|Non-Geographic Revenue|Area|R103|R102|Caribbean| |__**Region**__||||Area|R135|R102|Central America| |Region|R2|R1|Africa|Area|R145|R102|South America| |Region|R68|R1|Middle East|Area|R165|R164|Other North America| |Region|R102|R101|Latin America|Area|R167|R164|United States and Canada| |Region|R164|R101|North America|Area|R172|R171|Far East| |Region|R171|R170|Asia|Area|R219|R171|Indian Region| |Region|R233|R170|Oceania|Area|R234|R233|Australia and New Zealand| |Region|R275|R274|European Union|Area|R237|R233|Pacific Islands| |Region|R314|R274|Non-European Union|Area|R276|R275|Eastern European Union| |Region|R350|R349|Region Unspecified|Area|R286|R275|Northern European Union| |Region|R355|R354|Non-Operating Region|Area|R292|R275|Southern European Union| |Region|R394|R393|Non-Geographic Revenue Region|Area|R298|R275|Western European Union| |Region|R398|R1|Africa and Middle East Unallocated Region|Area|R315|R314|Eastern Non-European Union| |Region|R401|R170|Asia/Pacific Unallocated Region|Area|R323|R314|Northern Non-European Union| |Region|R404|R101|Americas Unallocated Revenue Region|Area|R328|R314|Southern Non-European Union| |Region|R407|R274|Europe Unallocated Region|Area|R340|R314|Western Non-European Union| |||||Area|R351|R350|Area Unspecified| |||||Area|R356|R355|Non-Operating Area| |||||Area|R395|R394|Non-Geographic Revenue Area| |||||Area|R399|R398|Africa and Middle East Unallocated Area| 
 * @member {Array.<String>} regionIds
 */
RegionRequest.prototype['regionIds'] = undefined;

/**
 * The start date requested for a given date range in **YYYY-MM-DD** format. Data is available on a Fiscal Annual periodicity, but updated Daily. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
 * @member {String} startDate
 */
RegionRequest.prototype['startDate'] = undefined;

/**
 * The end date requested for a given date range in **YYYY-MM-DD** format. Data is available on a Fical Annual periodicity, but updated Daily. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
 * @member {String} endDate
 */
RegionRequest.prototype['endDate'] = undefined;

/**
 * @member {module:model/Frequency} frequency
 */
RegionRequest.prototype['frequency'] = undefined;

/**
 * Currency code for adjusting the revenue data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
 * @member {String} currency
 */
RegionRequest.prototype['currency'] = undefined;






export default RegionRequest;
