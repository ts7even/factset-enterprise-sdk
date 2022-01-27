"""
    PA Engine API

    Allow clients to fetch PA Engine Analytics through APIs.  # noqa: E501

    The version of the OpenAPI document: 2
    Contact: analytics.api.support@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.PAEngine.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.PAEngine.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.PAEngine.model.component_summary import ComponentSummary
from fds.sdk.PAEngine.model.pa_component import PAComponent


class ComponentsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_pa_component_by_id_endpoint = _Endpoint(
            settings={
                'response_type': (PAComponent,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/analytics/lookups/v2/engines/pa/components/{id}',
                'operation_id': 'get_pa_component_by_id',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'id',
                ],
                'required': [
                    'id',
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
                    'id':
                        (str,),
                },
                'attribute_map': {
                    'id': 'id',
                },
                'location_map': {
                    'id': 'path',
                },
                'collection_format_map': {
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
        self.get_pa_components_endpoint = _Endpoint(
            settings={
                'response_type': ({str: (ComponentSummary,)},),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/analytics/lookups/v2/engines/pa/components',
                'operation_id': 'get_pa_components',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'document',
                ],
                'required': [
                    'document',
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
                    'document':
                        (str,),
                },
                'attribute_map': {
                    'document': 'document',
                },
                'location_map': {
                    'document': 'query',
                },
                'collection_format_map': {
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

    def get_pa_component_by_id(
        self,
        id="782DA0A0C9CCCA9F80C2F3622FC1373AED30E1B7C1CF58F4677FE8C4C4901A53",
        **kwargs
    ):
        """Get PA component by id  # noqa: E501

        This endpoint returns the default settings of a PA component.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_pa_component_by_id(id="782DA0A0C9CCCA9F80C2F3622FC1373AED30E1B7C1CF58F4677FE8C4C4901A53", async_req=True)
        >>> result = thread.get()

        Args:
            id (str): Unique identifier for a PA component. defaults to "782DA0A0C9CCCA9F80C2F3622FC1373AED30E1B7C1CF58F4677FE8C4C4901A53", must be one of ["782DA0A0C9CCCA9F80C2F3622FC1373AED30E1B7C1CF58F4677FE8C4C4901A53"]

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
            PAComponent
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
        kwargs['id'] = \
            id
        return self.get_pa_component_by_id_endpoint.call_with_http_info(**kwargs)

    def get_pa_components(
        self,
        document="Client:Foo",
        **kwargs
    ):
        """Get PA components  # noqa: E501

        This endpoint returns the list of PA components in a given PA document.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_pa_components(document="Client:Foo", async_req=True)
        >>> result = thread.get()

        Args:
            document (str): Document Name. defaults to "Client:Foo", must be one of ["Client:Foo"]

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
            {str: (ComponentSummary,)}
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
        kwargs['document'] = \
            document
        return self.get_pa_components_endpoint.call_with_http_info(**kwargs)
