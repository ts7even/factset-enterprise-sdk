"""
    Stocks API For Digital Portals

    The Stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years. Search criteria also include benchmark-related attributes (beta, correlation, outperformance), and ESG parameters, based on FactSet’s Truvalue ESG scores.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with daily updates).  This API is fully integrated with the corresponding [Quotes API](https://developer.factset.com/api-catalog/quotes-api-digital-portals), allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals).  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the [Bonds API](https://developer.factset.com/api-catalog/bonds-api-digital-portals) and the [Securitized Derivatives API](https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals) for details.  See also the recipe [\"Enrich Your Digital Portal with Flexible Equity Screening\"](https://developer.factset.com/recipe-catalog/enrich-your-digital-portal-flexible-equity-screening).   # noqa: E501

    The version of the OpenAPI document: 2
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.StocksAPIforDigitalPortals.model_utils import (  # noqa: F401
    ApiTypeError,
    ModelComposed,
    ModelNormal,
    ModelSimple,
    cached_property,
    change_keys_js_to_python,
    convert_js_args_to_python_args,
    date,
    datetime,
    file_type,
    none_type,
    validate_get_composed_info,
    OpenApiModel
)
from fds.sdk.StocksAPIforDigitalPortals.exceptions import ApiAttributeError


def lazy_import():
    from fds.sdk.StocksAPIforDigitalPortals.model.inline_response2001_data_balance_sheet import InlineResponse2001DataBalanceSheet
    from fds.sdk.StocksAPIforDigitalPortals.model.inline_response2001_data_cash_flow import InlineResponse2001DataCashFlow
    from fds.sdk.StocksAPIforDigitalPortals.model.inline_response2001_data_currency import InlineResponse2001DataCurrency
    from fds.sdk.StocksAPIforDigitalPortals.model.inline_response2001_data_fiscal_year import InlineResponse2001DataFiscalYear
    from fds.sdk.StocksAPIforDigitalPortals.model.inline_response2001_data_income_statement import InlineResponse2001DataIncomeStatement
    from fds.sdk.StocksAPIforDigitalPortals.model.inline_response2001_data_per_share import InlineResponse2001DataPerShare
    from fds.sdk.StocksAPIforDigitalPortals.model.inline_response2001_data_ratios import InlineResponse2001DataRatios
    from fds.sdk.StocksAPIforDigitalPortals.model.inline_response2001_data_shares_outstanding import InlineResponse2001DataSharesOutstanding
    globals()['InlineResponse2001DataBalanceSheet'] = InlineResponse2001DataBalanceSheet
    globals()['InlineResponse2001DataCashFlow'] = InlineResponse2001DataCashFlow
    globals()['InlineResponse2001DataCurrency'] = InlineResponse2001DataCurrency
    globals()['InlineResponse2001DataFiscalYear'] = InlineResponse2001DataFiscalYear
    globals()['InlineResponse2001DataIncomeStatement'] = InlineResponse2001DataIncomeStatement
    globals()['InlineResponse2001DataPerShare'] = InlineResponse2001DataPerShare
    globals()['InlineResponse2001DataRatios'] = InlineResponse2001DataRatios
    globals()['InlineResponse2001DataSharesOutstanding'] = InlineResponse2001DataSharesOutstanding


class InlineResponse2001DataFiscalYearData(ModelNormal):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
      allowed_values (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          with a capitalized key describing the allowed value and an allowed
          value. These dicts store the allowed enum values.
      attribute_map (dict): The key is attribute name
          and the value is json key in definition.
      discriminator_value_class_map (dict): A dict to go from the discriminator
          variable value to the discriminator class name.
      validations (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          that stores validations for max_length, min_length, max_items,
          min_items, exclusive_maximum, inclusive_maximum, exclusive_minimum,
          inclusive_minimum, and regex.
      additional_properties_type (tuple): A tuple of classes accepted
          as additional properties values.
    """

    allowed_values = {
    }

    validations = {
    }

    @cached_property
    def additional_properties_type():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded
        """
        lazy_import()
        return (bool, date, datetime, dict, float, int, list, str, none_type,)  # noqa: E501

    _nullable = False

    @cached_property
    def openapi_types():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded

        Returns
            openapi_types (dict): The key is attribute name
                and the value is attribute type.
        """
        lazy_import()
        return {
            'fiscal_year': (InlineResponse2001DataFiscalYear,),  # noqa: E501
            'currency': (InlineResponse2001DataCurrency,),  # noqa: E501
            'price': (float, none_type,),  # noqa: E501
            'free_float': (float, none_type,),  # noqa: E501
            'shares_outstanding': (InlineResponse2001DataSharesOutstanding,),  # noqa: E501
            'market_capitalization': (float, none_type,),  # noqa: E501
            'income_statement': (InlineResponse2001DataIncomeStatement,),  # noqa: E501
            'balance_sheet': (InlineResponse2001DataBalanceSheet,),  # noqa: E501
            'cash_flow': (InlineResponse2001DataCashFlow,),  # noqa: E501
            'ratios': (InlineResponse2001DataRatios,),  # noqa: E501
            'per_share': (InlineResponse2001DataPerShare,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'fiscal_year': 'fiscalYear',  # noqa: E501
        'currency': 'currency',  # noqa: E501
        'price': 'price',  # noqa: E501
        'free_float': 'freeFloat',  # noqa: E501
        'shares_outstanding': 'sharesOutstanding',  # noqa: E501
        'market_capitalization': 'marketCapitalization',  # noqa: E501
        'income_statement': 'incomeStatement',  # noqa: E501
        'balance_sheet': 'balanceSheet',  # noqa: E501
        'cash_flow': 'cashFlow',  # noqa: E501
        'ratios': 'ratios',  # noqa: E501
        'per_share': 'perShare',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, *args, **kwargs):  # noqa: E501
        """InlineResponse2001DataFiscalYearData - a model defined in OpenAPI

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            fiscal_year (InlineResponse2001DataFiscalYear): [optional]  # noqa: E501
            currency (InlineResponse2001DataCurrency): [optional]  # noqa: E501
            price (float, none_type): End-of-day price as of the end of the fiscal year. It is used for calculation of all price-related data items corresponding to the end of the fiscal year.. [optional]  # noqa: E501
            free_float (float, none_type): Free float, which is the number of shares outstanding available for trading to the public. Closely-held shares (e.g. held by a majority investor) and temporarily restricted shares (e.g. due to insider lock-up periods) are not part of the free float.. [optional]  # noqa: E501
            shares_outstanding (InlineResponse2001DataSharesOutstanding): [optional]  # noqa: E501
            market_capitalization (float, none_type): Market capitalization, which is the market value of the shares outstanding over all types of shares of the company.. [optional]  # noqa: E501
            income_statement (InlineResponse2001DataIncomeStatement): [optional]  # noqa: E501
            balance_sheet (InlineResponse2001DataBalanceSheet): [optional]  # noqa: E501
            cash_flow (InlineResponse2001DataCashFlow): [optional]  # noqa: E501
            ratios (InlineResponse2001DataRatios): [optional]  # noqa: E501
            per_share (InlineResponse2001DataPerShare): [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        self = super(OpenApiModel, cls).__new__(cls)

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
        return self

    required_properties = set([
        '_data_store',
        '_check_type',
        '_spec_property_naming',
        '_path_to_item',
        '_configuration',
        '_visited_composed_classes',
    ])

    @convert_js_args_to_python_args
    def __init__(self, *args, **kwargs):  # noqa: E501
        """InlineResponse2001DataFiscalYearData - a model defined in OpenAPI

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            fiscal_year (InlineResponse2001DataFiscalYear): [optional]  # noqa: E501
            currency (InlineResponse2001DataCurrency): [optional]  # noqa: E501
            price (float, none_type): End-of-day price as of the end of the fiscal year. It is used for calculation of all price-related data items corresponding to the end of the fiscal year.. [optional]  # noqa: E501
            free_float (float, none_type): Free float, which is the number of shares outstanding available for trading to the public. Closely-held shares (e.g. held by a majority investor) and temporarily restricted shares (e.g. due to insider lock-up periods) are not part of the free float.. [optional]  # noqa: E501
            shares_outstanding (InlineResponse2001DataSharesOutstanding): [optional]  # noqa: E501
            market_capitalization (float, none_type): Market capitalization, which is the market value of the shares outstanding over all types of shares of the company.. [optional]  # noqa: E501
            income_statement (InlineResponse2001DataIncomeStatement): [optional]  # noqa: E501
            balance_sheet (InlineResponse2001DataBalanceSheet): [optional]  # noqa: E501
            cash_flow (InlineResponse2001DataCashFlow): [optional]  # noqa: E501
            ratios (InlineResponse2001DataRatios): [optional]  # noqa: E501
            per_share (InlineResponse2001DataPerShare): [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
            if var_name in self.read_only_vars:
                raise ApiAttributeError(f"`{var_name}` is a read-only attribute. Use `from_openapi_data` to instantiate "
                                     f"class with read only attributes.")