/*
 * SDF_API
 * The Standard Datafeed (SDF) API provides an alternative method for users to request and retrieve SDF packages (schemas & bundles). This service is not a direct replacement and does not have 100% feature parity with the Loader. This API provides an alternative for users who are unable to utilize the Loader due to:  Unable to install 3rd party executables due to Corporate Security policies Unable to utilize the Loader due to limitations or restrictions with the environment used to consume Standard Datafeed Clients who are utilizing existing delivery method like FTP, who may want to use a more secured & modern solution This API allows users to retrieve SDF packages they have subscriptions for, going back to August 31, 2021. Additional parameters are available to filter requests to get the exact files users are looking for. 
 *
 * The version of the OpenAPI document: 1.0
 * Contact: teammustang@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.StandardDatafeed;

import java.util.Collection;
import java.util.Iterator;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class StringUtil {
  /**
   * Check if the given array contains the given value (with case-insensitive comparison).
   *
   * @param array The array
   * @param value The value to search
   * @return true if the array contains the value
   */
  public static boolean containsIgnoreCase(String[] array, String value) {
    for (String str : array) {
      if (value == null && str == null) {
        return true;
      }
      if (value != null && value.equalsIgnoreCase(str)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Join an array of strings with the given separator.
   * <p>
   * Note: This might be replaced by utility method from commons-lang or guava someday
   * if one of those libraries is added as dependency.
   * </p>
   *
   * @param array     The array of strings
   * @param separator The separator
   * @return the resulting string
   */
  public static String join(String[] array, String separator) {
    int len = array.length;
    if (len == 0) {
      return "";
    }

    StringBuilder out = new StringBuilder();
    out.append(array[0]);
    for (int i = 1; i < len; i++) {
      out.append(separator).append(array[i]);
    }
    return out.toString();
  }

  /**
   * Join a list of strings with the given separator.
   *
   * @param list      The list of strings
   * @param separator The separator
   * @return the resulting string
   */
  public static String join(Collection<String> list, String separator) {
    Iterator<String> iterator = list.iterator();
    StringBuilder out = new StringBuilder();
    if (iterator.hasNext()) {
      out.append(iterator.next());
    }
    while (iterator.hasNext()) {
      out.append(separator).append(iterator.next());
    }
    return out.toString();
  }
}