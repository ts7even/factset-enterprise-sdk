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
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_bonus_level import InlineResponse2005DataBonusLevel
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_cap import InlineResponse2005DataCap
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_capital_guarantee import InlineResponse2005DataCapitalGuarantee
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_capital_protection import InlineResponse2005DataCapitalProtection
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_categorization import InlineResponse2005DataCategorization
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_collateralized import InlineResponse2005DataCollateralized
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_constant_leverage import InlineResponse2005DataConstantLeverage
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_coupon_trigger_level import InlineResponse2005DataCouponTriggerLevel
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_current_interest_rate import InlineResponse2005DataCurrentInterestRate
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_exercise import InlineResponse2005DataExercise
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_issuer import InlineResponse2005DataIssuer
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_key_figures import InlineResponse2005DataKeyFigures
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_knock_in import InlineResponse2005DataKnockIn
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_knock_out import InlineResponse2005DataKnockOut
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_life_cycle import InlineResponse2005DataLifeCycle
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_life_cycle_maturity_perpetual import InlineResponse2005DataLifeCycleMaturityPerpetual
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_lock_in import InlineResponse2005DataLockIn
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_lock_out import InlineResponse2005DataLockOut
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_market import InlineResponse2005DataMarket
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_nominal_currency import InlineResponse2005DataNominalCurrency
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_participation import InlineResponse2005DataParticipation
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_performance import InlineResponse2005DataPerformance
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_range_knock_out import InlineResponse2005DataRangeKnockOut
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_settlement import InlineResponse2005DataSettlement
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_strike import InlineResponse2005DataStrike
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_underlying import InlineResponse2005DataUnderlying
    from fds.sdk.SecuritizedDerivativesAPIforDigitalPortals.model.inline_response2005_data_volatility import InlineResponse2005DataVolatility
    globals()['InlineResponse2005DataBonusLevel'] = InlineResponse2005DataBonusLevel
    globals()['InlineResponse2005DataCap'] = InlineResponse2005DataCap
    globals()['InlineResponse2005DataCapitalGuarantee'] = InlineResponse2005DataCapitalGuarantee
    globals()['InlineResponse2005DataCapitalProtection'] = InlineResponse2005DataCapitalProtection
    globals()['InlineResponse2005DataCategorization'] = InlineResponse2005DataCategorization
    globals()['InlineResponse2005DataCollateralized'] = InlineResponse2005DataCollateralized
    globals()['InlineResponse2005DataConstantLeverage'] = InlineResponse2005DataConstantLeverage
    globals()['InlineResponse2005DataCouponTriggerLevel'] = InlineResponse2005DataCouponTriggerLevel
    globals()['InlineResponse2005DataCurrentInterestRate'] = InlineResponse2005DataCurrentInterestRate
    globals()['InlineResponse2005DataExercise'] = InlineResponse2005DataExercise
    globals()['InlineResponse2005DataIssuer'] = InlineResponse2005DataIssuer
    globals()['InlineResponse2005DataKeyFigures'] = InlineResponse2005DataKeyFigures
    globals()['InlineResponse2005DataKnockIn'] = InlineResponse2005DataKnockIn
    globals()['InlineResponse2005DataKnockOut'] = InlineResponse2005DataKnockOut
    globals()['InlineResponse2005DataLifeCycle'] = InlineResponse2005DataLifeCycle
    globals()['InlineResponse2005DataLifeCycleMaturityPerpetual'] = InlineResponse2005DataLifeCycleMaturityPerpetual
    globals()['InlineResponse2005DataLockIn'] = InlineResponse2005DataLockIn
    globals()['InlineResponse2005DataLockOut'] = InlineResponse2005DataLockOut
    globals()['InlineResponse2005DataMarket'] = InlineResponse2005DataMarket
    globals()['InlineResponse2005DataNominalCurrency'] = InlineResponse2005DataNominalCurrency
    globals()['InlineResponse2005DataParticipation'] = InlineResponse2005DataParticipation
    globals()['InlineResponse2005DataPerformance'] = InlineResponse2005DataPerformance
    globals()['InlineResponse2005DataRangeKnockOut'] = InlineResponse2005DataRangeKnockOut
    globals()['InlineResponse2005DataSettlement'] = InlineResponse2005DataSettlement
    globals()['InlineResponse2005DataStrike'] = InlineResponse2005DataStrike
    globals()['InlineResponse2005DataUnderlying'] = InlineResponse2005DataUnderlying
    globals()['InlineResponse2005DataVolatility'] = InlineResponse2005DataVolatility


