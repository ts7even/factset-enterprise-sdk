"""
    FactSet ESG API

    FactSet ESG (powered by FactSet Truvalue Labs) applies machine learning to uncover risks and opportunities from companies' Environmental, Social and Governance (ESG) behavior, which are aggregated and categorized into continuously updated, material ESG scores. The service focuses on company ESG behavior from external sources and includes both positive and negative events that go beyond traditional sources of ESG risk data.<p> FactSet ESG extracts, analyzes, and generates scores from millions of documents each month collected from more than 100,000 data sources in over 30 languages. Sources include news, trade journals, NGOs, watchdog groups, trade blogs, industry reports and social media. Products deliver investable insights by revealing value and risk factors from unstructured data at the speed of current events.</p>   # noqa: E501

    The version of the OpenAPI document: 1.5.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetESG.model_utils import (  # noqa: F401
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
from fds.sdk.FactSetESG.exceptions import ApiAttributeError



class SasbScoreTypes(ModelSimple):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
      allowed_values (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          with a capitalized key describing the allowed value and an allowed
          value. These dicts store the allowed enum values.
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
        ('value',): {
            'max_items': 8,
            'min_items': 1,
        },
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
        return {
            'value': ([str],),
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {}

    read_only_vars = set()

    _composed_schemas = None

    required_properties = set([
        '_data_store',
        '_check_type',
        '_spec_property_naming',
        '_path_to_item',
        '_configuration',
        '_visited_composed_classes',
    ])

    @convert_js_args_to_python_args
    def __init__(self, *args, **kwargs):
        """SasbScoreTypes - a model defined in OpenAPI

        Note that value can be passed either in args or in kwargs, but not in both.

        Args:
            args[0] ([str]): The FactSet Truvalue Score types being requested. Score Types include the Pulse, Insight, Momentum, Article Volume, Category Volume, Dynamic Materiality Score, Adjusted Insight, and Industry Percentile. When left blank all score types will be returned for the requested Id. To specify select scores returned in the response, provide a comma-separated list of the scores using the description below. <p>These scores use the same underlying data and 100-point scale, except for ranks and percentiles. The cognitive computing system behind FactSet's Truvalue Platform uses natural language processing to interpret semantic content and generate analytics. It does so by applying criteria that are consistent with established sustainability and ESG frameworks, scoring data points on performance using a 0 to 100 scale. A score of 50 represents a neutral impact. Scores above 50 indicate positive performance, and scores below reflect negative performance.</p>  ### ESG Score Types  |**SASB Category Input**|**Description**| |---|---| |**PULSE**|*Pulse Score*, is a measure of near-term performance changes that highlights opportunities and controversies, enabling real-time monitoring of companies. It focuses on events of the day and provides a responsive signal to alert investors to dynamic moves.| |**INSIGHT**|*Insight Score*, a measure of a company's longer-term ESG track record, similar to a ratings system. Scores are less sensitive to daily events and reflect the enduring performance record of a company over time. Scores are derived using an exponentially-weighted moving average of the Pulse, defined below, and the half-life of an event's influence on the overall score is 6 months.| |**MOMENTUM**|*Momentum Score*, measures the trend of a company's Insight score. It is a unique ESG metric in the industry that gives investors a high-precision view of the trajectory of a company's ESG performance, relative to peers. It does so by precisely articulating upward or downward movement, relative to that of all others in the universe, making it a measure that enhances quantitative workflows.| |**ART_VOL_TTM**|*Article Volume Score*, measures the information flow or number of articles about a company over the past 12 months.| |**CAT_VOL_TTM**|*Category Volume Score*, returns the total number of times any of the 26 categories received a score over a trailing twelve-month (TTM) period of time.| |**DYNAMIC_MAT**|*Dynamic Materiality Score*, shows the percentage value of data flow by category compared with the total data flow for the organization **(NOT VALID for `ALLCATEGORIES` and `MATERIALITY` category types).**| |**ADJ_INSIGHT**|*Adjusted Insight*, Measures company ESG performance, generating scores for lower-volume and zero-volume firms by blending company scores with industry medians. **(ONLY Vaild for `ALLCATEGORIES` and `MATERIALITY` categories). <p>**Adjusted Insight Score = (# of articles / 5) x Company Insight Score + ((5 - # of articles) / 5) x Industry (or Sector) Median Insight Score.</p>| |**IND_PCTL**|*Industry Percentile*, offers context on company Adjusted Insight scores relative to peers in the same SICS Industry. This value is used to establish the textual ESG Rank. **(ONLY Vaild for `ALLCATEGORIES` and `MATERIALITY` categories).**|  ### Helper Input **ALL**= *Ability to fetch all of the \"scoreTypes\" listed above in a simplified query.* This is used by default and removes the need to explitly request each scoreType in the list. . if omitted defaults to ["ALL"]  # noqa: E501

        Keyword Args:
            value ([str]): The FactSet Truvalue Score types being requested. Score Types include the Pulse, Insight, Momentum, Article Volume, Category Volume, Dynamic Materiality Score, Adjusted Insight, and Industry Percentile. When left blank all score types will be returned for the requested Id. To specify select scores returned in the response, provide a comma-separated list of the scores using the description below. <p>These scores use the same underlying data and 100-point scale, except for ranks and percentiles. The cognitive computing system behind FactSet's Truvalue Platform uses natural language processing to interpret semantic content and generate analytics. It does so by applying criteria that are consistent with established sustainability and ESG frameworks, scoring data points on performance using a 0 to 100 scale. A score of 50 represents a neutral impact. Scores above 50 indicate positive performance, and scores below reflect negative performance.</p>  ### ESG Score Types  |**SASB Category Input**|**Description**| |---|---| |**PULSE**|*Pulse Score*, is a measure of near-term performance changes that highlights opportunities and controversies, enabling real-time monitoring of companies. It focuses on events of the day and provides a responsive signal to alert investors to dynamic moves.| |**INSIGHT**|*Insight Score*, a measure of a company's longer-term ESG track record, similar to a ratings system. Scores are less sensitive to daily events and reflect the enduring performance record of a company over time. Scores are derived using an exponentially-weighted moving average of the Pulse, defined below, and the half-life of an event's influence on the overall score is 6 months.| |**MOMENTUM**|*Momentum Score*, measures the trend of a company's Insight score. It is a unique ESG metric in the industry that gives investors a high-precision view of the trajectory of a company's ESG performance, relative to peers. It does so by precisely articulating upward or downward movement, relative to that of all others in the universe, making it a measure that enhances quantitative workflows.| |**ART_VOL_TTM**|*Article Volume Score*, measures the information flow or number of articles about a company over the past 12 months.| |**CAT_VOL_TTM**|*Category Volume Score*, returns the total number of times any of the 26 categories received a score over a trailing twelve-month (TTM) period of time.| |**DYNAMIC_MAT**|*Dynamic Materiality Score*, shows the percentage value of data flow by category compared with the total data flow for the organization **(NOT VALID for `ALLCATEGORIES` and `MATERIALITY` category types).**| |**ADJ_INSIGHT**|*Adjusted Insight*, Measures company ESG performance, generating scores for lower-volume and zero-volume firms by blending company scores with industry medians. **(ONLY Vaild for `ALLCATEGORIES` and `MATERIALITY` categories). <p>**Adjusted Insight Score = (# of articles / 5) x Company Insight Score + ((5 - # of articles) / 5) x Industry (or Sector) Median Insight Score.</p>| |**IND_PCTL**|*Industry Percentile*, offers context on company Adjusted Insight scores relative to peers in the same SICS Industry. This value is used to establish the textual ESG Rank. **(ONLY Vaild for `ALLCATEGORIES` and `MATERIALITY` categories).**|  ### Helper Input **ALL**= *Ability to fetch all of the \"scoreTypes\" listed above in a simplified query.* This is used by default and removes the need to explitly request each scoreType in the list. . if omitted defaults to ["ALL"]  # noqa: E501
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
        """
        # required up here when default value is not given
        _path_to_item = kwargs.pop('_path_to_item', ())

        if 'value' in kwargs:
            value = kwargs.pop('value')
        elif args:
            args = list(args)
            value = args.pop(0)
        else:
            value = ["ALL"]

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
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
        self.value = value
        if kwargs:
            raise ApiTypeError(
                "Invalid named arguments=%s passed to %s. Remove those invalid named arguments." % (
                    kwargs,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, *args, **kwargs):
        """SasbScoreTypes - a model defined in OpenAPI

        Note that value can be passed either in args or in kwargs, but not in both.

        Args:
            args[0] ([str]): The FactSet Truvalue Score types being requested. Score Types include the Pulse, Insight, Momentum, Article Volume, Category Volume, Dynamic Materiality Score, Adjusted Insight, and Industry Percentile. When left blank all score types will be returned for the requested Id. To specify select scores returned in the response, provide a comma-separated list of the scores using the description below. <p>These scores use the same underlying data and 100-point scale, except for ranks and percentiles. The cognitive computing system behind FactSet's Truvalue Platform uses natural language processing to interpret semantic content and generate analytics. It does so by applying criteria that are consistent with established sustainability and ESG frameworks, scoring data points on performance using a 0 to 100 scale. A score of 50 represents a neutral impact. Scores above 50 indicate positive performance, and scores below reflect negative performance.</p>  ### ESG Score Types  |**SASB Category Input**|**Description**| |---|---| |**PULSE**|*Pulse Score*, is a measure of near-term performance changes that highlights opportunities and controversies, enabling real-time monitoring of companies. It focuses on events of the day and provides a responsive signal to alert investors to dynamic moves.| |**INSIGHT**|*Insight Score*, a measure of a company's longer-term ESG track record, similar to a ratings system. Scores are less sensitive to daily events and reflect the enduring performance record of a company over time. Scores are derived using an exponentially-weighted moving average of the Pulse, defined below, and the half-life of an event's influence on the overall score is 6 months.| |**MOMENTUM**|*Momentum Score*, measures the trend of a company's Insight score. It is a unique ESG metric in the industry that gives investors a high-precision view of the trajectory of a company's ESG performance, relative to peers. It does so by precisely articulating upward or downward movement, relative to that of all others in the universe, making it a measure that enhances quantitative workflows.| |**ART_VOL_TTM**|*Article Volume Score*, measures the information flow or number of articles about a company over the past 12 months.| |**CAT_VOL_TTM**|*Category Volume Score*, returns the total number of times any of the 26 categories received a score over a trailing twelve-month (TTM) period of time.| |**DYNAMIC_MAT**|*Dynamic Materiality Score*, shows the percentage value of data flow by category compared with the total data flow for the organization **(NOT VALID for `ALLCATEGORIES` and `MATERIALITY` category types).**| |**ADJ_INSIGHT**|*Adjusted Insight*, Measures company ESG performance, generating scores for lower-volume and zero-volume firms by blending company scores with industry medians. **(ONLY Vaild for `ALLCATEGORIES` and `MATERIALITY` categories). <p>**Adjusted Insight Score = (# of articles / 5) x Company Insight Score + ((5 - # of articles) / 5) x Industry (or Sector) Median Insight Score.</p>| |**IND_PCTL**|*Industry Percentile*, offers context on company Adjusted Insight scores relative to peers in the same SICS Industry. This value is used to establish the textual ESG Rank. **(ONLY Vaild for `ALLCATEGORIES` and `MATERIALITY` categories).**|  ### Helper Input **ALL**= *Ability to fetch all of the \"scoreTypes\" listed above in a simplified query.* This is used by default and removes the need to explitly request each scoreType in the list. . if omitted defaults to ["ALL"]  # noqa: E501

        Keyword Args:
            value ([str]): The FactSet Truvalue Score types being requested. Score Types include the Pulse, Insight, Momentum, Article Volume, Category Volume, Dynamic Materiality Score, Adjusted Insight, and Industry Percentile. When left blank all score types will be returned for the requested Id. To specify select scores returned in the response, provide a comma-separated list of the scores using the description below. <p>These scores use the same underlying data and 100-point scale, except for ranks and percentiles. The cognitive computing system behind FactSet's Truvalue Platform uses natural language processing to interpret semantic content and generate analytics. It does so by applying criteria that are consistent with established sustainability and ESG frameworks, scoring data points on performance using a 0 to 100 scale. A score of 50 represents a neutral impact. Scores above 50 indicate positive performance, and scores below reflect negative performance.</p>  ### ESG Score Types  |**SASB Category Input**|**Description**| |---|---| |**PULSE**|*Pulse Score*, is a measure of near-term performance changes that highlights opportunities and controversies, enabling real-time monitoring of companies. It focuses on events of the day and provides a responsive signal to alert investors to dynamic moves.| |**INSIGHT**|*Insight Score*, a measure of a company's longer-term ESG track record, similar to a ratings system. Scores are less sensitive to daily events and reflect the enduring performance record of a company over time. Scores are derived using an exponentially-weighted moving average of the Pulse, defined below, and the half-life of an event's influence on the overall score is 6 months.| |**MOMENTUM**|*Momentum Score*, measures the trend of a company's Insight score. It is a unique ESG metric in the industry that gives investors a high-precision view of the trajectory of a company's ESG performance, relative to peers. It does so by precisely articulating upward or downward movement, relative to that of all others in the universe, making it a measure that enhances quantitative workflows.| |**ART_VOL_TTM**|*Article Volume Score*, measures the information flow or number of articles about a company over the past 12 months.| |**CAT_VOL_TTM**|*Category Volume Score*, returns the total number of times any of the 26 categories received a score over a trailing twelve-month (TTM) period of time.| |**DYNAMIC_MAT**|*Dynamic Materiality Score*, shows the percentage value of data flow by category compared with the total data flow for the organization **(NOT VALID for `ALLCATEGORIES` and `MATERIALITY` category types).**| |**ADJ_INSIGHT**|*Adjusted Insight*, Measures company ESG performance, generating scores for lower-volume and zero-volume firms by blending company scores with industry medians. **(ONLY Vaild for `ALLCATEGORIES` and `MATERIALITY` categories). <p>**Adjusted Insight Score = (# of articles / 5) x Company Insight Score + ((5 - # of articles) / 5) x Industry (or Sector) Median Insight Score.</p>| |**IND_PCTL**|*Industry Percentile*, offers context on company Adjusted Insight scores relative to peers in the same SICS Industry. This value is used to establish the textual ESG Rank. **(ONLY Vaild for `ALLCATEGORIES` and `MATERIALITY` categories).**|  ### Helper Input **ALL**= *Ability to fetch all of the \"scoreTypes\" listed above in a simplified query.* This is used by default and removes the need to explitly request each scoreType in the list. . if omitted defaults to ["ALL"]  # noqa: E501
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
        """
        # required up here when default value is not given
        _path_to_item = kwargs.pop('_path_to_item', ())

        self = super(OpenApiModel, cls).__new__(cls)

        if 'value' in kwargs:
            value = kwargs.pop('value')
        elif args:
            args = list(args)
            value = args.pop(0)
        else:
            value = ["ALL"]

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
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
        self.value = value
        if kwargs:
            raise ApiTypeError(
                "Invalid named arguments=%s passed to %s. Remove those invalid named arguments." % (
                    kwargs,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        return self
