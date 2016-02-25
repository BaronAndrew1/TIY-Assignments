How does the API handle authentication?

  Do I need to authenticate?

    I am not sure.  There are certainly ways to authenticate but it might not be necessary.

  What can I do with an unauthenticated request?

    Usually they will be stored and if a certain number is reached that account
    will be banned temporarily from attempting a login.

  How can I authenticate my request? (3 ways)

    Username/Basic,  OAuth token/header, OAuth key/secret.




How do I ask the API for...

  The profile information for a specific user?

    A get command?

  The repository listing for a specific user?

    Also a get command?

  The recent, public activity for a specific user?

    Also a get command? (The online information is too big its hard to find.)




Is there a limit to the number of requests I can make?

  X-RateLimit-Limit

  Is there a way of extending that limit?

    It is reset each day. also client id and secret.

  What happens when I hit the limit?

    You receive a forbidden error.




What if there is a lot of data returned?

  How can I ask for more (or less) data from a request?

  How do I know that there is more data available?




What are the endpoints for fetching...

  the profile data for a user?

  the organizations a user belongs to?

  the repositories a user has created?

  a filtered list of repositories?

  a sorted list of repositories?

  public events for a user?


  

When fetching public events for a user...

  How many results are returned by default?

  What limitations exist on fetching more results?

  What is the basic structure of the results?

  What fields are included in each result?

  What are the data types for each field?

  What are some of the different values for the type field?
