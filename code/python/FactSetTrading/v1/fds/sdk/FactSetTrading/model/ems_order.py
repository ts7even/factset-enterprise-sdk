"""
    EMS API

    Allow clients to trade orders.  # noqa: E501

    The version of the OpenAPI document: 1
    Contact: analytics.api.support@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetTrading.model_utils import (  # noqa: F401
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
from fds.sdk.FactSetTrading.exceptions import ApiAttributeError


def lazy_import():
    from fds.sdk.FactSetTrading.model.instrument import Instrument
    from fds.sdk.FactSetTrading.model.time_in_force import TimeInForce
    globals()['Instrument'] = Instrument
    globals()['TimeInForce'] = TimeInForce


class EMSOrder(ModelNormal):
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
        ('side',): {
            'BUY': "buy",
            'SELL': "sell",
            'SELL_SHORT': "sell_short",
            'SELL_SHORT_EXEMPT': "sell_short_exempt",
        },
        ('order_type',): {
            'MARKET': "market",
            'LIMIT': "limit",
            'STOP': "stop",
            'STOP_LIMIT': "stop_limit",
            'MARKET_ON_CLOSE': "market_on_close",
            'LIMIT_OR_BETTER': "limit_or_better",
        },
        ('handling_instructions',): {
            'AUTO_ORD_PVT': "auto_ord_pvt",
            'AUTO_ORD_PUB': "auto_ord_pub",
            'BEST_EXECUTION': "best_execution",
        },
        ('execution_instructions',): {
            'NOT_HELD': "not_held",
            'WORK': "work",
            'GO_ALONG': "go_along",
            'OVER_THE_DAY': "over_the_day",
            'HELD': "held",
            'PARTICIPATE_DONT_INITIATE': "participate_dont_initiate",
            'STRICT_SCALE': "strict_scale",
            'TRY_TO_SCALE': "try_to_scale",
            'STAY_ON_BIDSIDE': "stay_on_bidside",
            'STAY_ON_OFFERSIDE': "stay_on_offerside",
            'NO_CROSS': "no_cross",
            'OK_TO_CROSS': "ok_to_cross",
            'CALL_FIRST': "call_first",
            'PERCENT_OF_VOLUME': "percent_of_volume",
            'DO_NOT_INCREASE': "do_not_increase",
            'DO_NOT_REDUCE': "do_not_reduce",
            'ALL_OR_NONE': "all_or_none",
            'REINSTATE_ON_SYSTEM_FAILURE': "reinstate_on_system_failure",
            'INSTITUTIONS_ONLY': "institutions_only",
            'REINSTATE_ON_TRADING_HALT': "reinstate_on_trading_halt",
            'CANCEL_ON_TRADING_HALT': "cancel_on_trading_halt",
            'LAST_PEG': "last_peg",
            'MID_PRICE_PEG': "mid_price_peg",
            'NON_NEGOTIABLE': "non_negotiable",
            'OPENING_PEG': "opening_peg",
            'MARKET_PEG': "market_peg",
            'CANCEL_ON_SYSTEM_FAILURE': "cancel_on_system_failure",
            'PRIMARY_PEG': "primary_peg",
            'SUSPEND': "suspend",
            'FIXED_PEG_TO_LOCAL_BEST_BID': "fixed_peg_to_local_best_bid",
            'CUSTOMER_DISPLAY_INSTRUCTION': "customer_display_instruction",
            'NETTING': "netting",
            'PEG_TO_VWAP': "peg_to_vwap",
            'TRADE_ALONG': "trade_along",
            'TRY_TO_STOP': "try_to_stop",
            'CANCEL_IF_NOT_BEST': "cancel_if_not_best",
            'TRAILING_STOP_PEG': "trailing_stop_peg",
            'STRICT_LIMIT': "strict_limit",
            'IGNORE_PRICE_VALIDITY_CHECKS': "ignore_price_validity_checks",
            'PEG_TO_LIMIT_PRICE': "peg_to_limit_price",
            'WORK_TO_TARGET_STRATEGY': "work_to_target_strategy",
            'INTERMARKET_SWEEP': "intermarket_sweep",
            'EXTERNAL_ROUTING_ALLOWED': "external_routing_allowed",
            'EXTERNAL_ROUTING_NOT_ALLOWED': "external_routing_not_allowed",
            'IMBALANCE_ONLY': "imbalance_only",
            'SINGLE_EXECUTION_REQUESTED_FOR_BLOCK_TRADE': "single_execution_requested_for_block_trade",
            'BEST_EXECUTION': "best_execution",
        },
    }

    validations = {
    }

    additional_properties_type = None

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
            'instrument': (Instrument,),  # noqa: E501
            'side': (str,),  # noqa: E501
            'order_type': (str,),  # noqa: E501
            'order_id': (str,),  # noqa: E501
            'order_quantity': (float,),  # noqa: E501
            'price': (float,),  # noqa: E501
            'stop_price': (float,),  # noqa: E501
            'strike_price': (float,),  # noqa: E501
            'currency': (str,),  # noqa: E501
            'is_covered': (bool,),  # noqa: E501
            'max_show': (float,),  # noqa: E501
            'max_floor': (float,),  # noqa: E501
            'prev_close_price': (float,),  # noqa: E501
            'settlement_type': (str,),  # noqa: E501
            'settlement_date': (str,),  # noqa: E501
            'handling_instructions': (str,),  # noqa: E501
            'execution_instructions': (str,),  # noqa: E501
            'locate_required': (bool,),  # noqa: E501
            'effective_time': (str,),  # noqa: E501
            'account': (str,),  # noqa: E501
            'time_in_force': (TimeInForce,),  # noqa: E501
            'user_defined_fields': ({str: (str,)},),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'instrument': 'instrument',  # noqa: E501
        'side': 'side',  # noqa: E501
        'order_type': 'orderType',  # noqa: E501
        'order_id': 'orderId',  # noqa: E501
        'order_quantity': 'orderQuantity',  # noqa: E501
        'price': 'price',  # noqa: E501
        'stop_price': 'stopPrice',  # noqa: E501
        'strike_price': 'strikePrice',  # noqa: E501
        'currency': 'currency',  # noqa: E501
        'is_covered': 'isCovered',  # noqa: E501
        'max_show': 'maxShow',  # noqa: E501
        'max_floor': 'maxFloor',  # noqa: E501
        'prev_close_price': 'prevClosePrice',  # noqa: E501
        'settlement_type': 'settlementType',  # noqa: E501
        'settlement_date': 'settlementDate',  # noqa: E501
        'handling_instructions': 'handlingInstructions',  # noqa: E501
        'execution_instructions': 'executionInstructions',  # noqa: E501
        'locate_required': 'locateRequired',  # noqa: E501
        'effective_time': 'effectiveTime',  # noqa: E501
        'account': 'account',  # noqa: E501
        'time_in_force': 'timeInForce',  # noqa: E501
        'user_defined_fields': 'userDefinedFields',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, instrument, side, order_type, *args, **kwargs):  # noqa: E501
        """EMSOrder - a model defined in OpenAPI

        Args:
            instrument (Instrument):
            side (str): Side
            order_type (str): Type of the order

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
            order_id (str): Unique id for the order. [optional]  # noqa: E501
            order_quantity (float): Order quantity. [optional]  # noqa: E501
            price (float): Order Price. [optional]  # noqa: E501
            stop_price (float): Stop Price. [optional]  # noqa: E501
            strike_price (float): Strike Price. [optional]  # noqa: E501
            currency (str): Currency. [optional]  # noqa: E501
            is_covered (bool): Currency. [optional]  # noqa: E501
            max_show (float): Max Show. [optional]  # noqa: E501
            max_floor (float): Max Floor. [optional]  # noqa: E501
            prev_close_price (float): Previous close price. [optional]  # noqa: E501
            settlement_type (str): Settlement type. [optional]  # noqa: E501
            settlement_date (str): Settlement date in YYYYMMDD format. [optional]  # noqa: E501
            handling_instructions (str): Handling instructions. [optional]  # noqa: E501
            execution_instructions (str): Execution instructions. [optional]  # noqa: E501
            locate_required (bool): Locate Required. [optional]  # noqa: E501
            effective_time (str): Effective time in YYYYMMDD-HH:MM:SS format expressed in UTC. [optional]  # noqa: E501
            account (str): Account. [optional]  # noqa: E501
            time_in_force (TimeInForce): [optional]  # noqa: E501
            user_defined_fields ({str: (str,)}): User defined fields. [optional]  # noqa: E501
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

        self.instrument = instrument
        self.side = side
        self.order_type = order_type
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
    def __init__(self, instrument, side, order_type, *args, **kwargs):  # noqa: E501
        """EMSOrder - a model defined in OpenAPI

        Args:
            instrument (Instrument):
            side (str): Side
            order_type (str): Type of the order

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
            order_id (str): Unique id for the order. [optional]  # noqa: E501
            order_quantity (float): Order quantity. [optional]  # noqa: E501
            price (float): Order Price. [optional]  # noqa: E501
            stop_price (float): Stop Price. [optional]  # noqa: E501
            strike_price (float): Strike Price. [optional]  # noqa: E501
            currency (str): Currency. [optional]  # noqa: E501
            is_covered (bool): Currency. [optional]  # noqa: E501
            max_show (float): Max Show. [optional]  # noqa: E501
            max_floor (float): Max Floor. [optional]  # noqa: E501
            prev_close_price (float): Previous close price. [optional]  # noqa: E501
            settlement_type (str): Settlement type. [optional]  # noqa: E501
            settlement_date (str): Settlement date in YYYYMMDD format. [optional]  # noqa: E501
            handling_instructions (str): Handling instructions. [optional]  # noqa: E501
            execution_instructions (str): Execution instructions. [optional]  # noqa: E501
            locate_required (bool): Locate Required. [optional]  # noqa: E501
            effective_time (str): Effective time in YYYYMMDD-HH:MM:SS format expressed in UTC. [optional]  # noqa: E501
            account (str): Account. [optional]  # noqa: E501
            time_in_force (TimeInForce): [optional]  # noqa: E501
            user_defined_fields ({str: (str,)}): User defined fields. [optional]  # noqa: E501
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

        self.instrument = instrument
        self.side = side
        self.order_type = order_type
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
