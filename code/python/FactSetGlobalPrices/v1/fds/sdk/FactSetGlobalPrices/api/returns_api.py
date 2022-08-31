"""
    FactSet Global Prices API

    The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p>   # noqa: E501

    The version of the OpenAPI document: 1.4.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401
from multiprocessing.pool import ApplyResult
import typing

from fds.sdk.FactSetGlobalPrices.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetGlobalPrices.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetGlobalPrices.exceptions import ApiException
from fds.sdk.FactSetGlobalPrices.model.error_response import ErrorResponse
from fds.sdk.FactSetGlobalPrices.model.returns_request import ReturnsRequest
from fds.sdk.FactSetGlobalPrices.model.returns_response import ReturnsResponse





class ReturnsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_returns_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (ReturnsResponse,), 400: (ErrorResponse,), 401: (ErrorResponse,), 403: (ErrorResponse,), 415: (ErrorResponse,), 500: (ErrorResponse,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-global-prices/v1/returns',
                'operation_id': 'get_returns',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'ids',
                    'start_date',
                    'end_date',
                    'currency',
                    'frequency',
                    'dividend_adjust',
                ],
                'required': [
                    'ids',
                    'start_date',
                ],
                'nullable': [
                ],
                'enum': [
                    'frequency',
                    'dividend_adjust',
                ],
                'validation': [
                    'ids',
                ]
            },
            root_map={
                'validations': {
                    ('ids',): {

                        'max_items': 50,
                        'min_items': 1,
                    },
                },
                'allowed_values': {
                    ('frequency',): {

                        "D": "D",
                        "AD": "AD",
                        "W": "W",
                        "M": "M",
                        "AM": "AM",
                        "AQ": "AQ",
                        "CQ": "CQ",
                        "ASA": "ASA",
                        "CSA": "CSA",
                        "AY": "AY",
                        "CY": "CY"
                    },
                    ('dividend_adjust',): {

                        "PRICE": "PRICE",
                        "EXDATE": "EXDATE",
                        "EXDATE_C": "EXDATE_C"
                    },
                },
                'openapi_types': {
                    'ids':
                        ([str],),
                    'start_date':
                        (str,),
                    'end_date':
                        (str,),
                    'currency':
                        (str,),
                    'frequency':
                        (str,),
                    'dividend_adjust':
                        (str,),
                },
                'attribute_map': {
                    'ids': 'ids',
                    'start_date': 'startDate',
                    'end_date': 'endDate',
                    'currency': 'currency',
                    'frequency': 'frequency',
                    'dividend_adjust': 'dividendAdjust',
                },
                'location_map': {
                    'ids': 'query',
                    'start_date': 'query',
                    'end_date': 'query',
                    'currency': 'query',
                    'frequency': 'query',
                    'dividend_adjust': 'query',
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
        self.get_returns_for_list_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (ReturnsResponse,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-global-prices/v1/returns',
                'operation_id': 'get_returns_for_list',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'returns_request',
                ],
                'required': [
                    'returns_request',
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
                    'returns_request':
                        (ReturnsRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'returns_request': 'body',
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

    def get_returns(
        self,
        ids,
        start_date,
        **kwargs
    ) -> ReturnsResponse:
        """Gets Returns for a list of `ids` as of given date range.  # noqa: E501

        Returns for the requested ids and currency for the given dates. Depending on the input parameters the return data is provided.    # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only

        Args:
            ids ([str]): The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  50 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
            start_date (str): The start date requested for a given date range in **YYYY-MM-DD** format. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. 

        Keyword Args:
            end_date (str): The end date requested for a given date range in **YYYY-MM-DD** format. The input end date must be after the input start date. Future dates (T+1) are not accepted in this endpoint. . [optional]
            currency (str): Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).. [optional]
            frequency (str): Controls the display frequency of the data returned.   * **D** = Daily   * **AD** = Actual Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **AQ** =  Actual Quarterly   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **ASA** = Actual Semi-annual   * **CSA** = Calendar Semi-annual   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.    . [optional] if omitted the server will use the default value of "D"
            dividend_adjust (str): Controls the dividend reinvestment for the returns calculation.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate.     . [optional] if omitted the server will use the default value of "EXDATE_C"
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
            ReturnsResponse
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        kwargs['ids'] = \
            ids
        kwargs['start_date'] = \
            start_date
        return self.get_returns_endpoint.call_with_http_info(**kwargs)

    def get_returns_with_http_info(
        self,
        ids,
        start_date,
        **kwargs
    ) -> typing.Tuple[ReturnsResponse, int, typing.MutableMapping]:
        """Gets Returns for a list of `ids` as of given date range.  # noqa: E501

        Returns for the requested ids and currency for the given dates. Depending on the input parameters the return data is provided.    # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers

        Args:
            ids ([str]): The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  50 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
            start_date (str): The start date requested for a given date range in **YYYY-MM-DD** format. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. 

        Keyword Args:
            end_date (str): The end date requested for a given date range in **YYYY-MM-DD** format. The input end date must be after the input start date. Future dates (T+1) are not accepted in this endpoint. . [optional]
            currency (str): Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).. [optional]
            frequency (str): Controls the display frequency of the data returned.   * **D** = Daily   * **AD** = Actual Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **AQ** =  Actual Quarterly   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **ASA** = Actual Semi-annual   * **CSA** = Calendar Semi-annual   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.    . [optional] if omitted the server will use the default value of "D"
            dividend_adjust (str): Controls the dividend reinvestment for the returns calculation.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate.     . [optional] if omitted the server will use the default value of "EXDATE_C"
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
            ReturnsResponse
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        kwargs['ids'] = \
            ids
        kwargs['start_date'] = \
            start_date
        return self.get_returns_endpoint.call_with_http_info(**kwargs)

    def get_returns_async(
        self,
        ids,
        start_date,
        **kwargs
    ) -> "ApplyResult[ReturnsResponse]":
        """Gets Returns for a list of `ids` as of given date range.  # noqa: E501

        Returns for the requested ids and currency for the given dates. Depending on the input parameters the return data is provided.    # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult

        Args:
            ids ([str]): The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  50 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
            start_date (str): The start date requested for a given date range in **YYYY-MM-DD** format. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. 

        Keyword Args:
            end_date (str): The end date requested for a given date range in **YYYY-MM-DD** format. The input end date must be after the input start date. Future dates (T+1) are not accepted in this endpoint. . [optional]
            currency (str): Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).. [optional]
            frequency (str): Controls the display frequency of the data returned.   * **D** = Daily   * **AD** = Actual Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **AQ** =  Actual Quarterly   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **ASA** = Actual Semi-annual   * **CSA** = Calendar Semi-annual   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.    . [optional] if omitted the server will use the default value of "D"
            dividend_adjust (str): Controls the dividend reinvestment for the returns calculation.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate.     . [optional] if omitted the server will use the default value of "EXDATE_C"
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
            ApplyResult[ReturnsResponse]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        kwargs['ids'] = \
            ids
        kwargs['start_date'] = \
            start_date
        return self.get_returns_endpoint.call_with_http_info(**kwargs)

    def get_returns_with_http_info_async(
        self,
        ids,
        start_date,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[ReturnsResponse, int, typing.MutableMapping]]":
        """Gets Returns for a list of `ids` as of given date range.  # noqa: E501

        Returns for the requested ids and currency for the given dates. Depending on the input parameters the return data is provided.    # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult

        Args:
            ids ([str]): The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  50 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
            start_date (str): The start date requested for a given date range in **YYYY-MM-DD** format. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. 

        Keyword Args:
            end_date (str): The end date requested for a given date range in **YYYY-MM-DD** format. The input end date must be after the input start date. Future dates (T+1) are not accepted in this endpoint. . [optional]
            currency (str): Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).. [optional]
            frequency (str): Controls the display frequency of the data returned.   * **D** = Daily   * **AD** = Actual Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **AQ** =  Actual Quarterly   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **ASA** = Actual Semi-annual   * **CSA** = Calendar Semi-annual   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.    . [optional] if omitted the server will use the default value of "D"
            dividend_adjust (str): Controls the dividend reinvestment for the returns calculation.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate.     . [optional] if omitted the server will use the default value of "EXDATE_C"
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
            ApplyResult[(ReturnsResponse, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        kwargs['ids'] = \
            ids
        kwargs['start_date'] = \
            start_date
        return self.get_returns_endpoint.call_with_http_info(**kwargs)

    def get_returns_for_list(
        self,
        returns_request,
        **kwargs
    ) -> ReturnsResponse:
        """Gets Returns for a list of `ids` as of given date range.  # noqa: E501

        Returns for the requested ids and currency for the given dates. Depending on the input parameters the return data is provided.  # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only

        Args:
            returns_request (ReturnsRequest): Request object for `Returns`.

        Keyword Args:
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
            ReturnsResponse
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        kwargs['returns_request'] = \
            returns_request
        return self.get_returns_for_list_endpoint.call_with_http_info(**kwargs)

    def get_returns_for_list_with_http_info(
        self,
        returns_request,
        **kwargs
    ) -> typing.Tuple[ReturnsResponse, int, typing.MutableMapping]:
        """Gets Returns for a list of `ids` as of given date range.  # noqa: E501

        Returns for the requested ids and currency for the given dates. Depending on the input parameters the return data is provided.  # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers

        Args:
            returns_request (ReturnsRequest): Request object for `Returns`.

        Keyword Args:
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
            ReturnsResponse
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        kwargs['returns_request'] = \
            returns_request
        return self.get_returns_for_list_endpoint.call_with_http_info(**kwargs)

    def get_returns_for_list_async(
        self,
        returns_request,
        **kwargs
    ) -> "ApplyResult[ReturnsResponse]":
        """Gets Returns for a list of `ids` as of given date range.  # noqa: E501

        Returns for the requested ids and currency for the given dates. Depending on the input parameters the return data is provided.  # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult

        Args:
            returns_request (ReturnsRequest): Request object for `Returns`.

        Keyword Args:
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
            ApplyResult[ReturnsResponse]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        kwargs['returns_request'] = \
            returns_request
        return self.get_returns_for_list_endpoint.call_with_http_info(**kwargs)

    def get_returns_for_list_with_http_info_async(
        self,
        returns_request,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[ReturnsResponse, int, typing.MutableMapping]]":
        """Gets Returns for a list of `ids` as of given date range.  # noqa: E501

        Returns for the requested ids and currency for the given dates. Depending on the input parameters the return data is provided.  # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult

        Args:
            returns_request (ReturnsRequest): Request object for `Returns`.

        Keyword Args:
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
            ApplyResult[(ReturnsResponse, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        kwargs['returns_request'] = \
            returns_request
        return self.get_returns_for_list_endpoint.call_with_http_info(**kwargs)

