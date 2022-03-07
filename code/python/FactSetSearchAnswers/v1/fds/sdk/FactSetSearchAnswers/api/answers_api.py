"""
    FactSet Search Answers API

    The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: FactSearch.Team@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetSearchAnswers.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetSearchAnswers.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetSearchAnswers.model.adaptive_card_answer_success_response import AdaptiveCardAnswerSuccessResponse
from fds.sdk.FactSetSearchAnswers.model.answer_failure_response import AnswerFailureResponse
from fds.sdk.FactSetSearchAnswers.model.data_answer_success_response import DataAnswerSuccessResponse


class AnswersApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.search_for_adaptive_card_answer_endpoint = _Endpoint(
            settings={
                'response_type': (AdaptiveCardAnswerSuccessResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/search/answers/v1/adaptive-card',
                'operation_id': 'search_for_adaptive_card_answer',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'query',
                    'include_thumbnail',
                    'disable_no_answer_responses',
                ],
                'required': [
                    'query',
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
                    'query':
                        (str,),
                    'include_thumbnail':
                        (bool,),
                    'disable_no_answer_responses':
                        (bool,),
                },
                'attribute_map': {
                    'query': 'query',
                    'include_thumbnail': 'includeThumbnail',
                    'disable_no_answer_responses': 'disableNoAnswerResponses',
                },
                'location_map': {
                    'query': 'query',
                    'include_thumbnail': 'query',
                    'disable_no_answer_responses': 'query',
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
        self.search_for_data_answer_endpoint = _Endpoint(
            settings={
                'response_type': (DataAnswerSuccessResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/search/answers/v1/data',
                'operation_id': 'search_for_data_answer',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'query',
                ],
                'required': [
                    'query',
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
                    'query':
                        (str,),
                },
                'attribute_map': {
                    'query': 'query',
                },
                'location_map': {
                    'query': 'query',
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

    def search_for_adaptive_card_answer(
        self,
        query,
        **kwargs
    ):
        """Fetch FactSet answer in Adaptive Card format  # noqa: E501

        Returns an answer to the specified query (if valid answer exists) in the Adaptive Card format (https://adaptivecards.io/).  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.search_for_adaptive_card_answer(query, async_req=True)
        >>> result = thread.get()

        Args:
            query (str): Query for desired answer (e.g., \"fds price\")

        Keyword Args:
            include_thumbnail (bool): Includes thumbnail of Adaptive Card in response. [optional] if omitted the server will use the default value of False
            disable_no_answer_responses (bool): Disables no-result answer responses (no-results and answer without data). [optional] if omitted the server will use the default value of True
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
            AdaptiveCardAnswerSuccessResponse
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
        kwargs['query'] = \
            query
        return self.search_for_adaptive_card_answer_endpoint.call_with_http_info(**kwargs)

    def search_for_data_answer(
        self,
        query,
        **kwargs
    ):
        """Fetch FactSet answer in data format  # noqa: E501

        Returns an answer to the specified query (if a valid answer exists). Returns the answer data only (as JSON), without any markup information.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.search_for_data_answer(query, async_req=True)
        >>> result = thread.get()

        Args:
            query (str): Query for desired answer (e.g., \"fds price\")

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
            DataAnswerSuccessResponse
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
        kwargs['query'] = \
            query
        return self.search_for_data_answer_endpoint.call_with_http_info(**kwargs)
