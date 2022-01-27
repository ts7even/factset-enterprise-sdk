# flake8: noqa

"""
    SPAR Engine API

    Allow clients to fetch Analytics through APIs.  # noqa: E501

    The version of the OpenAPI document: 3
    Contact: analytics.api.support@factset.com
    Generated by: https://openapi-generator.tech
"""


__version__ = "0.9.0"

# import ApiClient
from fds.sdk.SPAREngine.api_client import ApiClient

# import Configuration
from fds.sdk.SPAREngine.configuration import Configuration

# import exceptions
from fds.sdk.SPAREngine.exceptions import OpenApiException
from fds.sdk.SPAREngine.exceptions import ApiAttributeError
from fds.sdk.SPAREngine.exceptions import ApiTypeError
from fds.sdk.SPAREngine.exceptions import ApiValueError
from fds.sdk.SPAREngine.exceptions import ApiKeyError
from fds.sdk.SPAREngine.exceptions import ApiException