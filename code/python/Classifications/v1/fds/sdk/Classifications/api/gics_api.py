"""
    Classifications API

    The Classifications API gives access to various Industry Classifications for a given list of securities. Beginning first with GICS Direct, the service will then expand to offering NAICS, SIC, RBICS, and more.    # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.Classifications.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.Classifications.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.Classifications.model.error_response import ErrorResponse
from fds.sdk.Classifications.model.gics_request import GicsRequest
from fds.sdk.Classifications.model.gics_response import GicsResponse


class GICSApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_gics_endpoint = _Endpoint(
            settings={
                'response_type': (GicsResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/classifications/v1/gics',
                'operation_id': 'get_gics',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'ids',
                    'start_date',
                    'end_date',
                    'frequency',
                    'calendar',
                ],
                'required': [
                    'ids',
                ],
                'nullable': [
                ],
                'enum': [
                    'frequency',
                    'calendar',
                ],
                'validation': [
                    'ids',
                ]
            },
            root_map={
                'validations': {
                    ('ids',): {

                        'max_items': 3000,
                        'min_items': 1,
                    },
                },
                'allowed_values': {
                    ('frequency',): {

                        "D": "D",
                        "W": "W",
                        "M": "M",
                        "AM": "AM",
                        "CQ": "CQ",
                        "AY": "AY",
                        "CY": "CY"
                    },
                    ('calendar',): {

                        "FIVEDAY": "FIVEDAY",
                        "SEVENDAY": "SEVENDAY"
                    },
                },
                'openapi_types': {
                    'ids':
                        ([str],),
                    'start_date':
                        (str,),
                    'end_date':
                        (str,),
                    'frequency':
                        (str,),
                    'calendar':
                        (str,),
                },
                'attribute_map': {
                    'ids': 'ids',
                    'start_date': 'startDate',
                    'end_date': 'endDate',
                    'frequency': 'frequency',
                    'calendar': 'calendar',
                },
                'location_map': {
                    'ids': 'query',
                    'start_date': 'query',
                    'end_date': 'query',
                    'frequency': 'query',
                    'calendar': 'query',
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
        self.post_gics_endpoint = _Endpoint(
            settings={
                'response_type': (GicsResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/classifications/v1/gics',
                'operation_id': 'post_gics',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'gics_request',
                ],
                'required': [
                    'gics_request',
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
                    'gics_request':
                        (GicsRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'gics_request': 'body',
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

    def get_gics(
        self,
        ids,
        **kwargs
    ):
        """Gets the GICS Direct Classifications  # noqa: E501

        Gets the The **Global Industry Classification Standard (\"GICS\")** Sectors, Industry Group, Industry, and Sub-Industry Names and Numbers for a requested list of ids and date range. All economic sectors have a two-digit identification code, all industry groups have a four-digit identification code, all industries have a six-digit identification code, and all sub-industries have an eight-digit identification code. To access the complete GICS structure and definitions, visit the [MSCI GICS](https://www.msci.com/gics) or [S&P GICS](http://us.spindices.com/resource-center/index-policies/) home pages. Coverage includes over 37,000 securities. *Licensing for GICS Classifications, Regions, and History is required in addition to FactSet API license. Reach out to your FactSet Account Team for assistance.*   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_gics(ids, async_req=True)
        >>> result = thread.get()

        Args:
            ids ([str]): The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 

        Keyword Args:
            start_date (str): Requested start date expressed in YYYY-MM-DD format.. [optional]
            end_date (str): Requested End Date for Range expressed in YYYY-MM-DD format.. [optional]
            frequency (str): Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year. . [optional] if omitted the server will use the default value of "M"
            calendar (str): Calendar of data returned. SEVENDAY includes weekends.. [optional] if omitted the server will use the default value of "FIVEDAY"
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
            GicsResponse
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
        return self.get_gics_endpoint.call_with_http_info(**kwargs)

    def post_gics(
        self,
        gics_request,
        **kwargs
    ):
        """Returns the GICS classifications for the requested 'ids' and date range.  # noqa: E501

        Gets the The **Global Industry Classification Standard (\"GICS\")** Sectors, Industry Group, Industry, and Sub-Industry Names and Numbers for a requested list of ids and date range. All economic sectors have a two-digit identification code, all industry groups have a four-digit identification code, all industries have a six-digit identification code, and all sub-industries have an eight-digit identification code. To access the complete GICS structure and definitions, visit the [MSCI GICS](https://www.msci.com/gics) or [S&P GICS](http://us.spindices.com/resource-center/index-policies/) home pages. Coverage includes over 37,000 secutries. *Licencing for GICS Classifications, Regions, and History is required in addition to FactSet API license. Reach out to your FactSet Account Team for assistance.*   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.post_gics(gics_request, async_req=True)
        >>> result = thread.get()

        Args:
            gics_request (GicsRequest): Requests GICS Classifications for the given identifier and date range.

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
            GicsResponse
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
        kwargs['gics_request'] = \
            gics_request
        return self.post_gics_endpoint.call_with_http_info(**kwargs)
