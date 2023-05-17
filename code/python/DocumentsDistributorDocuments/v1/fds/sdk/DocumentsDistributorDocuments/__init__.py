# flake8: noqa

"""
    Documents Distributor - Documents API

    Documents APIs that provide filings such as Global Filings and XML files such as StreetAccount    Global Filings API provides the capability to search and download filings documents from various exchanges around the world. This API will provide access to the full history and the ability to search by date and dataset(source). It does not provide real-time updates to the filings documents. Filings providers currently include EDGAR       Note: The real-time updates to the filing documents will be available within week to ten days and per request able to query up to 8 days of data               StreetAccount XML API provides access to historical StreetAccount (SA) news. SA provides a summary for various corporate and market news written by journalist with background in financial markets.    The API delivers SA stories in XML format based on user-specified date input parameters. When the API request is completed, output files will be made available back to the users through a secure URL. This API has three endpoints (1) Request Files (2) Check Status (3) Get Files.      This API only supports adhoc requests to retrieve historical files and does not support real-time files and if require real-time push should consider the other three methods (pushed via SFTP, to QNT account, or users Azure Storage)   Both historical and real-time Street Account news is also delivered via SFTP, to users QNT account, or users Azure Storage.  Files delivered contain both metadata and content body in each file. This eliminates the need to make multiple requests through multiple services to get all the information.  News API provides access to historical news. This provides a summary for various corporate and market news written by journalist with background in financial markets.  The API delivers  stories in different format based on user-specified date input parameters. When the API request is completed, output files will be made available back to the users through a secure URL. This API has three endpoints (1) Request Files (2) Check Status (3) Get Files      # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


__version__ = "0.21.6"

# import ApiClient
from fds.sdk.DocumentsDistributorDocuments.api_client import ApiClient

# import Configuration
from fds.sdk.DocumentsDistributorDocuments.configuration import Configuration

# import exceptions
from fds.sdk.DocumentsDistributorDocuments.exceptions import OpenApiException
from fds.sdk.DocumentsDistributorDocuments.exceptions import ApiAttributeError
from fds.sdk.DocumentsDistributorDocuments.exceptions import ApiTypeError
from fds.sdk.DocumentsDistributorDocuments.exceptions import ApiValueError
from fds.sdk.DocumentsDistributorDocuments.exceptions import ApiKeyError
from fds.sdk.DocumentsDistributorDocuments.exceptions import ApiException
