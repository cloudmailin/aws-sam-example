import  { Handler, APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda"

type ProxyHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>

export const helloFromLambdaHandler : ProxyHandler = async (event, context) => {
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
