# flake8: noqa

"""
    FactSet Exchange Traded Funds API

    FactSet ETF data feeds provide complete and accurate security, fund and reference data across the universe of exchange-traded products. Data is sourced from ETF providers across the globe and includes more than 100 unique data points, resulting in comprehensive coverage to help you evaluate and construct ETFs, analyze potential trades, and perform fund research.<p> FactSet Reference and Analytics data uses FactSet's FCS, which categorizes exchange-traded products using a rules-based system that is derived from seven core classifications. This system evaluates the asset class, economic development level, and geographical region as described in each fund's prospectus and marketing materials. ETF exposure details are presented on successively granular levels-  category, then focus, and then niche.</p> <p>Moreover, FactSet ETF Reference data captures over 100 unique data points and provides market-specific data if you wish to solely focus on U.S., Canadian, Australian, New Zealand, Singapore, Hong Kong or European exchanges. All data points are grouped in one of two levels, either as a Fund or as a Listing. However, FactSet ETF Analytics data is primarily available for U.S.-domiciled ETFs. A subset of reference data items are provided for European-domiciled funds. For a full breakout of regional availability and history, see Formula Definitions and Calculations.</p>   # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


__version__ = "1.0.4"

# import ApiClient
from fds.sdk.FactSetETF.api_client import ApiClient

# import Configuration
from fds.sdk.FactSetETF.configuration import Configuration

# import exceptions
from fds.sdk.FactSetETF.exceptions import OpenApiException
from fds.sdk.FactSetETF.exceptions import ApiAttributeError
from fds.sdk.FactSetETF.exceptions import ApiTypeError
from fds.sdk.FactSetETF.exceptions import ApiValueError
from fds.sdk.FactSetETF.exceptions import ApiKeyError
from fds.sdk.FactSetETF.exceptions import ApiException
