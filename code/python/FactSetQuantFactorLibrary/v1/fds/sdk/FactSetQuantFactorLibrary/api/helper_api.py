"""
    FactSet Quant Factor Library API

    The FactSet FactSet Quant Factor Library (QFL) API helps to detect investment themes across global equity markets, incorporate ideas into your portfolio construction process, and transform raw data into actionable intelligence. Over 2000+ items spanning Factor Groups in-   * Classification and Reference Data - Asset Data, Country, Industry, and Size   * Market - Liquidity, Market Sensitivity, Momentum, Technical, Volatility   * Core Fundamentals - Efficiency, Growth, Management, Profitability, Quality, Solvency, Value   * Macro and Cross Asset - Commodity, FX Sensitivity, Debt, Economic   * Alternative - Analyst Sentiment, Corporate Governance, Crowding, Insider Activity.   # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetQuantFactorLibrary.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetQuantFactorLibrary.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetQuantFactorLibrary.model.library_request import LibraryRequest
from fds.sdk.FactSetQuantFactorLibrary.model.library_response import LibraryResponse


class HelperApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_factor_library_endpoint = _Endpoint(
            settings={
                'response_type': (LibraryResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-quant-factor-library/v1/library',
                'operation_id': 'get_factor_library',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'factors',
                    'factor_groups',
                ],
                'required': [],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                    'factors',
                    'factor_groups',
                ]
            },
            root_map={
                'validations': {
                    ('factors',): {

                        'max_items': 20,
                        'min_items': 1,
                    },
                    ('factor_groups',): {

                        'max_items': 5,
                        'min_items': 1,
                    },
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'factors':
                        ([str],),
                    'factor_groups':
                        ([str],),
                },
                'attribute_map': {
                    'factors': 'factors',
                    'factor_groups': 'factorGroups',
                },
                'location_map': {
                    'factors': 'query',
                    'factor_groups': 'query',
                },
                'collection_format_map': {
                    'factors': 'csv',
                    'factor_groups': 'csv',
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client
        )
        self.get_factor_library_list_endpoint = _Endpoint(
            settings={
                'response_type': (LibraryResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-quant-factor-library/v1/library',
                'operation_id': 'get_factor_library_list',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'library_request',
                ],
                'required': [
                    'library_request',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'library_request':
                        (LibraryRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'library_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client
        )

    def get_factor_library(
        self,
        **kwargs
    ):
        """Retrieve a list of all available factors with relevant meta data.  # noqa: E501

        Fetch the list of all available factors and related meta data.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_factor_library(async_req=True)
        >>> result = thread.get()


        Keyword Args:
            factors ([str]): Array of individual Factor Items requested for the library endpoint. Use the factorGroups parameter to pull for a full list of factors based off the input group.  . [optional]
            factor_groups ([str]): Fetch a collection of Factors that fall within one of the below \"groups\". For example, resting factorGroup=Momentum will return all factors under the momentum group. To know which items are available in each group use the /library endpoint.***<p>factor groups limit** = 5 factor groups per request* ### Classification and Reference |Group|Descriptions| |---|---| |Asset_Data|Easily input security-level metadata into your quantitative research process. Common metrics used include Days Since Report, Days to Report, ADR Flag, and Minimum Lot Size. Integrate variables from FactSet Reference, FactSet Fundamentals, and FactSet Estimates databases to impose portfolio constraints and access general reference data.| |Country|Evaluate securities based on the countries in which they have the highest exposure. Analyze company-level exposures across various countries and measure how concentrated a firm’s business is within their countries of operation. Metrics are derived from FactSet Reference and FactSet Geographic Revenue Exposure (GeoRev) databases and include Country Exposure, Country of Incorporation, and Country of Risk.| |Industry|Classify securities based on the industries in which they generate the majority of their revenues. Incorporate variables from the FactSet Revere Business and Industry Classification System (RBICS) database to measure how concentrated a firm’s business is within the industries they operate and across various sub-sectors. Common metrics include Industry Classifications, Industry Exposures, and Industry Concentration.| |Size|Assess how large or small a company is relative to industry peers. Create size buckets and clarify the systematic portion of company returns using variables from FactSet Prices, FactSet RBICS, FactSet Fundamentals, and FactSet Estimates. Common metrics include Size Classification, Enterprise Value, and Market Share.| ### Market Factors |Group|Descriptions| |---|---| |Liquidity|Assess how investible a security is, as well as the potential market impact of a trade using signals built off pricing and volume data from FactSet Prices. Integrate factors as components into your alpha models to evaluate systematic risk or input them into your portfolio construction models to dictate how much of an asset can be bought or sold based on liquidity levels. Common metrics include Average Dollars Traded, Share Turnover, and Bid Ask Spread.| |Market Sensitivity|Clarify the common variations in stock returns attributable to the performance of their local market indices. Leverage regressions performed between security-level and market-index returns across different return horizons and methodologies. Metrics are derived from FactSet Prices and include Beta R-Squared, Up Market Beta, and Down Market Beta.| |Momentum|Analyze the historical momentum of a security and uncover how each underlying data item, calculation, and horizon can be meaningful in different situations. Metrics are derived from FactSet Prices and include 52W Position, Return Momentum, and Velocity.| |Technical|Forecast the direction of future price movements based on historical market data and leverage heuristic or pattern-based signals from FactSet Prices. Common metrics include Average True Range, Ulcer Performance Index, and Money Flow Volume.| |Volatility|Measure the uncertainty in asset price movements with indicators from the FactSet Prices database. Capture various forms of uncertainty by employing statistical calculations on security performance data. Common metrics include Return Volatility, Semivariance, and Turbulence.| ### Core Fundamentals |Group|Descriptions| |---|---| |Efficiency|Leverage core financial data to determine how effectively a company uses its assets, collects payments, and operates its business. Most variables are measured as turnover ratios and include changes over time to provide transparency into the efficiency of each business process. Metrics are derived from FactSet Fundamentals and FactSet Estimates and include Asset Turnover, Receivables Turnover, and Cash Conversion Cycle| |Growth|Measure a company’s ability to grow faster than its peers. Compare the future expected growth of a company with its historical growth and view growth rates adjusted for stability. Integrate variables from FactSet RBICS, FactSet Fundamentals, and FactSet Estimates to analyze growth rates over multiple horizons including Market Share, Sales, and EPS Growth| |Management|Gain insight into how management finances their business and the decisions they make that impact the core financial statements. These choices are reflected in changes to total debt or equity, the overall size of the balance sheet, and decisions around the accounting methods used. Metrics are derived from FactSet Fundamentals and FactSet Estimates and include Capital Expenditures (CAPEX) Growth, Equity Buyback Ratio, and Depreciation & Amortization Variability| |Profitability|Evaluate a company’s ability to generate income relative to its revenue or balance sheet metrics. Identify lucrative businesses relative to their industry, region, and size profile. Metrics are derived from FactSet Fundamentals and FactSet Estimates and include Return on Assets, Return on Invested Capital Change, and Return on Total Equity |Quality|Understand the overall financial health and quality of a company’s business. Use historical data from FactSet Fundamentals to analyze balance sheet health, stability of earnings and profit margins, variability in cash flows, and trends that look beyond headline financial metrics. Common metrics include Cash Earnings Ratio Variability, Revenue Stability, and Accruals Ratios. Composite quality scores (i.e., the Piotroski F-Score, Beneish M-Score, and Altman Z-Score) and their underlying components are also available as individual metrics.| |Solvency|Measure a company’s ability to meet their short- and long-term financial obligations and determine the degree of leverage employed to run their business. Incorporate financial ratios from FactSet Fundamentals and FactSet Estimates to quantify liability or debt obligation relative to earnings, cash flows, equities, or items from the asset side of the balance sheet. Common metrics include Current Ratio, Current Asset Liquidity, and Debt to Equity Change.| |Value|Quickly determine how cheap or expensive a company is based on common security-level characteristics from FactSet Prices, FactSet Fundamentals, and FactSet Estimates. Apply factors as an intersection between other factors for a more customized analysis, such as finding the cheapest stocks among the highest quality companies. Common metrics include Earnings Yield, Book to Price, and Revenue to Enterprise Value.| ### Macro and Cross-Asset |Group|Descriptions| |---|---| |Commodity|Quantify the impact movements in the commodity markets have on equity prices. Metrics are derived from FactSet Prices and allow you to measure company-level exposure to commodities such as Gold, Crude Oil, Coffee, and Live Cattle.| |FX_Sensitivity| Analyze security-level sensitivity to fluctuations in the currency markets. Metrics are derived from FactSet Prices and allow you to identify company exposures to currencies such as USD, EUR, JPY, and CNY. |Debt|Uncover details related to company debt through issuer-level factor exposures. Use the FactSet Fixed Income Prices & Derived Analytics database to aggregate metrics at the company level. Common metrics include Effective Duration, Option Adjusted Spread, and Yield to Worst.| |Economic|Capture daily security exposures to leading economic indicator forecasts. Leverage the Quant Factor Library’s detailed country exposure model to attribute economic measures to individual companies. Metrics are derived from FactSet Economic Estimates and include Real GPD Growth, Industrial Production Growth, Core CPI Inflation, and Policy Rates. ### Alternative |Group|Descriptions| |---|---| |Analyst_Sentiment|Analyze a security’s outlook from the perspective of a sell-side research analyst. Leverage consensus estimates data from the FactSet Estimates database to analyze the directional change in estimate revisions for various financial statement items and time periods. Common metrics include Sales Estimate Revisions, Free Cash Flow Estimate Revisions, and Robust Estimate Revisions.| |Corporate_Governance|Identify companies with strong corporate governance. Analyze the profile of a company’s management and board based on tenure, diversity, compensation incentives, and more factors from the FactSet People database. Common metrics include Management - Average Age, Board - Activist Member, and Executives - Average Bonus.| |Crowding|Understand the degree to which investors own, purchase, or sell a security. View characteristics of each investor’s profile and characterize crowding from passive, active, institutional, ETF, and hedge fund investors. Use metrics from FactSet Ownership, FactSet Prices, and FactSet Fundamentals to help identify potential effects of crowding such as whether certain investor types are acquiring or divesting from a given security. Common metrics include Active Buyer Percent of Portfolio Change, ETF Days to Liquidate, and Hedge Fund Percent Outstanding.| |Insider_Activity|Measure the degree to which insiders own, purchase, or sell their company’s stock. Analyze the sentiment of those with access to material non-public information or determine how the amount of insider ownership may impact management’s key business decisions. Metrics are derived from FactSet Ownership and include Insider Percent Outstanding, Insider Number of Buys, and Insider Seller Position Change. |ESG|Analyze Environmental, Social and Governance (ESG) behavior, which are aggregated and categorized into continuously updated, material ESG scores to uncover risks and opportunities from companies. Truvalue Labs focuses on company ESG behavior from external sources and includes both positive and negative events that go beyond traditional sources of ESG risk data. . [optional]
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            async_req (bool): execute request asynchronously

        Returns:
            LibraryResponse
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_host_index'] = kwargs.get('_host_index')
        return self.get_factor_library_endpoint.call_with_http_info(**kwargs)

    def get_factor_library_list(
        self,
        library_request,
        **kwargs
    ):
        """Retrieves a list of all available factors with relevant meta data.  # noqa: E501

        Fetch the list of all available factors and related meta data.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_factor_library_list(library_request, async_req=True)
        >>> result = thread.get()

        Args:
            library_request (LibraryRequest): Available Factors and Related Meta Data.

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            async_req (bool): execute request asynchronously

        Returns:
            LibraryResponse
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['library_request'] = \
            library_request
        return self.get_factor_library_list_endpoint.call_with_http_info(**kwargs)
