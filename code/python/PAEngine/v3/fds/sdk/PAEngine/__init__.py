# flake8: noqa

"""
    PA Engine API

    Allow clients to fetch Analytics through APIs.  # noqa: E501

    The version of the OpenAPI document: 3
    Contact: analytics.api.support@factset.com
    Generated by: https://openapi-generator.tech
"""


__version__ = "0.9.1"

# import ApiClient
from fds.sdk.PAEngine.api_client import ApiClient

# import Configuration
from fds.sdk.PAEngine.configuration import Configuration

# import exceptions
from fds.sdk.PAEngine.exceptions import OpenApiException
from fds.sdk.PAEngine.exceptions import ApiAttributeError
from fds.sdk.PAEngine.exceptions import ApiTypeError
from fds.sdk.PAEngine.exceptions import ApiValueError
from fds.sdk.PAEngine.exceptions import ApiKeyError
from fds.sdk.PAEngine.exceptions import ApiException
