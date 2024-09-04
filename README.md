docker run -p 5050:5050 --network=satnet -e PORT=5050 -e MONGO_URL=mongodb://admin:password@mongo -v $(pwd):/app   satwikcoder007/my-node-app
