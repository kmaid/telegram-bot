"use strict";
import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
export const hello: APIGatewayProxyHandler = async (event, context) => {
  return new Promise<APIGatewayProxyResult>((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          statusCode: 200,
          body: JSON.stringify({
            message: "Go Serverless v1.0! Your function executed successfully!",
            input: event,
          }),
        }),
      500
    )
  );
};
