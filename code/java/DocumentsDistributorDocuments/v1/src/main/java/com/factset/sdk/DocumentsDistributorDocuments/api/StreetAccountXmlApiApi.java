package com.factset.sdk.DocumentsDistributorDocuments.api;

import com.factset.sdk.DocumentsDistributorDocuments.ApiException;
import com.factset.sdk.DocumentsDistributorDocuments.ApiClient;
import com.factset.sdk.DocumentsDistributorDocuments.ApiResponse;
import com.factset.sdk.DocumentsDistributorDocuments.Configuration;
import com.factset.sdk.DocumentsDistributorDocuments.Pair;

import javax.ws.rs.core.GenericType;

import com.factset.sdk.DocumentsDistributorDocuments.models.CheckstatusResponse;
import com.factset.sdk.DocumentsDistributorDocuments.models.GetfilesResponse;
import org.threeten.bp.LocalDate;
import com.factset.sdk.DocumentsDistributorDocuments.models.RequestfilesResponse;
import com.factset.sdk.DocumentsDistributorDocuments.models.StreetAccountStatus;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class StreetAccountXmlApiApi {
  private ApiClient apiClient;

  public StreetAccountXmlApiApi() {
    this(Configuration.getDefaultApiClient());
  }

  public StreetAccountXmlApiApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Get the API client
   *
   * @return API client
   */
  public ApiClient getApiClient() {
    return apiClient;
  }

  /**
   * Set the API client
   *
   * @param apiClient an instance of API client
   */
  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Returns the status and percentDone of the requested jobID
   * Need to plug-in the jobID got from /request-files into /check-status endpoint
   * @param jobID jobID returned by the request-files endpoint to know the status and percentDone (required)
   * @return CheckstatusResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
       <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
   */
  public CheckstatusResponse asynchStreetaccountV1CheckStatusGet(String jobID) throws ApiException {
    return asynchStreetaccountV1CheckStatusGetWithHttpInfo(jobID).getData();
  }

  /**
   * Returns the status and percentDone of the requested jobID
   * Need to plug-in the jobID got from /request-files into /check-status endpoint
   * @param jobID jobID returned by the request-files endpoint to know the status and percentDone (required)
   * @return ApiResponse&lt;CheckstatusResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
       <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<CheckstatusResponse> asynchStreetaccountV1CheckStatusGetWithHttpInfo(String jobID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'jobID' is set
    if (jobID == null) {
      throw new ApiException(400, "Missing the required parameter 'jobID' when calling asynchStreetaccountV1CheckStatusGet");
    }
    
    // create path and map variables
    String localVarPath = "/asynch/streetaccount/v1/check-status";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "jobID", jobID));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };

    GenericType<CheckstatusResponse> localVarReturnType = new GenericType<CheckstatusResponse>() {};

    return apiClient.invokeAPI("StreetAccountXmlApiApi.asynchStreetaccountV1CheckStatusGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Returns the SA XML files for the specified daterange
   * Need to plug-in the jobID got from /request-files into /check-status endpoint
   * @param jobID jobID returned by the request-files endpoint to collect the results of the query (required)
   * @return GetfilesResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
       <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
   */
  public GetfilesResponse asynchStreetaccountV1GetFilesGet(String jobID) throws ApiException {
    return asynchStreetaccountV1GetFilesGetWithHttpInfo(jobID).getData();
  }

  /**
   * Returns the SA XML files for the specified daterange
   * Need to plug-in the jobID got from /request-files into /check-status endpoint
   * @param jobID jobID returned by the request-files endpoint to collect the results of the query (required)
   * @return ApiResponse&lt;GetfilesResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
       <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<GetfilesResponse> asynchStreetaccountV1GetFilesGetWithHttpInfo(String jobID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'jobID' is set
    if (jobID == null) {
      throw new ApiException(400, "Missing the required parameter 'jobID' when calling asynchStreetaccountV1GetFilesGet");
    }
    
    // create path and map variables
    String localVarPath = "/asynch/streetaccount/v1/get-files";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "jobID", jobID));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };

    GenericType<GetfilesResponse> localVarReturnType = new GenericType<GetfilesResponse>() {};

    return apiClient.invokeAPI("StreetAccountXmlApiApi.asynchStreetaccountV1GetFilesGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Returns the jobID
   * Give the startDate and endDate parameters as request parameters in the /request-files endpoint, it returns the jobID. startDate and endDate should be in YYYY-MM-DDTHH:MM:SSZ format  This API only supports adhoc requests to retrieve historical files and does not support real-time       files and if you interested in require real-time push should consider the other three methods         (pushed via SFTP, to QNT account, or your Azure Storage) and Due to technical limitation, FactSet can only send out 10,000 files per request
   * @param startDate Date from which data is required. Should be YYYY-MM-DDTHH:MM:SSZ format (required)
   * @param endDate The date until which the data is to be fetched. Should be YYYY-MM-DDTHH:MM:SSZ format (required)
   * @return RequestfilesResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
       <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
   */
  public RequestfilesResponse asynchStreetaccountV1RequestFilesGet(LocalDate startDate, LocalDate endDate) throws ApiException {
    return asynchStreetaccountV1RequestFilesGetWithHttpInfo(startDate, endDate).getData();
  }

  /**
   * Returns the jobID
   * Give the startDate and endDate parameters as request parameters in the /request-files endpoint, it returns the jobID. startDate and endDate should be in YYYY-MM-DDTHH:MM:SSZ format  This API only supports adhoc requests to retrieve historical files and does not support real-time       files and if you interested in require real-time push should consider the other three methods         (pushed via SFTP, to QNT account, or your Azure Storage) and Due to technical limitation, FactSet can only send out 10,000 files per request
   * @param startDate Date from which data is required. Should be YYYY-MM-DDTHH:MM:SSZ format (required)
   * @param endDate The date until which the data is to be fetched. Should be YYYY-MM-DDTHH:MM:SSZ format (required)
   * @return ApiResponse&lt;RequestfilesResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
       <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<RequestfilesResponse> asynchStreetaccountV1RequestFilesGetWithHttpInfo(LocalDate startDate, LocalDate endDate) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'startDate' is set
    if (startDate == null) {
      throw new ApiException(400, "Missing the required parameter 'startDate' when calling asynchStreetaccountV1RequestFilesGet");
    }
    
    // verify the required parameter 'endDate' is set
    if (endDate == null) {
      throw new ApiException(400, "Missing the required parameter 'endDate' when calling asynchStreetaccountV1RequestFilesGet");
    }
    
    // create path and map variables
    String localVarPath = "/asynch/streetaccount/v1/request-files";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "startDate", startDate));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "endDate", endDate));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };

    GenericType<RequestfilesResponse> localVarReturnType = new GenericType<RequestfilesResponse>() {};

    return apiClient.invokeAPI("StreetAccountXmlApiApi.asynchStreetaccountV1RequestFilesGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}