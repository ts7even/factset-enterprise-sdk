# flake8: noqa

"""
    FactSet Search Answers API

    The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: FactSearch.Team@factset.com
    Generated by: https://openapi-generator.tech
"""


__version__ = "1.0.4"

# import ApiClient
from fds.sdk.FactSetSearchAnswers.api_client import ApiClient

# import Configuration
from fds.sdk.FactSetSearchAnswers.configuration import Configuration

# import exceptions
from fds.sdk.FactSetSearchAnswers.exceptions import OpenApiException
from fds.sdk.FactSetSearchAnswers.exceptions import ApiAttributeError
from fds.sdk.FactSetSearchAnswers.exceptions import ApiTypeError
from fds.sdk.FactSetSearchAnswers.exceptions import ApiValueError
from fds.sdk.FactSetSearchAnswers.exceptions import ApiKeyError
from fds.sdk.FactSetSearchAnswers.exceptions import ApiException
