"""
    OFDB API

    OFDB API  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401
from multiprocessing.pool import ApplyResult
import typing

from fds.sdk.OFDB.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.OFDB.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.OFDB.exceptions import ApiException
from fds.sdk.OFDB.model.create_database import CreateDatabase
from fds.sdk.OFDB.model.database_schema import DatabaseSchema
from fds.sdk.OFDB.model.inline_response202 import InlineResponse202
from fds.sdk.OFDB.model.inline_response400 import InlineResponse400
from fds.sdk.OFDB.model.inline_response403 import InlineResponse403
from fds.sdk.OFDB.model.inline_response404 import InlineResponse404
from fds.sdk.OFDB.model.inline_response406 import InlineResponse406
from fds.sdk.OFDB.model.inline_response429 import InlineResponse429





class CreateApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        self.create_database_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 201: (CreateDatabase,), 202: (InlineResponse202,), 400: (InlineResponse400,), 403: (InlineResponse403,), 404: (InlineResponse404,), 406: (InlineResponse406,), 429: (InlineResponse429,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/database',
                'operation_id': 'create_database',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'database_schema',
                ],
                'required': [],
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
                    'database_schema':
                        (DatabaseSchema,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'database_schema': 'body',
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


    @staticmethod
    def apply_kwargs_defaults(kwargs, return_http_data_only, async_req):
        kwargs["async_req"] = async_req
        kwargs["_return_http_data_only"] = return_http_data_only
        kwargs["_preload_content"] = kwargs.get("_preload_content", True)
        kwargs["_request_timeout"] = kwargs.get("_request_timeout", None)
        kwargs["_check_input_type"] = kwargs.get("_check_input_type", True)
        kwargs["_check_return_type"] = kwargs.get("_check_return_type", True)
        kwargs["_spec_property_naming"] = kwargs.get("_spec_property_naming", False)
        kwargs["_content_type"] = kwargs.get("_content_type")
        kwargs["_host_index"] = kwargs.get("_host_index")


    def create_database(
        self,
        **kwargs
    ) -> CreateDatabase:
        """create_database  # noqa: E501

        Creates a 2d or 3d database(OFDB). Users will note that not every field requires all the parameters listed in the schema. Please review FactSet data types on the OA for further guidance.  # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only


        Keyword Args:
            database_schema (DatabaseSchema): [optional]
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
        Returns:
            CreateDatabase
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        return self.create_database_endpoint.call_with_http_info(**kwargs)

    def create_database_with_http_info(
        self,
        **kwargs
    ) -> typing.Tuple[CreateDatabase, int, typing.MutableMapping]:
        """create_database  # noqa: E501

        Creates a 2d or 3d database(OFDB). Users will note that not every field requires all the parameters listed in the schema. Please review FactSet data types on the OA for further guidance.  # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers


        Keyword Args:
            database_schema (DatabaseSchema): [optional]
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
        Returns:
            CreateDatabase
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        return self.create_database_endpoint.call_with_http_info(**kwargs)

    def create_database_async(
        self,
        **kwargs
    ) -> "ApplyResult[CreateDatabase]":
        """create_database  # noqa: E501

        Creates a 2d or 3d database(OFDB). Users will note that not every field requires all the parameters listed in the schema. Please review FactSet data types on the OA for further guidance.  # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult


        Keyword Args:
            database_schema (DatabaseSchema): [optional]
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
        Returns:
            ApplyResult[CreateDatabase]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        return self.create_database_endpoint.call_with_http_info(**kwargs)

    def create_database_with_http_info_async(
        self,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[CreateDatabase, int, typing.MutableMapping]]":
        """create_database  # noqa: E501

        Creates a 2d or 3d database(OFDB). Users will note that not every field requires all the parameters listed in the schema. Please review FactSet data types on the OA for further guidance.  # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult


        Keyword Args:
            database_schema (DatabaseSchema): [optional]
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
        Returns:
            ApplyResult[(CreateDatabase, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        return self.create_database_endpoint.call_with_http_info(**kwargs)


