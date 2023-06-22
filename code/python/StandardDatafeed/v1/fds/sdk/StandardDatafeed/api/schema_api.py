"""
    SDF Download API

    The Standard DataFeed (SDF) Download API provides an alternative method for users to request and retrieve SDF packages (schemas & bundles). This service is not a direct replacement and does not have 100% feature parity with the Loader Application. This API provides an alternative for users who are unable to utilize the Loader application due to following reasons:   - Inability to install 3rd party executables due to Corporate Security policies     - Inability to utilize the Loader application due to limitations or restrictions with the environment used to consume Standard Datafeed   - Clients who are utilizing existing delivery method like FTP, who may want to use a more secured & modern solution     This API allows users to retrieve  - SDF packages(excluding Quant Factor Library) they have subscriptions for, going back to August 31, 2021,  - QFL - Quant Factor Library (Factor Family & Factor Groups) packages they have subscriptions for, going back to January 01, 1995.    Additional parameters are available to filter requests to get the exact files users are looking for.    QFL data is delivered through Content API & Bulk Data API (SDF API)  - Content API : Provides direct access to FactSet-hosted QFL data.  Suitable for interactive, ad hoc QFL requests.  Constraints on large extracts.  Costs are based on consumption, i.e. more calls can result in more costs.  - Bulk Data API : Provides access to download locations of zip files for client download. Suitable for production processes within a client environment. Cost is based on the use case and fixed unless scope changes (same as other SDFs).  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: teammustang@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401
from multiprocessing.pool import ApplyResult
import typing

from fds.sdk.StandardDatafeed.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.StandardDatafeed.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.StandardDatafeed.exceptions import ApiException
from fds.sdk.StandardDatafeed.model.list_schema400_response import ListSchema400Response
from fds.sdk.StandardDatafeed.model.list_schemas import ListSchemas





class SchemaApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        self.get_v1_list_schemas_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (ListSchemas,), 400: (ListSchema400Response,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/list-schemas',
                'operation_id': 'get_v1_list_schemas',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'schema',
                    'sequence',
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
                    'schema':
                        (str,),
                    'sequence':
                        (int,),
                },
                'attribute_map': {
                    'schema': 'schema',
                    'sequence': 'sequence',
                },
                'location_map': {
                    'schema': 'query',
                    'sequence': 'query',
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


    def get_v1_list_schemas(
        self,
        **kwargs
    ) -> ListSchemas:
        """schemas  # noqa: E501

        <a href=https://api.factset.com/bulk-documents/sdf/v1/list-schemas>List-Schemas</a> helper end point provides the list of schemas subscribed by the client and their corresponding sequences if no query parameters are passed in the request.   If schema & sequence number (version number of schema) are passed in the request, this endpoint provides a downloadable presigned url containing the schema information.  # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only


        Keyword Args:
            schema (str): schema name</p> </p> **Example: acta_v1, fgp_v1, yn_v1**  QFL:- To query QFL data, please use value:   **qfl_v1** . [optional]
            sequence (int): Version number of a schema  Please enter the sequence number associated with the schema passed in the request **Example: \"8\" from acta_v1: [8],**  QFL:- Enter the sequence number associated with the qfl schema   **Note:** Please pass sequence parameter only while passing the schema parameter in the request. [optional]
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
            ListSchemas
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        return self.get_v1_list_schemas_endpoint.call_with_http_info(**kwargs)

    def get_v1_list_schemas_with_http_info(
        self,
        **kwargs
    ) -> typing.Tuple[ListSchemas, int, typing.MutableMapping]:
        """schemas  # noqa: E501

        <a href=https://api.factset.com/bulk-documents/sdf/v1/list-schemas>List-Schemas</a> helper end point provides the list of schemas subscribed by the client and their corresponding sequences if no query parameters are passed in the request.   If schema & sequence number (version number of schema) are passed in the request, this endpoint provides a downloadable presigned url containing the schema information.  # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers


        Keyword Args:
            schema (str): schema name</p> </p> **Example: acta_v1, fgp_v1, yn_v1**  QFL:- To query QFL data, please use value:   **qfl_v1** . [optional]
            sequence (int): Version number of a schema  Please enter the sequence number associated with the schema passed in the request **Example: \"8\" from acta_v1: [8],**  QFL:- Enter the sequence number associated with the qfl schema   **Note:** Please pass sequence parameter only while passing the schema parameter in the request. [optional]
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
            ListSchemas
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        return self.get_v1_list_schemas_endpoint.call_with_http_info(**kwargs)

    def get_v1_list_schemas_async(
        self,
        **kwargs
    ) -> "ApplyResult[ListSchemas]":
        """schemas  # noqa: E501

        <a href=https://api.factset.com/bulk-documents/sdf/v1/list-schemas>List-Schemas</a> helper end point provides the list of schemas subscribed by the client and their corresponding sequences if no query parameters are passed in the request.   If schema & sequence number (version number of schema) are passed in the request, this endpoint provides a downloadable presigned url containing the schema information.  # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult


        Keyword Args:
            schema (str): schema name</p> </p> **Example: acta_v1, fgp_v1, yn_v1**  QFL:- To query QFL data, please use value:   **qfl_v1** . [optional]
            sequence (int): Version number of a schema  Please enter the sequence number associated with the schema passed in the request **Example: \"8\" from acta_v1: [8],**  QFL:- Enter the sequence number associated with the qfl schema   **Note:** Please pass sequence parameter only while passing the schema parameter in the request. [optional]
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
            ApplyResult[ListSchemas]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        return self.get_v1_list_schemas_endpoint.call_with_http_info(**kwargs)

    def get_v1_list_schemas_with_http_info_async(
        self,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[ListSchemas, int, typing.MutableMapping]]":
        """schemas  # noqa: E501

        <a href=https://api.factset.com/bulk-documents/sdf/v1/list-schemas>List-Schemas</a> helper end point provides the list of schemas subscribed by the client and their corresponding sequences if no query parameters are passed in the request.   If schema & sequence number (version number of schema) are passed in the request, this endpoint provides a downloadable presigned url containing the schema information.  # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult


        Keyword Args:
            schema (str): schema name</p> </p> **Example: acta_v1, fgp_v1, yn_v1**  QFL:- To query QFL data, please use value:   **qfl_v1** . [optional]
            sequence (int): Version number of a schema  Please enter the sequence number associated with the schema passed in the request **Example: \"8\" from acta_v1: [8],**  QFL:- Enter the sequence number associated with the qfl schema   **Note:** Please pass sequence parameter only while passing the schema parameter in the request. [optional]
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
            ApplyResult[(ListSchemas, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        return self.get_v1_list_schemas_endpoint.call_with_http_info(**kwargs)


