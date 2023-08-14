"""
    Tick History Level 2 (Beta)

    Tick History **Level 2** provides dynamic access to the historical tick data up to 10 levels of depth for a specific security for specific dates or date range. The API generates output files with data based on client-specified input parameters. The input parameters include universe specification and date ranges for which the data will be generated. When the API request with specified input parameters has been completed, the output files will be made available back to the users through a secure URL to the location where the files are stored. Therefore, this API has two APIs (i) Request files API (ii) Get Files API.  # noqa: E501

    The version of the OpenAPI document: 0.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401
from multiprocessing.pool import ApplyResult
import typing

from fds.sdk.FactSetTickHistory.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetTickHistory.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetTickHistory.exceptions import ApiException
from fds.sdk.FactSetTickHistory.model.level2_request_files_response import Level2RequestFilesResponse
from fds.sdk.FactSetTickHistory.model.status import Status





class RequestFilesLevel2BETAApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        self.getrequest_id_level2_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (Level2RequestFilesResponse,), 400: (Status,), 401: (Status,), 403: (Status,), 429: (Status,), 500: (Status,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/level2/request-files',
                'operation_id': 'getrequest_id_level2',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'ticker',
                    'start_date',
                    'end_date',
                    'mic',
                    'response_file_type',
                ],
                'required': [
                    'ticker',
                    'start_date',
                    'end_date',
                    'mic',
                ],
                'nullable': [
                ],
                'enum': [
                    'response_file_type',
                ],
                'validation': [
                    'ticker',
                ]
            },
            root_map={
                'validations': {
                    ('ticker',): {

                    },
                },
                'allowed_values': {
                    ('response_file_type',): {

                        "CSV": "csv",
                        "PARQUET": "parquet"
                    },
                },
                'openapi_types': {
                    'ticker':
                        ([str],),
                    'start_date':
                        (date,),
                    'end_date':
                        (date,),
                    'mic':
                        (str,),
                    'response_file_type':
                        (str,),
                },
                'attribute_map': {
                    'ticker': 'ticker',
                    'start_date': 'startDate',
                    'end_date': 'endDate',
                    'mic': 'mic',
                    'response_file_type': 'responseFileType',
                },
                'location_map': {
                    'ticker': 'query',
                    'start_date': 'query',
                    'end_date': 'query',
                    'mic': 'query',
                    'response_file_type': 'query',
                },
                'collection_format_map': {
                    'ticker': 'csv',
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


    def getrequest_id_level2(
        self,
        ticker,
        start_date,
        end_date,
        mic,
        **kwargs
    ) -> Level2RequestFilesResponse:
        """Returns the requestId and status  # noqa: E501

        Returns the requestId and status.  # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only

        Args:
            ticker ([str]): The requested list of one or more Market tickers.
            start_date (date): The date to which data is required.
            end_date (date): The date to which data is required.
            mic (str): This parameter is used to filter the results based on the exchange code. <p>**NOTE**:Does not support multiple mic codes</p>

        Keyword Args:
            response_file_type (str): Specifies the fileType. [optional] if omitted the server will use the default value of "parquet"
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
            Level2RequestFilesResponse
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        kwargs['ticker'] = \
            ticker
        kwargs['start_date'] = \
            start_date
        kwargs['end_date'] = \
            end_date
        kwargs['mic'] = \
            mic
        return self.getrequest_id_level2_endpoint.call_with_http_info(**kwargs)

    def getrequest_id_level2_with_http_info(
        self,
        ticker,
        start_date,
        end_date,
        mic,
        **kwargs
    ) -> typing.Tuple[Level2RequestFilesResponse, int, typing.MutableMapping]:
        """Returns the requestId and status  # noqa: E501

        Returns the requestId and status.  # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers

        Args:
            ticker ([str]): The requested list of one or more Market tickers.
            start_date (date): The date to which data is required.
            end_date (date): The date to which data is required.
            mic (str): This parameter is used to filter the results based on the exchange code. <p>**NOTE**:Does not support multiple mic codes</p>

        Keyword Args:
            response_file_type (str): Specifies the fileType. [optional] if omitted the server will use the default value of "parquet"
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
            Level2RequestFilesResponse
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        kwargs['ticker'] = \
            ticker
        kwargs['start_date'] = \
            start_date
        kwargs['end_date'] = \
            end_date
        kwargs['mic'] = \
            mic
        return self.getrequest_id_level2_endpoint.call_with_http_info(**kwargs)

    def getrequest_id_level2_async(
        self,
        ticker,
        start_date,
        end_date,
        mic,
        **kwargs
    ) -> "ApplyResult[Level2RequestFilesResponse]":
        """Returns the requestId and status  # noqa: E501

        Returns the requestId and status.  # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult

        Args:
            ticker ([str]): The requested list of one or more Market tickers.
            start_date (date): The date to which data is required.
            end_date (date): The date to which data is required.
            mic (str): This parameter is used to filter the results based on the exchange code. <p>**NOTE**:Does not support multiple mic codes</p>

        Keyword Args:
            response_file_type (str): Specifies the fileType. [optional] if omitted the server will use the default value of "parquet"
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
            ApplyResult[Level2RequestFilesResponse]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        kwargs['ticker'] = \
            ticker
        kwargs['start_date'] = \
            start_date
        kwargs['end_date'] = \
            end_date
        kwargs['mic'] = \
            mic
        return self.getrequest_id_level2_endpoint.call_with_http_info(**kwargs)

    def getrequest_id_level2_with_http_info_async(
        self,
        ticker,
        start_date,
        end_date,
        mic,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[Level2RequestFilesResponse, int, typing.MutableMapping]]":
        """Returns the requestId and status  # noqa: E501

        Returns the requestId and status.  # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult

        Args:
            ticker ([str]): The requested list of one or more Market tickers.
            start_date (date): The date to which data is required.
            end_date (date): The date to which data is required.
            mic (str): This parameter is used to filter the results based on the exchange code. <p>**NOTE**:Does not support multiple mic codes</p>

        Keyword Args:
            response_file_type (str): Specifies the fileType. [optional] if omitted the server will use the default value of "parquet"
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
            ApplyResult[(Level2RequestFilesResponse, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        kwargs['ticker'] = \
            ticker
        kwargs['start_date'] = \
            start_date
        kwargs['end_date'] = \
            end_date
        kwargs['mic'] = \
            mic
        return self.getrequest_id_level2_endpoint.call_with_http_info(**kwargs)