class InlineResponse2005Data(ModelNormal):
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
            'total_count': (float,),  # noqa: E501
            'categorization': (InlineResponse2005DataCategorization,),  # noqa: E501
            'market': ([InlineResponse2005DataMarket],),  # noqa: E501
            'life_cycle': (InlineResponse2005DataLifeCycle,),  # noqa: E501
            'issuer': (InlineResponse2005DataIssuer,),  # noqa: E501
            'exercise': (InlineResponse2005DataExercise,),  # noqa: E501
            'settlement': ([InlineResponse2005DataSettlement],),  # noqa: E501
            'collateralized': ([InlineResponse2005DataCollateralized],),  # noqa: E501
            'quanto': ([InlineResponse2005DataLifeCycleMaturityPerpetual],),  # noqa: E501
            'capital_protection': (InlineResponse2005DataCapitalProtection,),  # noqa: E501
            'underlying': (InlineResponse2005DataUnderlying,),  # noqa: E501
            'strike': (InlineResponse2005DataStrike,),  # noqa: E501
            'bonus_level': (InlineResponse2005DataBonusLevel,),  # noqa: E501
            'cap': (InlineResponse2005DataCap,),  # noqa: E501
            'knock_out': (InlineResponse2005DataKnockOut,),  # noqa: E501
            'knock_in': (InlineResponse2005DataKnockIn,),  # noqa: E501
            'lock_out': (InlineResponse2005DataLockOut,),  # noqa: E501
            'lock_in': (InlineResponse2005DataLockIn,),  # noqa: E501
            'capital_guarantee': (InlineResponse2005DataCapitalGuarantee,),  # noqa: E501
            'coupon_trigger_level': (InlineResponse2005DataCouponTriggerLevel,),  # noqa: E501
            'range_knock_out': (InlineResponse2005DataRangeKnockOut,),  # noqa: E501
            'participation': ([InlineResponse2005DataParticipation],),  # noqa: E501
            'constant_leverage': ([InlineResponse2005DataConstantLeverage],),  # noqa: E501
            'nominal_currency': ([InlineResponse2005DataNominalCurrency],),  # noqa: E501
            'current_interest_rate': (InlineResponse2005DataCurrentInterestRate,),  # noqa: E501
            'key_figures': (InlineResponse2005DataKeyFigures,),  # noqa: E501
            'performance': (InlineResponse2005DataPerformance,),  # noqa: E501
            'volatility': (InlineResponse2005DataVolatility,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'total_count': 'totalCount',  # noqa: E501
        'categorization': 'categorization',  # noqa: E501
        'market': 'market',  # noqa: E501
        'life_cycle': 'lifeCycle',  # noqa: E501
        'issuer': 'issuer',  # noqa: E501
        'exercise': 'exercise',  # noqa: E501
        'settlement': 'settlement',  # noqa: E501
        'collateralized': 'collateralized',  # noqa: E501
        'quanto': 'quanto',  # noqa: E501
        'capital_protection': 'capitalProtection',  # noqa: E501
        'underlying': 'underlying',  # noqa: E501
        'strike': 'strike',  # noqa: E501
        'bonus_level': 'bonusLevel',  # noqa: E501
        'cap': 'cap',  # noqa: E501
        'knock_out': 'knockOut',  # noqa: E501
        'knock_in': 'knockIn',  # noqa: E501
        'lock_out': 'lockOut',  # noqa: E501
        'lock_in': 'lockIn',  # noqa: E501
        'capital_guarantee': 'capitalGuarantee',  # noqa: E501
        'coupon_trigger_level': 'couponTriggerLevel',  # noqa: E501
        'range_knock_out': 'rangeKnockOut',  # noqa: E501
        'participation': 'participation',  # noqa: E501
        'constant_leverage': 'constantLeverage',  # noqa: E501
        'nominal_currency': 'nominalCurrency',  # noqa: E501
        'current_interest_rate': 'currentInterestRate',  # noqa: E501
        'key_figures': 'keyFigures',  # noqa: E501
        'performance': 'performance',  # noqa: E501
        'volatility': 'volatility',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, *args, **kwargs):  # noqa: E501
        """InlineResponse2005Data - a model defined in OpenAPI

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
            total_count (float): Number of notations that satisfy the request parameters, hence have been used to retrieve the possible values and value ranges.. [optional]  # noqa: E501
            categorization (InlineResponse2005DataCategorization): [optional]  # noqa: E501
            market ([InlineResponse2005DataMarket]): List of market identifiers.. [optional]  # noqa: E501
            life_cycle (InlineResponse2005DataLifeCycle): [optional]  # noqa: E501
            issuer (InlineResponse2005DataIssuer): [optional]  # noqa: E501
            exercise (InlineResponse2005DataExercise): [optional]  # noqa: E501
            settlement ([InlineResponse2005DataSettlement]): Values related to the settlement. It concerns the fulfillment of the issuer's contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.. [optional]  # noqa: E501
            collateralized ([InlineResponse2005DataCollateralized]): Indicates whether securitized derivatives with and without protection against an issuer default are among the results. An example for such a collateralization is the COSI flag provided by SIX Swiss Exchange.. [optional]  # noqa: E501
            quanto ([InlineResponse2005DataLifeCycleMaturityPerpetual]): Indicates whether quanto and non-quanto securitized derivatives are among the results. Quanto means that the risk of exchange rate fluctuations between the value unit of the underlying and the value unit of the cash flows is hedged.. [optional]  # noqa: E501
            capital_protection (InlineResponse2005DataCapitalProtection): [optional]  # noqa: E501
            underlying (InlineResponse2005DataUnderlying): [optional]  # noqa: E501
            strike (InlineResponse2005DataStrike): [optional]  # noqa: E501
            bonus_level (InlineResponse2005DataBonusLevel): [optional]  # noqa: E501
            cap (InlineResponse2005DataCap): [optional]  # noqa: E501
            knock_out (InlineResponse2005DataKnockOut): [optional]  # noqa: E501
            knock_in (InlineResponse2005DataKnockIn): [optional]  # noqa: E501
            lock_out (InlineResponse2005DataLockOut): [optional]  # noqa: E501
            lock_in (InlineResponse2005DataLockIn): [optional]  # noqa: E501
            capital_guarantee (InlineResponse2005DataCapitalGuarantee): [optional]  # noqa: E501
            coupon_trigger_level (InlineResponse2005DataCouponTriggerLevel): [optional]  # noqa: E501
            range_knock_out (InlineResponse2005DataRangeKnockOut): [optional]  # noqa: E501
            participation ([InlineResponse2005DataParticipation]): Values of the participation direction of factor certificates at the level movement of its effective underlying.. [optional]  # noqa: E501
            constant_leverage ([InlineResponse2005DataConstantLeverage]): Values of the constant leverage of factor certificates.. [optional]  # noqa: E501
            nominal_currency ([InlineResponse2005DataNominalCurrency]): Values of the main currency of the nominal and of the coupon payments. See endpoint `/basic/valueUnit/currency/main/list` for possible values.. [optional]  # noqa: E501
            current_interest_rate (InlineResponse2005DataCurrentInterestRate): [optional]  # noqa: E501
            key_figures (InlineResponse2005DataKeyFigures): [optional]  # noqa: E501
            performance (InlineResponse2005DataPerformance): [optional]  # noqa: E501
            volatility (InlineResponse2005DataVolatility): [optional]  # noqa: E501
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
        """InlineResponse2005Data - a model defined in OpenAPI

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
            total_count (float): Number of notations that satisfy the request parameters, hence have been used to retrieve the possible values and value ranges.. [optional]  # noqa: E501
            categorization (InlineResponse2005DataCategorization): [optional]  # noqa: E501
            market ([InlineResponse2005DataMarket]): List of market identifiers.. [optional]  # noqa: E501
            life_cycle (InlineResponse2005DataLifeCycle): [optional]  # noqa: E501
            issuer (InlineResponse2005DataIssuer): [optional]  # noqa: E501
            exercise (InlineResponse2005DataExercise): [optional]  # noqa: E501
            settlement ([InlineResponse2005DataSettlement]): Values related to the settlement. It concerns the fulfillment of the issuer's contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.. [optional]  # noqa: E501
            collateralized ([InlineResponse2005DataCollateralized]): Indicates whether securitized derivatives with and without protection against an issuer default are among the results. An example for such a collateralization is the COSI flag provided by SIX Swiss Exchange.. [optional]  # noqa: E501
            quanto ([InlineResponse2005DataLifeCycleMaturityPerpetual]): Indicates whether quanto and non-quanto securitized derivatives are among the results. Quanto means that the risk of exchange rate fluctuations between the value unit of the underlying and the value unit of the cash flows is hedged.. [optional]  # noqa: E501
            capital_protection (InlineResponse2005DataCapitalProtection): [optional]  # noqa: E501
            underlying (InlineResponse2005DataUnderlying): [optional]  # noqa: E501
            strike (InlineResponse2005DataStrike): [optional]  # noqa: E501
            bonus_level (InlineResponse2005DataBonusLevel): [optional]  # noqa: E501
            cap (InlineResponse2005DataCap): [optional]  # noqa: E501
            knock_out (InlineResponse2005DataKnockOut): [optional]  # noqa: E501
            knock_in (InlineResponse2005DataKnockIn): [optional]  # noqa: E501
            lock_out (InlineResponse2005DataLockOut): [optional]  # noqa: E501
            lock_in (InlineResponse2005DataLockIn): [optional]  # noqa: E501
            capital_guarantee (InlineResponse2005DataCapitalGuarantee): [optional]  # noqa: E501
            coupon_trigger_level (InlineResponse2005DataCouponTriggerLevel): [optional]  # noqa: E501
            range_knock_out (InlineResponse2005DataRangeKnockOut): [optional]  # noqa: E501
            participation ([InlineResponse2005DataParticipation]): Values of the participation direction of factor certificates at the level movement of its effective underlying.. [optional]  # noqa: E501
            constant_leverage ([InlineResponse2005DataConstantLeverage]): Values of the constant leverage of factor certificates.. [optional]  # noqa: E501
            nominal_currency ([InlineResponse2005DataNominalCurrency]): Values of the main currency of the nominal and of the coupon payments. See endpoint `/basic/valueUnit/currency/main/list` for possible values.. [optional]  # noqa: E501
            current_interest_rate (InlineResponse2005DataCurrentInterestRate): [optional]  # noqa: E501
            key_figures (InlineResponse2005DataKeyFigures): [optional]  # noqa: E501
            performance (InlineResponse2005DataPerformance): [optional]  # noqa: E501
            volatility (InlineResponse2005DataVolatility): [optional]  # noqa: E501
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