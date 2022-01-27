"""
    OFDB API

    OFDB api  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: cpd-hyd-engineering@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

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
from fds.sdk.OFDB.model.dates import Dates
from fds.sdk.OFDB.model.fields import Fields
from fds.sdk.OFDB.model.symbols import Symbols


class ViewApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_database_endpoint = _Endpoint(
            settings={
                'response_type': None,
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/database/{path}',
                'operation_id': 'get_database',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'path',
                    'symbol',
                    'date',
                    'filter_fields',
                    'filter_ops',
                    'filter_values',
                    'filter_dates_ops',
                    'filter_dates_values',
                    'filter_symbols_ops',
                    'filter_symbols_values',
                    'sort_field_name',
                    'sort_field_order',
                ],
                'required': [
                    'path',
                ],
                'nullable': [
                ],
                'enum': [
                    'sort_field_order',
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                    ('sort_field_order',): {

                        "ASC": "ASC",
                        "DESC": "DESC"
                    },
                },
                'openapi_types': {
                    'path':
                        (str,),
                    'symbol':
                        (str,),
                    'date':
                        (str,),
                    'filter_fields':
                        (str,),
                    'filter_ops':
                        (str,),
                    'filter_values':
                        (str,),
                    'filter_dates_ops':
                        (str,),
                    'filter_dates_values':
                        (str,),
                    'filter_symbols_ops':
                        (str,),
                    'filter_symbols_values':
                        (str,),
                    'sort_field_name':
                        (str,),
                    'sort_field_order':
                        (str,),
                },
                'attribute_map': {
                    'path': 'path',
                    'symbol': 'symbol',
                    'date': 'date',
                    'filter_fields': 'filterFields',
                    'filter_ops': 'filterOps',
                    'filter_values': 'filterValues',
                    'filter_dates_ops': 'filterDatesOps',
                    'filter_dates_values': 'filterDatesValues',
                    'filter_symbols_ops': 'filterSymbolsOps',
                    'filter_symbols_values': 'filterSymbolsValues',
                    'sort_field_name': 'sortFieldName',
                    'sort_field_order': 'sortFieldOrder',
                },
                'location_map': {
                    'path': 'path',
                    'symbol': 'query',
                    'date': 'query',
                    'filter_fields': 'query',
                    'filter_ops': 'query',
                    'filter_values': 'query',
                    'filter_dates_ops': 'query',
                    'filter_dates_values': 'query',
                    'filter_symbols_ops': 'query',
                    'filter_symbols_values': 'query',
                    'sort_field_name': 'query',
                    'sort_field_order': 'query',
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
        self.v1_database_path_dates_get_endpoint = _Endpoint(
            settings={
                'response_type': (Dates,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/database/{path}/dates',
                'operation_id': 'v1_database_path_dates_get',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'path',
                    'between',
                    'equals',
                    'before',
                    'after',
                    'order_by',
                ],
                'required': [
                    'path',
                ],
                'nullable': [
                ],
                'enum': [
                    'order_by',
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                    ('order_by',): {

                        "ASC": "asc",
                        "DESC": "desc"
                    },
                },
                'openapi_types': {
                    'path':
                        (str,),
                    'between':
                        (str,),
                    'equals':
                        (str,),
                    'before':
                        (str,),
                    'after':
                        (str,),
                    'order_by':
                        (str,),
                },
                'attribute_map': {
                    'path': 'path',
                    'between': 'between',
                    'equals': 'equals',
                    'before': 'before',
                    'after': 'after',
                    'order_by': 'orderBy',
                },
                'location_map': {
                    'path': 'path',
                    'between': 'query',
                    'equals': 'query',
                    'before': 'query',
                    'after': 'query',
                    'order_by': 'query',
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
        self.v1_database_path_fields_get_endpoint = _Endpoint(
            settings={
                'response_type': (Fields,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/database/{path}/fields',
                'operation_id': 'v1_database_path_fields_get',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'path',
                ],
                'required': [
                    'path',
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
                    'path':
                        (str,),
                },
                'attribute_map': {
                    'path': 'path',
                },
                'location_map': {
                    'path': 'path',
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
        self.v1_database_path_symbols_get_endpoint = _Endpoint(
            settings={
                'response_type': (Symbols,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/database/{path}/symbols',
                'operation_id': 'v1_database_path_symbols_get',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'path',
                    'starts_with',
                    'ends_with',
                    'contains',
                    'equals',
                    'order_by',
                ],
                'required': [
                    'path',
                ],
                'nullable': [
                ],
                'enum': [
                    'order_by',
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                    ('order_by',): {

                        "ASC": "asc",
                        "DESC": "desc"
                    },
                },
                'openapi_types': {
                    'path':
                        (str,),
                    'starts_with':
                        (str,),
                    'ends_with':
                        (str,),
                    'contains':
                        (str,),
                    'equals':
                        (str,),
                    'order_by':
                        (str,),
                },
                'attribute_map': {
                    'path': 'path',
                    'starts_with': 'startsWith',
                    'ends_with': 'endsWith',
                    'contains': 'contains',
                    'equals': 'equals',
                    'order_by': 'orderBy',
                },
                'location_map': {
                    'path': 'path',
                    'starts_with': 'query',
                    'ends_with': 'query',
                    'contains': 'query',
                    'equals': 'query',
                    'order_by': 'query',
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

    def get_database(
        self,
        path,
        **kwargs
    ):
        """get_database  # noqa: E501

        Returns the data in the database(OFDB, OMS_OFDB, ECONOFDB) for the mentioned Symbol or Date. Atleast one parameter(Symbol/Date) is required. For a range of dates symbol parameter is mandatory.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_database(path, async_req=True)
        >>> result = thread.get()

        Args:
            path (str): Encode database path

        Keyword Args:
            symbol (str): Returns data for the symbol mentioned. e.g:sym1. [optional]
            date (str): Return data for the specific date or range of dates mentioned.e.g:[date1,date2]. [optional]
            filter_fields (str): Can specify the fields on which you want to perform field filter operations e.g: [\"PRICE\",\"SECTOR\"]  Note:  The request will respond with 400 1. If fields which are not present on OFDB are given. 2. If filterOps or filterValues query parameters are missing    when filterFields is present. 3. If number of values given for filterOps,      filterFields, filterValues are different 4. If exactly one of symbol or date query parameter is not provided. . [optional]
            filter_ops (str): Can specify the field filter operations which you want to perform e.g: [\"LT\", \"GTEQ\", \"CT\"] in respective order of values in filterFields query parameter.  The available field filter operations are :  For CHAR type fields:  \"CT\" : contains  \"SW\" : starts-with  \"EW\" : ends-with   \"EQ\" : equals  For NUMERIC type fields:  \"GT\" : greater than  \"GTEQ\" : greater than or equals  \"LT\" : lesser than  \"LTEQ\" : lesser than or equals  \"EQ\" : equals  Note:  The request will respond with 400  1. If operations other than the above mentioned are provided. 2. If numeric operations are given to char type fields instead of char operations. 3. If char operations are given to numeric type fields instead of numeric operations. 4. If filterFields or filterValues query parameters are missing    when filterOps is present. 5. If number of values given for filterOps,      filterFields, filterValues are different 6. If exactly one of symbol or date query parameter is not provided. . [optional]
            filter_values (str): Can specify the field filter values of the field filter operations e.g: [100, 20, \"AB\"] in respective order of values in filterFields and filterOps query parameters .  Note:   The request will respond with 400 1. If char values are given to numeric type fields. 2. If filterFields or filterOps query parameters are missing    when filterValues is present. 3. If number of values given for filterOps,      filterFields, filterValues are different 4. If exactly one of symbol or date query parameter is not provided. . [optional]
            filter_dates_ops (str): Can specify the date filter operations which you want to perform e.g: [\"LT\", \"GTEQ\"].  The available date filter operations are :  \"GT\" : after  \"GTEQ\" : after or equals  \"LT\" : before  \"LTEQ\" : before or equals  \"EQ\" : equals\"  Note:  The request will respond with 400  1. If operations other than the above mentioned are given. 2. If filterDatesValues query parameter is missing when filterDatesOps is present. 3. If number of values given for filterDatesOps and filterDatesValues differ. 4. If symbol query parameter is not provided. . [optional]
            filter_dates_values (str): Can specify the date filter values of the date filter operations e.g: [20200505, 20200303] in respective order of values in filterDatesOps query parameter.  Note:  The request will respond with 400 1. If invalid date values are given 2. If filterDatesOps query parameter is missing when filterDatesValues is present. 3. If number of values given for filterDatesOps and filterDatesValues differ. 4. If symbol query parameter is not provided. . [optional]
            filter_symbols_ops (str): Can specify the symbol filter operations which you want to perform e.g: [\"CT\", \"SW\"].  The available symbol filter operations are:  \"SW\" : starts-with  \"EW\" : ends-with  \"CT\" : contains  \"EQ\" : equals  Note:  The request will respond with 400 1. If operations other than the above mentioned are given. 2. If filterSymbolsValues query parameter is missing when filterSymbolsOps is present. 3. If number of values given for filterSymbolsOps and filterSymbolsValues differ. 4. If date query parameter is not provided. . [optional]
            filter_symbols_values (str): Can specify the symbol filter values of the date filter operations e.g: [\"ab\", \"xy\"] in respective order of values in filterSymbolsOps query parameter.  Note: The request will respond with 400 1. If filterSymbolsOps query parameter is missing when filterSymbolsValues is present. 2. If number of values given for filterSymbolsOps and filterSymbolsValues differ. 3. If date query parameter is not provided. . [optional]
            sort_field_name (str): Can specify the name of field with respect to which user wants to sort data   Note: The request will respond with 400, If a field which doesn't exist in the OFDB is requested. [optional]
            sort_field_order (str): Can specify the order in which user wants to sort data with respect to sortFieldName query parameter   Note: The request will respond with 400, If value other than asc or desc is requested. [optional]
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
            None
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
        kwargs['path'] = \
            path
        return self.get_database_endpoint.call_with_http_info(**kwargs)

    def v1_database_path_dates_get(
        self,
        path,
        **kwargs
    ):
        """v1_database_path_dates_get  # noqa: E501

        Returns all the dates in the database(OFDB, OMS_OFDB, ECONOFDB)  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.v1_database_path_dates_get(path, async_req=True)
        >>> result = thread.get()

        Args:
            path (str): Encode database path

        Keyword Args:
            between (str): Returns list of dates which are between [start,end], dates should be in the respective order of start and end. [optional]
            equals (str): Returns the date which matches given date. [optional]
            before (str): Returns list of dates which are before mentioned date. [optional]
            after (str): Returns list of dates which are after mentioned date. [optional]
            order_by (str): Returns dates in the mentioned sorted order, should provide asc or desc. [optional]
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
            Dates
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
        kwargs['path'] = \
            path
        return self.v1_database_path_dates_get_endpoint.call_with_http_info(**kwargs)

    def v1_database_path_fields_get(
        self,
        path,
        **kwargs
    ):
        """v1_database_path_fields_get  # noqa: E501

        Returns all the fields in the database(OFDB, OMS_OFDB, ECONOFDB)  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.v1_database_path_fields_get(path, async_req=True)
        >>> result = thread.get()

        Args:
            path (str): Encode database path

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
            Fields
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
        kwargs['path'] = \
            path
        return self.v1_database_path_fields_get_endpoint.call_with_http_info(**kwargs)

    def v1_database_path_symbols_get(
        self,
        path,
        **kwargs
    ):
        """v1_database_path_symbols_get  # noqa: E501

        Returns all the symbols in the database(OFDB, OMS_OFDB, ECONOFDB)  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.v1_database_path_symbols_get(path, async_req=True)
        >>> result = thread.get()

        Args:
            path (str): Encode database path

        Keyword Args:
            starts_with (str): Returns list of symbols which starts with mentioned string. [optional]
            ends_with (str): Returns list of symbols which ends with mentioned string. [optional]
            contains (str): Returns list of symbols which contains mentioned string. [optional]
            equals (str): Returns symbol which matches mentioned string. [optional]
            order_by (str): Returns symbols in the mentioned sorted order, should provide asc or desc. [optional]
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
            Symbols
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
        kwargs['path'] = \
            path
        return self.v1_database_path_symbols_get_endpoint.call_with_http_info(**kwargs)
