"use strict";
import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import fetch from "node-fetch";

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

export const echoBot: APIGatewayProxyHandler = async (event, context) => {
  const BASE_URL = `http://api.telegram.org/bot${process.env["TELEGRAM_TOKEN"]}/sendMessage`;
  const body = JSON.parse(event.body!);
  await fetch(
    `${BASE_URL}?text=${encodeURI(body.message.text)}&chat_id=${encodeURI(
      body.message.chat.id
    )}`
  );
  return {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
    }),
  };
};
