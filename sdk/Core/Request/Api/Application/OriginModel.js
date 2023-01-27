/**
 * Allows to get, delete and add origins for application.
 *
 * Origins are links on the sites, where API can be used sign CORS authorization - from client's browser.
 * If site is not in the list, you can use API only for requests between two servers. Requests directly from client's
 * browser are restricted.
 *
 * Origin should be exact full link on the site.
 *
 * Important to understand that application can add allowed sites only for itself and cannot add for another application.
 * This means that you need to call this API point using only the application, which you are going to use on the sites.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Application_OriginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of origins.
   *
   * Key is link on the site, where API is allowed.
   *
   * Value is a domain which used to make API requests.
   * May be <tt>null</tt> and in this case the API requests are made directly to WL web server.
   *
   * <tt>null</tt> if is not initialized yet.
   *
   * @delete post
   * @get result
   * @put post
   * @type {?{}}
   */
  this.a_list = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_OriginModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_OriginModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"delete": {"post": true},"get": {"result": true},"put": {"post": true}}}};
};