# InlineResponse20010Data

Subsampled time series data for the notation.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**InlineResponse2004DataRange**](InlineResponse2004DataRange.md) |  | [optional] 
**quality** | **str** | Quality of the price. | [optional] 
**subsamples** | [**[InlineResponse20010DataSubsamples]**](InlineResponse20010DataSubsamples.md) | List of summary records. For the attributes first, last, low, high, see attribute &#x60;valueUnit&#x60; in endpoint &#x60;/prices/get&#x60; for their unit, except for price type yield, where the &#x60;valueUnit&#x60; is always &#x60;percent&#x60; (id&#x3D;258). | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

