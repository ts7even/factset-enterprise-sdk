"""
    FactSet Entity API

    Using an entity centric data model, FactSet's Entity API provides access to FactSet's complete security and entity level symbology, comprehensive entity reference data, and all of the necessary relationships and connections to create a foundation that tightly correlates disparate sources of information to a master entity identifier. Use this API to quickly understand the full entity structure and related securities.   # noqa: E501

    The version of the OpenAPI document: 1.2.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetEntity.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetEntity.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetEntity.model.entity_securities_request import EntitySecuritiesRequest
from fds.sdk.FactSetEntity.model.entity_securities_response import EntitySecuritiesResponse
from fds.sdk.FactSetEntity.model.error_response import ErrorResponse


class EntitySecuritiesApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_entity_securities_endpoint = _Endpoint(
            settings={
                'response_type': (EntitySecuritiesResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-entity/v1/entity-securities',
                'operation_id': 'get_entity_securities',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'ids',
                    'security_type',
                ],
                'required': [
                    'ids',
                ],
                'nullable': [
                ],
                'enum': [
                    'security_type',
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
                    ('security_type',): {

                        "EQ": "EQ",
                        "FI": "FI",
                        "ALL": "ALL"
                    },
                },
                'openapi_types': {
                    'ids':
                        ([str],),
                    'security_type':
                        (str,),
                },
                'attribute_map': {
                    'ids': 'ids',
                    'security_type': 'securityType',
                },
                'location_map': {
                    'ids': 'query',
                    'security_type': 'query',
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
        self.post_entity_securities_endpoint = _Endpoint(
            settings={
                'response_type': (EntitySecuritiesResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-entity/v1/entity-securities',
                'operation_id': 'post_entity_securities',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'entity_securities_request',
                ],
                'required': [
                    'entity_securities_request',
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
                    'entity_securities_request':
                        (EntitySecuritiesRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'entity_securities_request': 'body',
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

    def get_entity_securities(
        self,
        ids,
        **kwargs
    ):
        """Returns all Equity Exchange Listings and all debt instruments issued for the requested entity.  # noqa: E501

        Returns all Equity Exchange Listings (ticker-exchange) and all debt instruments (cusips) issued for the requested entity.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_entity_securities(ids, async_req=True)
        >>> result = thread.get()

        Args:
            ids ([str]): The requested Market Identifier. Accepted input identifiers include Ticker-Exchange, Ticker-Regions, CUSIPs, ISINs, SEDOLs, or FactSet Permanent Ids, such as -R, -L, or -E.<p>**Max Ids Limit set to 3000 in a single request**</p>   *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids,       which may lead to exceeding this request line limit of 8KB, its       advised for any requests with large request lines to be requested through       the respective \\\"POST\\\" method.</p>* 

        Keyword Args:
            security_type (str): Controls the response to return all related equity listings (EQ), all debt instruments (FI), or both all equity and all debt (ALL).. [optional] if omitted the server will use the default value of "EQ"
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
            EntitySecuritiesResponse
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
        return self.get_entity_securities_endpoint.call_with_http_info(**kwargs)

    def post_entity_securities(
        self,
        entity_securities_request,
        **kwargs
    ):
        """Returns all Equity Exchange Listings and all debt instruments issued for the requested entity.  # noqa: E501

        Returns all Equity Exchange Listings (ticker-exchange) and all debt instruments (cusips) issued for the requested entity.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.post_entity_securities(entity_securities_request, async_req=True)
        >>> result = thread.get()

        Args:
            entity_securities_request (EntitySecuritiesRequest): Request Body to request a list of Entity Security objects.

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
            EntitySecuritiesResponse
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
        kwargs['entity_securities_request'] = \
            entity_securities_request
        return self.post_entity_securities_endpoint.call_with_http_info(**kwargs)
