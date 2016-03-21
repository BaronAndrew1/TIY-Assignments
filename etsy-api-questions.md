*The star is used in this particular instance as a personal marker so I know which areas of the markdown are my answers vs the questions.*


How do I make API requests?


  What is the base URL for all requests?

    *All requests must have GET https://openapi.etsy.com/v2/ as their base.  vs denotes the current version of the etsy api and the call will not work without it.  After this base, a various number of additional criterion can be added in order to navigate the api.*

  Are there any headers or query parameters required?

    *No, there are no headers or query parameters that are REQUIRED, however they are significantly helpful in narrowing down your search.  There is header that is send out automatically on the return with your rate limit, however.*

  What kind of response should I expect?

    *Quite frankly that completely depends on what type of request you send.  You should expect to receive whatever it is that you asked for.*

How does the API handle authentication?


  Do I need to authenticate? with user credentials?

    *Authenticating is necessary to access the etsy api, however it does not require user credentials.  You can be given temporary access credentials through an Oauth token(which from what I gather is obtained through your api key).*

  What can I do with an unauthenticated request?

    *See a nice big error message that tells you that its impossible to view the etsy api without an authenticated key*

  How can I authenticate my request? (what methods)

    *An Oauth token, a secret token, a generated api key.  There may be other, and for all I can tell these might all be connected/the same.  Truthfully reading the documentation has confused me even more than when I started.*

What Resource in the API represents...

  an individual product?

    */listings/:listing_id seems to be the best add-on to the standard etsy call in order to target a very specific product.*

  a group or collection of products?

    */listings/{insert here} is the best method I can think of to browse a collection.  Some example of this would be /listings/active or /listings/interesting.  These will pull all listings with the additional parameters you ask for in the refining section of the call.*

  images associated with a product?

    */listings/:listing_id/images will grab all images associated with a specific listing grabbed by id.  This can be futher refined by adding the /:listing_image_id to find a specific image.*

  sizes and colors for a product?

    What actions and endpoints exist for each of these Resources?

    What parameters do each endpoint require or accept?

    What fields are returned for each Resource, specifically:



  an individual product?

  *this seems to be a repeat question*

  a group or collection of products?

  *as does this*

    What additional fields can be requested for each?

    *There are numerous additional fields that can be requested in order to further refine your search.  These include active/inactive/intersting/removed/expired/quantity/views and many more.*
