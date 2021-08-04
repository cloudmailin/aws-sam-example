exports.helloFromLambdaHandler = async (event, context) => {
  console.info(`${JSON.stringify(event)}`);
  const name = event.queryStringParameters?.name || "world";
  console.info(JSON.stringify(event.queryStringParameters))
  console.info(`Name: ${name}`);

  return {
    "statusCode": 201,
    "body": JSON.stringify({
      message: `Hello ${name}`
    })
  };
};
