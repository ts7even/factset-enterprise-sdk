"""
    FactSet RIBCS

    FactSet Revere Business Industry Classification System (RBICS) is a comprehensive structured taxonomy to classify companies by what they primarily do. It delivers a granular view for investors by classifying companies using a bottom-up approach according to the products and services they provide. By combining this approach with a top-level grouping based on companies' behavior similarities and stock co-movement, FactSet RBICS delivers unprecedented precision for 1,400+ sector groups.  RBICS Focus is a six level classification which highlights the companys main business. It is based on the company business line/s that stand for majority of a the revenue that the company generates. Updated monthly. For more details, visit [Online Assitant Page #20710](https://oa.apps.factset.com/pages/20710).   # noqa: E501

    The version of the OpenAPI document: 1.1.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetRBICS.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetRBICS.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetRBICS.model.entity_focus_request import EntityFocusRequest
from fds.sdk.FactSetRBICS.model.entity_focus_response import EntityFocusResponse
from fds.sdk.FactSetRBICS.model.error_response import ErrorResponse


class EntityFocusApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_rbics_entity_focus_endpoint = _Endpoint(
            settings={
                'response_type': (EntityFocusResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-rbics/v1/entity-focus',
                'operation_id': 'get_rbics_entity_focus',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'ids',
                    'date',
                    'levels',
                    'include_names',
                ],
                'required': [
                    'ids',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                    'ids',
                    'levels',
                ]
            },
            root_map={
                'validations': {
                    ('ids',): {

                        'max_items': 2500,
                        'min_items': 1,
                    },
                    ('levels',): {

                        'max_items': 6,
                    },
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'ids':
                        ([str],),
                    'date':
                        (str,),
                    'levels':
                        ([int],),
                    'include_names':
                        (bool,),
                },
                'attribute_map': {
                    'ids': 'ids',
                    'date': 'date',
                    'levels': 'levels',
                    'include_names': 'includeNames',
                },
                'location_map': {
                    'ids': 'query',
                    'date': 'query',
                    'levels': 'query',
                    'include_names': 'query',
                },
                'collection_format_map': {
                    'ids': 'csv',
                    'levels': 'csv',
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
        self.get_rbics_entity_focus_for_list_endpoint = _Endpoint(
            settings={
                'response_type': (EntityFocusResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-rbics/v1/entity-focus',
                'operation_id': 'get_rbics_entity_focus_for_list',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'entity_focus_request',
                ],
                'required': [
                    'entity_focus_request',
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
                    'entity_focus_request':
                        (EntityFocusRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'entity_focus_request': 'body',
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

    def get_rbics_entity_focus(
        self,
        ids,
        **kwargs
    ):
        """Get RBICS classification for the Focus industry  # noqa: E501

        Gets RBICS classifications for the Focus industry for a short list of companies. Full history is included if _date_ parameter is not specified.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_rbics_entity_focus(ids, async_req=True)
        >>> result = thread.get()

        Args:
            ids ([str]): List of Company identifiers. Accepted identifiers include Ticker-Exchange, Ticker-Regions, CUSIPs, ISINs, SEDOLs, or FactSet Permanent Ids, such as -R, -L, or -E.<p>**ids limit = 2500 per request**</p>    Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p> 

        Keyword Args:
            date (str): Effective date for data expressed in YYYY-MM-DD format. If no date is requested, the default behavior is to return the full history for the requested entity.. [optional]
            levels ([int]): List of RBICS industry levels to include in the response. **By default if left blank, all levels are returned.**. [optional]
            include_names (bool): Option to include or exclude industry Names and the L6 Description. true = Include Names; false = Exclude Names.. [optional] if omitted the server will use the default value of True
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
            EntityFocusResponse
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
        return self.get_rbics_entity_focus_endpoint.call_with_http_info(**kwargs)

    def get_rbics_entity_focus_for_list(
        self,
        entity_focus_request,
        **kwargs
    ):
        """Get RBICS classification for the Focus industry  # noqa: E501

        Gets RBICS classifications for the Focus industry for a long list of companies. Full history is included if _date_ parameter is not specified.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_rbics_entity_focus_for_list(entity_focus_request, async_req=True)
        >>> result = thread.get()

        Args:
            entity_focus_request (EntityFocusRequest): Request Body to request a list of RBICS Entity Focus objects.

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
            EntityFocusResponse
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
        kwargs['entity_focus_request'] = \
            entity_focus_request
        return self.get_rbics_entity_focus_for_list_endpoint.call_with_http_info(**kwargs)
