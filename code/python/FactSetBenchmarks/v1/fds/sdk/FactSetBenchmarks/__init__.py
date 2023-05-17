# flake8: noqa

"""
    FactSet Benchmarks API

    FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon.   # noqa: E501

    The version of the OpenAPI document: 1.7.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


__version__ = "1.1.4"

# import ApiClient
from fds.sdk.FactSetBenchmarks.api_client import ApiClient

# import Configuration
from fds.sdk.FactSetBenchmarks.configuration import Configuration

# import exceptions
from fds.sdk.FactSetBenchmarks.exceptions import OpenApiException
from fds.sdk.FactSetBenchmarks.exceptions import ApiAttributeError
from fds.sdk.FactSetBenchmarks.exceptions import ApiTypeError
from fds.sdk.FactSetBenchmarks.exceptions import ApiValueError
from fds.sdk.FactSetBenchmarks.exceptions import ApiKeyError
from fds.sdk.FactSetBenchmarks.exceptions import ApiException
