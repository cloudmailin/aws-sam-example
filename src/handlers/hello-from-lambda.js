exports.helloFromLambdaHandler = async (event, context) => {
  console.info(`${JSON.stringify(event)}`);
  return {
    "statusCode": 201,
    "body": JSON.stringify({
      message: "Hello World"
    })
  };
};
