"""
    IRN API v1

    Allows users to extract, create, update and configure IRN data.  # noqa: E501

    The version of the OpenAPI document: 1
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.IRNMeetings.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.IRNMeetings.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.IRNMeetings.model.attachment_summary_dto import AttachmentSummaryDto
from fds.sdk.IRNMeetings.model.new_item_dto import NewItemDto
from fds.sdk.IRNMeetings.model.problem_details import ProblemDetails


class AttachmentsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.create_attachment_endpoint = _Endpoint(
            settings={
                'response_type': (NewItemDto,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/meetings/{meetingId}/attachments',
                'operation_id': 'create_attachment',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'meeting_id',
                    'file',
                ],
                'required': [
                    'meeting_id',
                    'file',
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
                    'meeting_id':
                        (str,),
                    'file':
                        (file_type,),
                },
                'attribute_map': {
                    'meeting_id': 'meetingId',
                    'file': 'file',
                },
                'location_map': {
                    'meeting_id': 'path',
                    'file': 'form',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'multipart/form-data'
                ]
            },
            api_client=api_client
        )
        self.download_attachment_endpoint = _Endpoint(
            settings={
                'response_type': None,
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/meetings/{meetingId}/attachments/{attachmentId}/download',
                'operation_id': 'download_attachment',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'meeting_id',
                    'attachment_id',
                ],
                'required': [
                    'meeting_id',
                    'attachment_id',
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
                    'meeting_id':
                        (str,),
                    'attachment_id':
                        (str,),
                },
                'attribute_map': {
                    'meeting_id': 'meetingId',
                    'attachment_id': 'attachmentId',
                },
                'location_map': {
                    'meeting_id': 'path',
                    'attachment_id': 'path',
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
        self.get_attachments_endpoint = _Endpoint(
            settings={
                'response_type': ([AttachmentSummaryDto],),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/meetings/{meetingId}/attachments',
                'operation_id': 'get_attachments',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'meeting_id',
                ],
                'required': [
                    'meeting_id',
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
                    'meeting_id':
                        (str,),
                },
                'attribute_map': {
                    'meeting_id': 'meetingId',
                },
                'location_map': {
                    'meeting_id': 'path',
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
        self.soft_delete_meeting_attachment_endpoint = _Endpoint(
            settings={
                'response_type': None,
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/v1/meetings/{meetingId}/attachments/{attachmentId}',
                'operation_id': 'soft_delete_meeting_attachment',
                'http_method': 'DELETE',
                'servers': None,
            },
            params_map={
                'all': [
                    'meeting_id',
                    'attachment_id',
                ],
                'required': [
                    'meeting_id',
                    'attachment_id',
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
                    'meeting_id':
                        (str,),
                    'attachment_id':
                        (str,),
                },
                'attribute_map': {
                    'meeting_id': 'meetingId',
                    'attachment_id': 'attachmentId',
                },
                'location_map': {
                    'meeting_id': 'path',
                    'attachment_id': 'path',
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

    def create_attachment(
        self,
        meeting_id,
        file,
        **kwargs
    ):
        """Create an attachment for an existing meeting  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.create_attachment(meeting_id, file, async_req=True)
        >>> result = thread.get()

        Args:
            meeting_id (str): Meeting Id
            file (file_type):

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
            NewItemDto
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
        kwargs['meeting_id'] = \
            meeting_id
        kwargs['file'] = \
            file
        return self.create_attachment_endpoint.call_with_http_info(**kwargs)

    def download_attachment(
        self,
        meeting_id,
        attachment_id,
        **kwargs
    ):
        """Download an attachment from a meeting  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.download_attachment(meeting_id, attachment_id, async_req=True)
        >>> result = thread.get()

        Args:
            meeting_id (str):
            attachment_id (str):

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
        kwargs['meeting_id'] = \
            meeting_id
        kwargs['attachment_id'] = \
            attachment_id
        return self.download_attachment_endpoint.call_with_http_info(**kwargs)

    def get_attachments(
        self,
        meeting_id,
        **kwargs
    ):
        """Get all the attachments belonging to a meeting  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_attachments(meeting_id, async_req=True)
        >>> result = thread.get()

        Args:
            meeting_id (str): Meeting Id

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
            [AttachmentSummaryDto]
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
        kwargs['meeting_id'] = \
            meeting_id
        return self.get_attachments_endpoint.call_with_http_info(**kwargs)

    def soft_delete_meeting_attachment(
        self,
        meeting_id,
        attachment_id,
        **kwargs
    ):
        """Delete attachment from meeting  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.soft_delete_meeting_attachment(meeting_id, attachment_id, async_req=True)
        >>> result = thread.get()

        Args:
            meeting_id (str): Meeting Id
            attachment_id (str): Attachment Id

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
        kwargs['meeting_id'] = \
            meeting_id
        kwargs['attachment_id'] = \
            attachment_id
        return self.soft_delete_meeting_attachment_endpoint.call_with_http_info(**kwargs)
