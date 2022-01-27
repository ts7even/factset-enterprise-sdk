"""
    FactSet Estimates

    Gain access to 20+ years of comprehensive estimates and statistics of over 250+ estimated metrics, including financial statement items, product segments, geosegments, and industry metrics. FactSet's consensus estimates are aggregated from a wide base of over 800+ contributors and cover over 19,000 active companies across 90+ countries. Data returned can be accessed on the data frequencies based on quarterly, fiscal years, and calendar years. FactSet Estimates updates on a real time basis intraday (every 5 minutes). Updating times vary based on earning season vs. non-earning season but the goal is to have the data available to the client within a few hours that FactSet receives updated information. Often times updates times can be much faster as FactSet has always been known as one of the fastest estimate providers in the market.   # noqa: E501

    The version of the OpenAPI document: 2.3.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetEstimates.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetEstimates.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetEstimates.model.error_response import ErrorResponse
from fds.sdk.FactSetEstimates.model.metrics_request import MetricsRequest
from fds.sdk.FactSetEstimates.model.metrics_response import MetricsResponse


class DataItemsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_estimate_metrics_endpoint = _Endpoint(
            settings={
                'response_type': (MetricsResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-estimates/v2/metrics',
                'operation_id': 'get_estimate_metrics',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'category',
                    'subcategory',
                ],
                'required': [],
                'nullable': [
                ],
                'enum': [
                    'category',
                    'subcategory',
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                    ('category',): {

                        "FINANCIAL_STATEMENT": "FINANCIAL_STATEMENT",
                        "INDUSTRY_METRIC": "INDUSTRY_METRIC",
                        "OTHER": "OTHER"
                    },
                    ('subcategory',): {

                        "AIRLINES": "AIRLINES",
                        "BALANCE_SHEET": "BALANCE_SHEET",
                        "BANKS": "BANKS",
                        "CASH_FLOW": "CASH_FLOW",
                        "COMMODITIES": "COMMODITIES",
                        "COMPUTER_HARDWARE": "COMPUTER_HARDWARE",
                        "CONSUMER_SERVICES": "CONSUMER_SERVICES",
                        "EDUCATION": "EDUCATION",
                        "FINANCIAL_SERVICE_PROVIDER": "FINANCIAL_SERVICE_PROVIDER",
                        "HOME_BUILDERS": "HOME_BUILDERS",
                        "HOSPITALS": "HOSPITALS",
                        "HOTELS": "HOTELS",
                        "INCOME_STATEMENT": "INCOME_STATEMENT",
                        "INSURANCE": "INSURANCE",
                        "MARIJUANA": "MARIJUANA",
                        "MINING": "MINING",
                        "MULTIFINANCIAL": "MULTIFINANCIAL",
                        "OIL_AND_GAS": "OIL_AND_GAS",
                        "OTHER": "OTHER",
                        "REITS": "REITS",
                        "RESTAURANTS": "RESTAURANTS",
                        "RETAILERS": "RETAILERS",
                        "TELECOMMUNICATIONS": "TELECOMMUNICATIONS",
                        "TRANSPORTATION": "TRANSPORTATION"
                    },
                },
                'openapi_types': {
                    'category':
                        (str,),
                    'subcategory':
                        (str,),
                },
                'attribute_map': {
                    'category': 'category',
                    'subcategory': 'subcategory',
                },
                'location_map': {
                    'category': 'query',
                    'subcategory': 'query',
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
        self.get_estimate_metrics_for_list_endpoint = _Endpoint(
            settings={
                'response_type': (MetricsResponse,),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-estimates/v2/metrics',
                'operation_id': 'get_estimate_metrics_for_list',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'metrics_request',
                ],
                'required': [
                    'metrics_request',
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
                    'metrics_request':
                        (MetricsRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'metrics_request': 'body',
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

    def get_estimate_metrics(
        self,
        **kwargs
    ):
        """Available Estimate metrics  # noqa: E501

        Returns list of available Estimate metrics that can be used in the `metrics` parameter of related endpoints. **By default, Factset provides Estimated items in millions. For specific metric methodology definitions, reference the `OAurl` response items to launch the available methodology page.**    # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_estimate_metrics(async_req=True)
        >>> result = thread.get()


        Keyword Args:
            category (str): Filters the list of Estimate metrics by major category -   * **FINANCIAL_STATEMENT** = Includes Balance Sheet, Cash Flow, and Income Statement.   * **INDUSTRY_METRICS** = Industry specific metrics.   * **OTHER** = Target Price . [optional]
            subcategory (str): Sub-Category Filter for the Primary Category Requested. Choose a related sub-category for the Category requested. For methodology, visit [OA 16038](https://my.apps.factset.com/oa/pages/16038) <p>Financial Statement -    * **BALANCE_SHEET** - Balance Sheet line items, such as Assets, Long-term Debt, and more.   * **CASH_FLOW** - Cash Flow Statement line items, such as Free Cash Flow and Share Repurchases   * **INCOME_STATEMENT** - Income Statement line items, such as EPS, Sales, DPS, and more. </p> <p> Industry Metrics -     * **AIRLINES** - Including items such as Revenue Passenger, Total Revenue per ASK, Available Seats, and more.   * **BANKS** - Including items such as Net Interest Income, Trading Income, Net Loans, and more. SUPPLEMENTAL   * **COMMODITIES** - Including items such as Average Target Price.   * **COMPUTER_HARDWARE** - Including items such as Total Addressable Market.   * **CONSUMER_SERVICES** - Including items such as Gross Merchandise Volume   * **EDUCATION** - Including Items such as Total Student Enrollment   * **FINANCIAL_SERVICE_PROVIDER** - Including items such as Annual Subscription Value   * **HOME_BUILDERS** - Including items such as Home Sales, Land Sales, Cancellation Rates, and more.   * **HOSPITALS** - Including items such as Bad Debt Provisions, Medical Cost Ratio, SS Admissions and more.   * **HOTELS** - Including items such as Average Daily Rate, Occupancy %, RevPAR, and more.   * **INSURANCE** - Including items such as Gross Premiums Written, Underwriting Income, and Claims.   * **HOSPITALS** - Including items such as Bad Debt Provisions, Medical Cost Ratio, SS Admissions and more.   * **HOTELS** - Including items such as Average Daily Rate, Occupancy %, RevPAR, and more.   * **INSURANCE** - Including items such as Gross Premiums Written, Underwriting Income, and Claims.   * **MARIJUANA** - Including items such as Cost per Gram and Kg of Cannabis Sold.   * **MINING** - Including items such as Realized Price and Total Production   * **MULTIFINANCIAL** - Including items such as AUM, Net Flows, and Fee Related Earnings.   * **OIL_AND_GAS** - Including items such as Downstream Income, Production per Day, and Exploration Expense.   * **OTHER** - Target Price   * **REITS** - Including items such as Funds from Operations, Implied Cap Rate, and LTV.   * **RESTAURANTS** - Including items such as Restaurant Margin.   * **RETAILERS** - Including items such as Stores Information, Selling Space and Net sales per square foot.   * **TELECOMMUNICATIONS** - Including items such as Gross Adds, Monthly Revenue Per User, Churn, and more.   * **TRANSPORTATION** - Including items such as Revenue Per Unit, Volume Growth, and Operating Ratio.</p>    . [optional]
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
            MetricsResponse
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
        return self.get_estimate_metrics_endpoint.call_with_http_info(**kwargs)

    def get_estimate_metrics_for_list(
        self,
        metrics_request,
        **kwargs
    ):
        """Available Estimate metrics or ratios.  # noqa: E501

        Returns list of available Estimate metrics that can be used in the `metrics` parameter of related endpoints. **By default, Factset provides Estimated items in millions. For specific metric methodology definitions, reference the `OAurl` response items to launch the available methodology page.**    # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_estimate_metrics_for_list(metrics_request, async_req=True)
        >>> result = thread.get()

        Args:
            metrics_request (MetricsRequest): Request object for requesting estimates data

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
            MetricsResponse
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
        kwargs['metrics_request'] = \
            metrics_request
        return self.get_estimate_metrics_for_list_endpoint.call_with_http_info(**kwargs)
