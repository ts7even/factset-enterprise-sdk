/**
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AttachmentSummaryDto from './model/AttachmentSummaryDto';
import AttendeeDto from './model/AttendeeDto';
import CommentDto from './model/CommentDto';
import CommentSummaryDto from './model/CommentSummaryDto';
import CreateBodyDto from './model/CreateBodyDto';
import CreateCommentDto from './model/CreateCommentDto';
import CreateCustomFieldValueDto from './model/CreateCustomFieldValueDto';
import CreateMeetingDto from './model/CreateMeetingDto';
import CustomFieldValueDto from './model/CustomFieldValueDto';
import IdentifierResolutionDto from './model/IdentifierResolutionDto';
import LocationDto from './model/LocationDto';
import MeetingDto from './model/MeetingDto';
import MeetingEventDto from './model/MeetingEventDto';
import MeetingSummaryDto from './model/MeetingSummaryDto';
import NewItemDto from './model/NewItemDto';
import Operation from './model/Operation';
import ProblemDetails from './model/ProblemDetails';
import RecordChangeDto from './model/RecordChangeDto';
import RecordEventSummaryDto from './model/RecordEventSummaryDto';
import ReferenceAttendeeDto from './model/ReferenceAttendeeDto';
import RelatedRecordsDto from './model/RelatedRecordsDto';
import ResolvedInstrumentDto from './model/ResolvedInstrumentDto';
import SubcommentSummaryDto from './model/SubcommentSummaryDto';
import UpdateMeetingDto from './model/UpdateMeetingDto';
import UserSerialDto from './model/UserSerialDto';
import AttachmentsApi from './api/AttachmentsApi';
import CommentsApi from './api/CommentsApi';
import EventsApi from './api/EventsApi';
import IdentifiersApi from './api/IdentifiersApi';
import MeetingsApi from './api/MeetingsApi';


/**
* IRN Meetings client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var irnmeetings = require('index'); // See note below*.
* var xxxSvc = new irnmeetings.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new irnmeetings.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new irnmeetings.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new irnmeetings.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.9.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AttachmentSummaryDto model constructor.
     * @property {module:model/AttachmentSummaryDto}
     */
    AttachmentSummaryDto,

    /**
     * The AttendeeDto model constructor.
     * @property {module:model/AttendeeDto}
     */
    AttendeeDto,

    /**
     * The CommentDto model constructor.
     * @property {module:model/CommentDto}
     */
    CommentDto,

    /**
     * The CommentSummaryDto model constructor.
     * @property {module:model/CommentSummaryDto}
     */
    CommentSummaryDto,

    /**
     * The CreateBodyDto model constructor.
     * @property {module:model/CreateBodyDto}
     */
    CreateBodyDto,

    /**
     * The CreateCommentDto model constructor.
     * @property {module:model/CreateCommentDto}
     */
    CreateCommentDto,

    /**
     * The CreateCustomFieldValueDto model constructor.
     * @property {module:model/CreateCustomFieldValueDto}
     */
    CreateCustomFieldValueDto,

    /**
     * The CreateMeetingDto model constructor.
     * @property {module:model/CreateMeetingDto}
     */
    CreateMeetingDto,

    /**
     * The CustomFieldValueDto model constructor.
     * @property {module:model/CustomFieldValueDto}
     */
    CustomFieldValueDto,

    /**
     * The IdentifierResolutionDto model constructor.
     * @property {module:model/IdentifierResolutionDto}
     */
    IdentifierResolutionDto,

    /**
     * The LocationDto model constructor.
     * @property {module:model/LocationDto}
     */
    LocationDto,

    /**
     * The MeetingDto model constructor.
     * @property {module:model/MeetingDto}
     */
    MeetingDto,

    /**
     * The MeetingEventDto model constructor.
     * @property {module:model/MeetingEventDto}
     */
    MeetingEventDto,

    /**
     * The MeetingSummaryDto model constructor.
     * @property {module:model/MeetingSummaryDto}
     */
    MeetingSummaryDto,

    /**
     * The NewItemDto model constructor.
     * @property {module:model/NewItemDto}
     */
    NewItemDto,

    /**
     * The Operation model constructor.
     * @property {module:model/Operation}
     */
    Operation,

    /**
     * The ProblemDetails model constructor.
     * @property {module:model/ProblemDetails}
     */
    ProblemDetails,

    /**
     * The RecordChangeDto model constructor.
     * @property {module:model/RecordChangeDto}
     */
    RecordChangeDto,

    /**
     * The RecordEventSummaryDto model constructor.
     * @property {module:model/RecordEventSummaryDto}
     */
    RecordEventSummaryDto,

    /**
     * The ReferenceAttendeeDto model constructor.
     * @property {module:model/ReferenceAttendeeDto}
     */
    ReferenceAttendeeDto,

    /**
     * The RelatedRecordsDto model constructor.
     * @property {module:model/RelatedRecordsDto}
     */
    RelatedRecordsDto,

    /**
     * The ResolvedInstrumentDto model constructor.
     * @property {module:model/ResolvedInstrumentDto}
     */
    ResolvedInstrumentDto,

    /**
     * The SubcommentSummaryDto model constructor.
     * @property {module:model/SubcommentSummaryDto}
     */
    SubcommentSummaryDto,

    /**
     * The UpdateMeetingDto model constructor.
     * @property {module:model/UpdateMeetingDto}
     */
    UpdateMeetingDto,

    /**
     * The UserSerialDto model constructor.
     * @property {module:model/UserSerialDto}
     */
    UserSerialDto,

    /**
    * The AttachmentsApi service constructor.
    * @property {module:api/AttachmentsApi}
    */
    AttachmentsApi,

    /**
    * The CommentsApi service constructor.
    * @property {module:api/CommentsApi}
    */
    CommentsApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The IdentifiersApi service constructor.
    * @property {module:api/IdentifiersApi}
    */
    IdentifiersApi,

    /**
    * The MeetingsApi service constructor.
    * @property {module:api/MeetingsApi}
    */
    MeetingsApi
};
