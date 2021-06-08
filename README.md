# redis-pub-sub
a simple implementation of the pub-sub pattern using redis as a channel

## Running the project locally
- Requirements
    - NodeJS(v10 or higher)
    - Yarn (or npm, but delete the yarn.lock file to avoid conflicts)
    - A redis installation (or a docker container running redis)

- Setup
    ```
    # clone the repository
    $ git clone https://github.com/Emmanuerl/redis-pub-sub.git
    ```
    ```
    # install dependencies
    $ yarn
    ```
    ```
    # run the subscriber first 
    # Ensure the redis server is already running locally
    $ node subscriber.js
    ```
    ```
    # run the publisher
    $ node publisher.js
    ```
