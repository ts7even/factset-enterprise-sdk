"""
    S&P Global Fixed Income Evaluated Prices & Analytics API

    Gain access to evaluated pricing and analytics data for Corporate Bonds, Municipal Bonds and Asset Backed Securities provided by S&P Global (formerly IHS Markit) .  Data returned through multiple endpoints like prices, spread, yield, yield curve, sensitivity, coupon information, securities metadata and details specific to the Asset Backed Securities.   # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.model_utils import (  # noqa: F401
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
from fds.sdk.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.exceptions import ApiAttributeError



class BondIssuerYieldCurve(ModelNormal):
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
        return {
            'request_id': (str,),  # noqa: E501
            'fsym_id': (str, none_type,),  # noqa: E501
            'date': (date, none_type,),  # noqa: E501
            'yield_curve_date3_m': (date, none_type,),  # noqa: E501
            'yield_curve_date6_m': (date, none_type,),  # noqa: E501
            'yield_curve_date1_y': (date, none_type,),  # noqa: E501
            'yield_curve_date2_y': (date, none_type,),  # noqa: E501
            'yield_curve_date3_y': (date, none_type,),  # noqa: E501
            'yield_curve_date4_y': (date, none_type,),  # noqa: E501
            'yield_curve_date5_y': (date, none_type,),  # noqa: E501
            'yield_curve_date6_y': (date, none_type,),  # noqa: E501
            'yield_curve_date7_y': (date, none_type,),  # noqa: E501
            'yield_curve_date8_y': (date, none_type,),  # noqa: E501
            'yield_curve_date9_y': (date, none_type,),  # noqa: E501
            'yield_curve_date10_y': (date, none_type,),  # noqa: E501
            'yield_curve_date15_y': (date, none_type,),  # noqa: E501
            'yield_curve_date20_y': (date, none_type,),  # noqa: E501
            'yield_curve_date25_y': (date, none_type,),  # noqa: E501
            'yield_curve_date30_y': (date, none_type,),  # noqa: E501
            'yield_curve_date40_y': (date, none_type,),  # noqa: E501
            'ytm_curve3_m': (float, none_type,),  # noqa: E501
            'ytm_curve6_m': (float, none_type,),  # noqa: E501
            'ytm_curve1_y': (float, none_type,),  # noqa: E501
            'ytm_curve2_y': (float, none_type,),  # noqa: E501
            'ytm_curve3_y': (float, none_type,),  # noqa: E501
            'ytm_curve4_y': (float, none_type,),  # noqa: E501
            'ytm_curve5_y': (float, none_type,),  # noqa: E501
            'ytm_curve6_y': (float, none_type,),  # noqa: E501
            'ytm_curve7_y': (float, none_type,),  # noqa: E501
            'ytm_curve8_y': (float, none_type,),  # noqa: E501
            'ytm_curve9_y': (float, none_type,),  # noqa: E501
            'ytm_curve10_y': (float, none_type,),  # noqa: E501
            'ytm_curve15_y': (float, none_type,),  # noqa: E501
            'ytm_curve20_y': (float, none_type,),  # noqa: E501
            'ytm_curve25_y': (float, none_type,),  # noqa: E501
            'ytm_curve30_y': (float, none_type,),  # noqa: E501
            'ytm_curve40_y': (float, none_type,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'request_id': 'requestId',  # noqa: E501
        'fsym_id': 'fsymId',  # noqa: E501
        'date': 'date',  # noqa: E501
        'yield_curve_date3_m': 'yieldCurveDate3M',  # noqa: E501
        'yield_curve_date6_m': 'yieldCurveDate6M',  # noqa: E501
        'yield_curve_date1_y': 'yieldCurveDate1Y',  # noqa: E501
        'yield_curve_date2_y': 'yieldCurveDate2Y',  # noqa: E501
        'yield_curve_date3_y': 'yieldCurveDate3Y',  # noqa: E501
        'yield_curve_date4_y': 'yieldCurveDate4Y',  # noqa: E501
        'yield_curve_date5_y': 'yieldCurveDate5Y',  # noqa: E501
        'yield_curve_date6_y': 'yieldCurveDate6Y',  # noqa: E501
        'yield_curve_date7_y': 'yieldCurveDate7Y',  # noqa: E501
        'yield_curve_date8_y': 'yieldCurveDate8Y',  # noqa: E501
        'yield_curve_date9_y': 'yieldCurveDate9Y',  # noqa: E501
        'yield_curve_date10_y': 'yieldCurveDate10Y',  # noqa: E501
        'yield_curve_date15_y': 'yieldCurveDate15Y',  # noqa: E501
        'yield_curve_date20_y': 'yieldCurveDate20Y',  # noqa: E501
        'yield_curve_date25_y': 'yieldCurveDate25Y',  # noqa: E501
        'yield_curve_date30_y': 'yieldCurveDate30Y',  # noqa: E501
        'yield_curve_date40_y': 'yieldCurveDate40Y',  # noqa: E501
        'ytm_curve3_m': 'ytmCurve3M',  # noqa: E501
        'ytm_curve6_m': 'ytmCurve6M',  # noqa: E501
        'ytm_curve1_y': 'ytmCurve1Y',  # noqa: E501
        'ytm_curve2_y': 'ytmCurve2Y',  # noqa: E501
        'ytm_curve3_y': 'ytmCurve3Y',  # noqa: E501
        'ytm_curve4_y': 'ytmCurve4Y',  # noqa: E501
        'ytm_curve5_y': 'ytmCurve5Y',  # noqa: E501
        'ytm_curve6_y': 'ytmCurve6Y',  # noqa: E501
        'ytm_curve7_y': 'ytmCurve7Y',  # noqa: E501
        'ytm_curve8_y': 'ytmCurve8Y',  # noqa: E501
        'ytm_curve9_y': 'ytmCurve9Y',  # noqa: E501
        'ytm_curve10_y': 'ytmCurve10Y',  # noqa: E501
        'ytm_curve15_y': 'ytmCurve15Y',  # noqa: E501
        'ytm_curve20_y': 'ytmCurve20Y',  # noqa: E501
        'ytm_curve25_y': 'ytmCurve25Y',  # noqa: E501
        'ytm_curve30_y': 'ytmCurve30Y',  # noqa: E501
        'ytm_curve40_y': 'ytmCurve40Y',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, *args, **kwargs):  # noqa: E501
        """BondIssuerYieldCurve - a model defined in OpenAPI

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
            request_id (str): Identifier that was used for the request.. [optional]  # noqa: E501
            fsym_id (str, none_type): FactSet Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.. [optional]  # noqa: E501
            date (date, none_type): The date on which the price is calculated.. [optional]  # noqa: E501
            yield_curve_date3_m (date, none_type): Returns the 3M yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date6_m (date, none_type): Returns the 6M yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date1_y (date, none_type): Returns the 1Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date2_y (date, none_type): Returns the 2Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date3_y (date, none_type): Returns the 3Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date4_y (date, none_type): Returns the 4Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date5_y (date, none_type): Returns the 5Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date6_y (date, none_type): Returns the 6Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date7_y (date, none_type): Returns the 7Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date8_y (date, none_type): Returns the 8Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date9_y (date, none_type): Returns the 9Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date10_y (date, none_type): Returns the 10Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date15_y (date, none_type): Returns the 15Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date20_y (date, none_type): Returns the 20Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date25_y (date, none_type): Returns the 25Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date30_y (date, none_type): Returns the 30Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date40_y (date, none_type): Returns the 40Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            ytm_curve3_m (float, none_type): Returns the 3M yield to maturity.. [optional]  # noqa: E501
            ytm_curve6_m (float, none_type): Returns the 6M yield to maturity.. [optional]  # noqa: E501
            ytm_curve1_y (float, none_type): Returns the 1Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve2_y (float, none_type): Returns the 2Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve3_y (float, none_type): Returns the 3Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve4_y (float, none_type): Returns the 4Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve5_y (float, none_type): Returns the 5Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve6_y (float, none_type): Returns the 6Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve7_y (float, none_type): Returns the 7Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve8_y (float, none_type): Returns the 8Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve9_y (float, none_type): Returns the 9Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve10_y (float, none_type): Returns the 10Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve15_y (float, none_type): Returns the 15Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve20_y (float, none_type): Returns the 20Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve25_y (float, none_type): Returns the 25Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve30_y (float, none_type): Returns the 30Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve40_y (float, none_type): Returns the 40Y yield to maturity.. [optional]  # noqa: E501
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
        """BondIssuerYieldCurve - a model defined in OpenAPI

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
            request_id (str): Identifier that was used for the request.. [optional]  # noqa: E501
            fsym_id (str, none_type): FactSet Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.. [optional]  # noqa: E501
            date (date, none_type): The date on which the price is calculated.. [optional]  # noqa: E501
            yield_curve_date3_m (date, none_type): Returns the 3M yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date6_m (date, none_type): Returns the 6M yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date1_y (date, none_type): Returns the 1Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date2_y (date, none_type): Returns the 2Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date3_y (date, none_type): Returns the 3Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date4_y (date, none_type): Returns the 4Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date5_y (date, none_type): Returns the 5Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date6_y (date, none_type): Returns the 6Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date7_y (date, none_type): Returns the 7Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date8_y (date, none_type): Returns the 8Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date9_y (date, none_type): Returns the 9Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date10_y (date, none_type): Returns the 10Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date15_y (date, none_type): Returns the 15Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date20_y (date, none_type): Returns the 20Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date25_y (date, none_type): Returns the 25Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date30_y (date, none_type): Returns the 30Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            yield_curve_date40_y (date, none_type): Returns the 40Y yield curve date in 'YYYY-MM-DD' format.. [optional]  # noqa: E501
            ytm_curve3_m (float, none_type): Returns the 3M yield to maturity.. [optional]  # noqa: E501
            ytm_curve6_m (float, none_type): Returns the 6M yield to maturity.. [optional]  # noqa: E501
            ytm_curve1_y (float, none_type): Returns the 1Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve2_y (float, none_type): Returns the 2Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve3_y (float, none_type): Returns the 3Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve4_y (float, none_type): Returns the 4Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve5_y (float, none_type): Returns the 5Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve6_y (float, none_type): Returns the 6Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve7_y (float, none_type): Returns the 7Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve8_y (float, none_type): Returns the 8Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve9_y (float, none_type): Returns the 9Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve10_y (float, none_type): Returns the 10Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve15_y (float, none_type): Returns the 15Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve20_y (float, none_type): Returns the 20Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve25_y (float, none_type): Returns the 25Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve30_y (float, none_type): Returns the 30Y yield to maturity.. [optional]  # noqa: E501
            ytm_curve40_y (float, none_type): Returns the 40Y yield to maturity.. [optional]  # noqa: E501
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