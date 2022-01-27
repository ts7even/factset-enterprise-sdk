"""
    Prime Developer Trial

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model_utils import (  # noqa: F401
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
)
from ..model_utils import OpenApiModel
from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.exceptions import ApiAttributeError


def lazy_import():
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_accumulated import InlineResponse2004Accumulated
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_categorization import InlineResponse2004Categorization
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_exercise import InlineResponse2004Exercise
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_instrument import InlineResponse2004Instrument
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_issuer import InlineResponse2004Issuer
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_life_cycle import InlineResponse2004LifeCycle
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_market import InlineResponse2004Market
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_trade import InlineResponse2004Trade
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_underlying import InlineResponse2004Underlying
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2004_value_unit import InlineResponse2004ValueUnit
    globals()['InlineResponse2004Accumulated'] = InlineResponse2004Accumulated
    globals()['InlineResponse2004Categorization'] = InlineResponse2004Categorization
    globals()['InlineResponse2004Exercise'] = InlineResponse2004Exercise
    globals()['InlineResponse2004Instrument'] = InlineResponse2004Instrument
    globals()['InlineResponse2004Issuer'] = InlineResponse2004Issuer
    globals()['InlineResponse2004LifeCycle'] = InlineResponse2004LifeCycle
    globals()['InlineResponse2004Market'] = InlineResponse2004Market
    globals()['InlineResponse2004Trade'] = InlineResponse2004Trade
    globals()['InlineResponse2004Underlying'] = InlineResponse2004Underlying
    globals()['InlineResponse2004ValueUnit'] = InlineResponse2004ValueUnit


class InlineResponse2004Data(ModelNormal):
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
        ('quality',): {
            'RLT': "RLT",
            'DLY': "DLY",
        },
        ('participation',): {
            'LONG': "long",
            'SHORT': "short",
        },
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
            'id': (str,),  # noqa: E501
            'symbol': (str,),  # noqa: E501
            'market': (InlineResponse2004Market,),  # noqa: E501
            'value_unit': (InlineResponse2004ValueUnit,),  # noqa: E501
            'trade': (InlineResponse2004Trade,),  # noqa: E501
            'quality': (str,),  # noqa: E501
            'accumulated': (InlineResponse2004Accumulated,),  # noqa: E501
            'instrument': (InlineResponse2004Instrument,),  # noqa: E501
            'categorization': (InlineResponse2004Categorization,),  # noqa: E501
            'life_cycle': (InlineResponse2004LifeCycle,),  # noqa: E501
            'issuer': (InlineResponse2004Issuer,),  # noqa: E501
            'exercise': (InlineResponse2004Exercise,),  # noqa: E501
            'participation': (str,),  # noqa: E501
            'underlying': (InlineResponse2004Underlying,),  # noqa: E501
            'knocked_out': (bool,),  # noqa: E501
            'knocked_in': (bool,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'id': 'id',  # noqa: E501
        'symbol': 'symbol',  # noqa: E501
        'market': 'market',  # noqa: E501
        'value_unit': 'valueUnit',  # noqa: E501
        'trade': 'trade',  # noqa: E501
        'quality': 'quality',  # noqa: E501
        'accumulated': 'accumulated',  # noqa: E501
        'instrument': 'instrument',  # noqa: E501
        'categorization': 'categorization',  # noqa: E501
        'life_cycle': 'lifeCycle',  # noqa: E501
        'issuer': 'issuer',  # noqa: E501
        'exercise': 'exercise',  # noqa: E501
        'participation': 'participation',  # noqa: E501
        'underlying': 'underlying',  # noqa: E501
        'knocked_out': 'knockedOut',  # noqa: E501
        'knocked_in': 'knockedIn',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, *args, **kwargs):  # noqa: E501
        """InlineResponse2004Data - a model defined in OpenAPI

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
            id (str): Identifier of a notation.. [optional]  # noqa: E501
            symbol (str): The symbol of the notation. It is a market-specific code to identify the notation. Which characters can be part of a symbol depends on the market. If a market does not define a proprietary symbol, but uses a different identifier (for example, the ISIN or the WKN) to identify instruments, no symbol will be set for the notations of that market.. [optional]  # noqa: E501
            market (InlineResponse2004Market): [optional]  # noqa: E501
            value_unit (InlineResponse2004ValueUnit): [optional]  # noqa: E501
            trade (InlineResponse2004Trade): [optional]  # noqa: E501
            quality (str): Quality of the trade-related attributes, see attributes `trade` and `accumulated`.. [optional]  # noqa: E501
            accumulated (InlineResponse2004Accumulated): [optional]  # noqa: E501
            instrument (InlineResponse2004Instrument): [optional]  # noqa: E501
            categorization (InlineResponse2004Categorization): [optional]  # noqa: E501
            life_cycle (InlineResponse2004LifeCycle): [optional]  # noqa: E501
            issuer (InlineResponse2004Issuer): [optional]  # noqa: E501
            exercise (InlineResponse2004Exercise): [optional]  # noqa: E501
            participation (str): Participation direction of a factor certificate at the level movement of its effective underlying.. [optional]  # noqa: E501
            underlying (InlineResponse2004Underlying): [optional]  # noqa: E501
            knocked_out (bool): Indicates whether the securitized derivative is knocked-out (`true`) or not (`false`). Particularly relevant for knock-out certificates.. [optional]  # noqa: E501
            knocked_in (bool): Indicates whether the securitized derivative is knocked-in (`true`) or not (`false`). Particularly relevant for bonus certificates but also for securitized derivatives that might have additional protection such as reverse convertible bonds, discount certificates, and capital-protection certificates.. [optional]  # noqa: E501
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
        """InlineResponse2004Data - a model defined in OpenAPI

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
            id (str): Identifier of a notation.. [optional]  # noqa: E501
            symbol (str): The symbol of the notation. It is a market-specific code to identify the notation. Which characters can be part of a symbol depends on the market. If a market does not define a proprietary symbol, but uses a different identifier (for example, the ISIN or the WKN) to identify instruments, no symbol will be set for the notations of that market.. [optional]  # noqa: E501
            market (InlineResponse2004Market): [optional]  # noqa: E501
            value_unit (InlineResponse2004ValueUnit): [optional]  # noqa: E501
            trade (InlineResponse2004Trade): [optional]  # noqa: E501
            quality (str): Quality of the trade-related attributes, see attributes `trade` and `accumulated`.. [optional]  # noqa: E501
            accumulated (InlineResponse2004Accumulated): [optional]  # noqa: E501
            instrument (InlineResponse2004Instrument): [optional]  # noqa: E501
            categorization (InlineResponse2004Categorization): [optional]  # noqa: E501
            life_cycle (InlineResponse2004LifeCycle): [optional]  # noqa: E501
            issuer (InlineResponse2004Issuer): [optional]  # noqa: E501
            exercise (InlineResponse2004Exercise): [optional]  # noqa: E501
            participation (str): Participation direction of a factor certificate at the level movement of its effective underlying.. [optional]  # noqa: E501
            underlying (InlineResponse2004Underlying): [optional]  # noqa: E501
            knocked_out (bool): Indicates whether the securitized derivative is knocked-out (`true`) or not (`false`). Particularly relevant for knock-out certificates.. [optional]  # noqa: E501
            knocked_in (bool): Indicates whether the securitized derivative is knocked-in (`true`) or not (`false`). Particularly relevant for bonus certificates but also for securitized derivatives that might have additional protection such as reverse convertible bonds, discount certificates, and capital-protection certificates.. [optional]  # noqa: E501
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