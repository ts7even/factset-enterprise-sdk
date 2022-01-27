"""
    FactSet Prices API

    Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p>   # noqa: E501

    The version of the OpenAPI document: 1.2.1
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetPrices.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetPrices.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetPrices.model.error_response import ErrorResponse
from fds.sdk.FactSetPrices.model.high_low_request import HighLowRequest
from fds.sdk.FactSetPrices.model.high_low_response import HighLowResponse


class HighLowApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_high_low_endpoint = _Endpoint(
            settings={
                'response_type': (HighLowResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-prices/v1/high-low',
                'operation_id': 'get_high_low',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'ids',
                    'date',
                    'period',
                    'price_type',
                    'calendar',
                    'currency',
                    'adjust',
                ],
                'required': [
                    'ids',
                ],
                'nullable': [
                ],
                'enum': [
                    'period',
                    'price_type',
                    'calendar',
                    'adjust',
                ],
                'validation': [
                    'ids',
                ]
            },
            root_map={
                'validations': {
                    ('ids',): {

                        'max_items': 2000,
                        'min_items': 1,
                    },
                },
                'allowed_values': {
                    ('period',): {

                        "1D": "1D",
                        "1W": "1W",
                        "1M": "1M",
                        "3M": "3M",
                        "6M": "6M",
                        "YTD": "YTD",
                        "52W": "52W",
                        "2Y": "2Y",
                        "3Y": "3Y",
                        "5Y": "5Y",
                        "10Y": "10Y"
                    },
                    ('price_type',): {

                        "INTRADAY": "INTRADAY",
                        "CLOSE": "CLOSE"
                    },
                    ('calendar',): {

                        "FIVEDAY": "FIVEDAY",
                        "SEVENDAY": "SEVENDAY",
                        "LOCAL": "LOCAL"
                    },
                    ('adjust',): {

                        "SPLIT": "SPLIT",
                        "SPINOFF": "SPINOFF",
                        "DIVADJ": "DIVADJ",
                        "UNSPLIT": "UNSPLIT"
                    },
                },
                'openapi_types': {
                    'ids':
                        ([str],),
                    'date':
                        (str,),
                    'period':
                        (str,),
                    'price_type':
                        (str,),
                    'calendar':
                        (str,),
                    'currency':
                        (str,),
                    'adjust':
                        (str,),
                },
                'attribute_map': {
                    'ids': 'ids',
                    'date': 'date',
                    'period': 'period',
                    'price_type': 'priceType',
                    'calendar': 'calendar',
                    'currency': 'currency',
                    'adjust': 'adjust',
                },
                'location_map': {
                    'ids': 'query',
                    'date': 'query',
                    'period': 'query',
                    'price_type': 'query',
                    'calendar': 'query',
                    'currency': 'query',
                    'adjust': 'query',
                },
                'collection_format_map': {
                    'ids': 'csv',
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
        self.get_high_low_for_list_endpoint = _Endpoint(
            settings={
                'response_type': (HighLowResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-prices/v1/high-low',
                'operation_id': 'get_high_low_for_list',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'high_low_request',
                ],
                'required': [
                    'high_low_request',
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
                    'high_low_request':
                        (HighLowRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'high_low_request': 'body',
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

    def get_high_low(
        self,
        ids,
        **kwargs
    ):
        """Gets the price high and price low of securities for a list of `ids` as of given date, period and frequency.  # noqa: E501

        For given security(s), gets the high and low prices with the respective dates on which they occurred. This service gives options for fetching the price as of the close or intraday.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_high_low(ids, async_req=True)
        >>> result = thread.get()

        Args:
            ids ([str]): The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*

        Keyword Args:
            date (str): The as of date in **YYYY-MM-DD** format. This controls the perspective date in which the period parameter will be computed. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. . [optional]
            period (str): The period of measure for the security's high and low pricing. This does not change display `frequency` but rather the underlying period. For example, if you wish to fetch the latest 52 week high and low price, select 52W. All periods are referencing actual periods of measure, not period-ends where-    * **D** = Daily   * **W** = Weekly, based on the last trading day of the week. Use the 52W for representing the latest year.   * **M** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **YTD** = Year-to-Date   * **Y** =  Actual Annual, based on the start date. . [optional] if omitted the server will use the default value of "52W"
            price_type (str): Controls whether price high and low data is returned intraday or at the close. For example, by selecting INTRADAY, if a security price reached an all time high of 10 during trading hours over the period of measure but closed that day at 8, then the service will return 10. If CLOSE was selected the service would return 8 if that was the high for the period measured. . [optional] if omitted the server will use the default value of "CLOSE"
            calendar (str): Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods.. [optional] if omitted the server will use the default value of "FIVEDAY"
            currency (str): Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).. [optional]
            adjust (str): Controls the split, spinoff, and dividend adjustments for the prices. <p>For more information, visit [Online Assistant Page 614](https://oa.apps.factset.com/pages/614)</p>   * **SPLIT** = Split ONLY Adjusted. This is used by default.   * **SPINOFF** = Splits & Spinoff Adjusted.   * **DIVADJ** = Splits, Spinoffs, and Dividends adjusted.   * **UNSPLIT** = No Adjustments. . [optional] if omitted the server will use the default value of "SPLIT"
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
            HighLowResponse
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
        kwargs['ids'] = \
            ids
        return self.get_high_low_endpoint.call_with_http_info(**kwargs)

    def get_high_low_for_list(
        self,
        high_low_request,
        **kwargs
    ):
        """Requests the price high and price low of securities for a list of `ids` as of given date, period and frequency.  # noqa: E501

        For given security(s), gets the high and low prices with the respective dates on which they occurred. This service gives options for fetching the price as of the close or intraday.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_high_low_for_list(high_low_request, async_req=True)
        >>> result = thread.get()

        Args:
            high_low_request (HighLowRequest): Request object for high low prices.

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
            HighLowResponse
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
        kwargs['high_low_request'] = \
            high_low_request
        return self.get_high_low_for_list_endpoint.call_with_http_info(**kwargs)
