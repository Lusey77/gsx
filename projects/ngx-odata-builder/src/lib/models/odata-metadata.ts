export type ODataMetadata = {
  /*
   * Represents Minimal Metadata
   */

  // The root context URL of the payload and the context URL for any deleted entries or added or deleted links in a
  // delta response, or for entities or entity collections whose set cannot be determined from the root context URL
  '@odata.context'?: string;
  // The ETag of the entity or collection, as appropriate
  '@odata.etag'?: string;
  // The total count of a collection of entities or collection of entity references, if requested
  '@odata.count'?: string;
  // The next link of a collection with partial results
  '@odata.nextLink'?: string;
  // The delta link for obtaining changes to the result, if requested
  '@odata.deltaLink'?: string;

  /*
   * Represents Full Metadata
   */

  // The ID of the entity
  '@odata.id'?: string;
  // The link used to read the entity, if the edit link cannot be used to read the entity
  '@odata.readLink'?: string;
  // The link used to edit/update the entity, if the entity is updatable and the id does not represent a URL that
  // can be used to edit the entity
  '@odata.editLink'?: string;
  // The link used to retrieve the values of a navigation property
  '@odata.navigationLink'?: string;
  // The link used to describe the relationship between this entity and related entities
  '@odata.associationLink'?: string;
  // The type of the containing object or targeted property if the type of the object or targeted property cannot be
  // heuristically determined from the data value.
  '@odata.type'?: string;

  /*
   * Represents Metadata for media entities and stream properties
   */

  // The link used to read the stream
  '@odata.mediaReadLink': string;
  // The link used to edit/update the stream
  '@odata.mediaEditLink': string;
  // The ETag of the stream, as appropriate
  '@odata.mediaEtag': string;
  // The media type of the stream
  '@odata.mediaContentType': string;
}
