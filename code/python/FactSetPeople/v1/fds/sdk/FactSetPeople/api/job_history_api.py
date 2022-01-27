"""
    FactSet People API

    The FactSet People API exposes FactSet data for individuals and their jobs.   # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetPeople.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetPeople.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetPeople.model.error_response import ErrorResponse
from fds.sdk.FactSetPeople.model.people_jobs_request import PeopleJobsRequest
from fds.sdk.FactSetPeople.model.people_jobs_response import PeopleJobsResponse


class JobHistoryApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_people_jobs_endpoint = _Endpoint(
            settings={
                'response_type': (PeopleJobsResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-people/v1/jobs',
                'operation_id': 'get_people_jobs',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'ids',
                    'status',
                    'level',
                    'type',
                ],
                'required': [
                    'ids',
                ],
                'nullable': [
                ],
                'enum': [
                    'status',
                    'level',
                    'type',
                ],
                'validation': [
                    'ids',
                ]
            },
            root_map={
                'validations': {
                    ('ids',): {

                        'max_items': 1000,
                        'min_items': 1,
                    },
                },
                'allowed_values': {
                    ('status',): {

                        "ALL": "ALL",
                        "PRIMARY": "PRIMARY",
                        "ACTIVE": "ACTIVE",
                        "INACTIVE": "INACTIVE"
                    },
                    ('level',): {

                        "SUMMARY": "SUMMARY",
                        "DETAIL": "DETAIL"
                    },
                    ('type',): {

                        "ALL": "ALL",
                        "BRD": "BRD",
                        "EMP": "EMP"
                    },
                },
                'openapi_types': {
                    'ids':
                        ([str],),
                    'status':
                        (str,),
                    'level':
                        (str,),
                    'type':
                        (str,),
                },
                'attribute_map': {
                    'ids': 'ids',
                    'status': 'status',
                    'level': 'level',
                    'type': 'type',
                },
                'location_map': {
                    'ids': 'query',
                    'status': 'query',
                    'level': 'query',
                    'type': 'query',
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
        self.get_people_jobs_for_list_endpoint = _Endpoint(
            settings={
                'response_type': (PeopleJobsResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-people/v1/jobs',
                'operation_id': 'get_people_jobs_for_list',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'people_jobs_request',
                ],
                'required': [
                    'people_jobs_request',
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
                    'people_jobs_request':
                        (PeopleJobsRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'people_jobs_request': 'body',
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

    def get_people_jobs(
        self,
        ids,
        **kwargs
    ):
        """Returns the Job history of the person.  # noqa: E501

        Returns the `Job` history of the person referenced by the entityId specified in the request.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_people_jobs(ids, async_req=True)
        >>> result = thread.get()

        Args:
            ids ([str]): List of FactSet Person Entity identifier.

        Keyword Args:
            status (str): Select only Jobs with a certain status primary, active, or inactive.. [optional] if omitted the server will use the default value of "ALL"
            level (str): Select the level of detail only main Jobs or include other Jobs at a company.. [optional] if omitted the server will use the default value of "DETAIL"
            type (str): Select only Jobs of a certain type board member or employee.. [optional] if omitted the server will use the default value of "ALL"
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
            PeopleJobsResponse
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
        return self.get_people_jobs_endpoint.call_with_http_info(**kwargs)

    def get_people_jobs_for_list(
        self,
        people_jobs_request,
        **kwargs
    ):
        """Returns the Job history for the large list of people.  # noqa: E501

        Returns the `Job` history of the person referenced by the entityId specified in the request.   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_people_jobs_for_list(people_jobs_request, async_req=True)
        >>> result = thread.get()

        Args:
            people_jobs_request (PeopleJobsRequest):

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
            PeopleJobsResponse
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
        kwargs['people_jobs_request'] = \
            people_jobs_request
        return self.get_people_jobs_for_list_endpoint.call_with_http_info(**kwargs)
