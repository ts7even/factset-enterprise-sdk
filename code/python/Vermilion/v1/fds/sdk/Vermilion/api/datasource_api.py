"""
    VRS API documentation

    Documentation on all available end points in the VRSAPI  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.Vermilion.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.Vermilion.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.Vermilion.model.data_source_data import DataSourceData
from fds.sdk.Vermilion.model.data_source_data_instance import DataSourceDataInstance
from fds.sdk.Vermilion.model.data_source_list import DataSourceList
from fds.sdk.Vermilion.model.inline_response400 import InlineResponse400
from fds.sdk.Vermilion.model.inline_response401 import InlineResponse401
from fds.sdk.Vermilion.model.inline_response403 import InlineResponse403
from fds.sdk.Vermilion.model.inline_response404 import InlineResponse404
from fds.sdk.Vermilion.model.inline_response406 import InlineResponse406


class DatasourceApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.v1_tenant_data_sources_data_source_code_data_get_endpoint = _Endpoint(
            settings={
                'response_type': ([DataSourceDataInstance],),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/{tenant}/data-sources/{dataSourceCode}/data',
                'operation_id': 'v1_tenant_data_sources_data_source_code_data_get',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'tenant',
                    'data_source_code',
                    'entity_codes',
                    'entity_keys',
                ],
                'required': [
                    'tenant',
                    'data_source_code',
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
                    'tenant':
                        (str,),
                    'data_source_code':
                        (str,),
                    'entity_codes':
                        (str,),
                    'entity_keys':
                        (str,),
                },
                'attribute_map': {
                    'tenant': 'tenant',
                    'data_source_code': 'dataSourceCode',
                    'entity_codes': 'entityCodes',
                    'entity_keys': 'entityKeys',
                },
                'location_map': {
                    'tenant': 'path',
                    'data_source_code': 'path',
                    'entity_codes': 'query',
                    'entity_keys': 'query',
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
        self.v1_tenant_data_sources_data_source_code_get_endpoint = _Endpoint(
            settings={
                'response_type': (DataSourceData,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/{tenant}/data-sources/{dataSourceCode}',
                'operation_id': 'v1_tenant_data_sources_data_source_code_get',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'tenant',
                    'data_source_code',
                ],
                'required': [
                    'tenant',
                    'data_source_code',
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
                    'tenant':
                        (str,),
                    'data_source_code':
                        (str,),
                },
                'attribute_map': {
                    'tenant': 'tenant',
                    'data_source_code': 'dataSourceCode',
                },
                'location_map': {
                    'tenant': 'path',
                    'data_source_code': 'path',
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
        self.v1_tenant_data_sources_get_endpoint = _Endpoint(
            settings={
                'response_type': (DataSourceList,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/{tenant}/data-sources',
                'operation_id': 'v1_tenant_data_sources_get',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'tenant',
                    'sort',
                    'pagination_limit',
                    'pagination_offset',
                ],
                'required': [
                    'tenant',
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
                    'tenant':
                        (str,),
                    'sort':
                        (str,),
                    'pagination_limit':
                        (int,),
                    'pagination_offset':
                        (int,),
                },
                'attribute_map': {
                    'tenant': 'tenant',
                    'sort': '_sort',
                    'pagination_limit': '_paginationLimit',
                    'pagination_offset': '_paginationOffset',
                },
                'location_map': {
                    'tenant': 'path',
                    'sort': 'query',
                    'pagination_limit': 'query',
                    'pagination_offset': 'query',
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

    def v1_tenant_data_sources_data_source_code_data_get(
        self,
        tenant,
        data_source_code,
        **kwargs
    ):
        """Gets the data for the datasource  # noqa: E501

        Gets the data for the datasource. There are optional query parameters to filter the da  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.v1_tenant_data_sources_data_source_code_data_get(tenant, data_source_code, async_req=True)
        >>> result = thread.get()

        Args:
            tenant (str): The code of the tenancy
            data_source_code (str): The code of the datasource

        Keyword Args:
            entity_codes (str): A series of query parameter used to filter the data for a datasource. This represents the entities for the datasource. E.g.: entityCodes=ACCOUNT&entityCodes=FUNDS. [optional]
            entity_keys (str): A series of query parameter used to filter the data for a datasource. This is the entity key value for an entity selection. E.g.: entityKeys=1&entityKeys=Test2. [optional]
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
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            async_req (bool): execute request asynchronously

        Returns:
            [DataSourceDataInstance]
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
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['tenant'] = \
            tenant
        kwargs['data_source_code'] = \
            data_source_code
        return self.v1_tenant_data_sources_data_source_code_data_get_endpoint.call_with_http_info(**kwargs)

    def v1_tenant_data_sources_data_source_code_get(
        self,
        tenant,
        data_source_code,
        **kwargs
    ):
        """Gets a datasource  # noqa: E501

        Gets a datasource based on the code passed  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.v1_tenant_data_sources_data_source_code_get(tenant, data_source_code, async_req=True)
        >>> result = thread.get()

        Args:
            tenant (str): The code of the tenancy
            data_source_code (str): The code of the datasource

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
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            async_req (bool): execute request asynchronously

        Returns:
            DataSourceData
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
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['tenant'] = \
            tenant
        kwargs['data_source_code'] = \
            data_source_code
        return self.v1_tenant_data_sources_data_source_code_get_endpoint.call_with_http_info(**kwargs)

    def v1_tenant_data_sources_get(
        self,
        tenant,
        **kwargs
    ):
        """Lists all datasources  # noqa: E501

        List all datasources the user has permission to see  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.v1_tenant_data_sources_get(tenant, async_req=True)
        >>> result = thread.get()

        Args:
            tenant (str): The code of the tenancy

        Keyword Args:
            sort (str): The column to sort on. Append - to sort in descending order. If parameter is not given, no sorting will be done. [optional]
            pagination_limit (int): Non-negative maximum number of entries to return. Default is 25. [optional]
            pagination_offset (int): Non-negative number of entries to skip. Default is 0. [optional]
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
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            async_req (bool): execute request asynchronously

        Returns:
            DataSourceList
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
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['tenant'] = \
            tenant
        return self.v1_tenant_data_sources_get_endpoint.call_with_http_info(**kwargs)
