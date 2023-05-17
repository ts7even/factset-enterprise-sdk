# flake8: noqa

"""
    FactSet Symbology API

    The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types. various market symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN,  SEDOL, Tickers, and Bloomberg FIGIs.   Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly  harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time. Additionally, the Symbology API provides  translation of market ids into Bloomberg FIGI.   # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


__version__ = "0.8.8"

# import ApiClient
from fds.sdk.Symbology.api_client import ApiClient

# import Configuration
from fds.sdk.Symbology.configuration import Configuration

# import exceptions
from fds.sdk.Symbology.exceptions import OpenApiException
from fds.sdk.Symbology.exceptions import ApiAttributeError
from fds.sdk.Symbology.exceptions import ApiTypeError
from fds.sdk.Symbology.exceptions import ApiValueError
from fds.sdk.Symbology.exceptions import ApiKeyError
from fds.sdk.Symbology.exceptions import ApiException
