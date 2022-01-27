# flake8: noqa

"""
    FactSet People API

    The FactSet People API exposes FactSet data for individuals and their jobs.   # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


__version__ = "0.9.0"

# import ApiClient
from fds.sdk.FactSetPeople.api_client import ApiClient

# import Configuration
from fds.sdk.FactSetPeople.configuration import Configuration

# import exceptions
from fds.sdk.FactSetPeople.exceptions import OpenApiException
from fds.sdk.FactSetPeople.exceptions import ApiAttributeError
from fds.sdk.FactSetPeople.exceptions import ApiTypeError
from fds.sdk.FactSetPeople.exceptions import ApiValueError
from fds.sdk.FactSetPeople.exceptions import ApiKeyError
from fds.sdk.FactSetPeople.exceptions import ApiException