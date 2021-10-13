"use strict";

const OGS = require("open-graph-scraper");
const { saveToDB, getFromDB } = require("../global/dbHandler");
const { statusCode, messages } = require("../global/constants");

const createResponse = (statusCode, message) => ({
  statusCode: statusCode,
  body: JSON.stringify({
    message,
  }),
});

const ogsData = async (options) => {
  try {
    const data = await OGS(options);
    const { error, result } = data;
    if (error) {
      return null;
    }
    return result;
  } catch (e) {
    return null;
  }
};

module.exports.getMetadata = async (event) => {
  const body = JSON.parse(event.body);

  if (!body?.url) {
    return createResponse(statusCode.BAD_REQ, messages.ValidUrlNeededMessage);
  }
  const options = { url: body.url.replace(/\/$/, "") };  //to remove traling slashes from URLs

  const existingData = await getFromDB(process.env.TABLE_NAME ?? "", options);
  if (existingData?.Item) {
    return createResponse(statusCode.SUCCESS, existingData?.Item);
  }

  const ogsDetails = await ogsData(options);
  if (!ogsDetails) return createResponse(statusCode.BAD_REQ, "Url Not Found");

  if (Array.isArray(ogsDetails.ogImage)) {
    ogsDetails.ogImage =
      ogsDetails.ogImage.length > 0
        ? ogsDetails.ogImage.map((image) => image.url)
        : [];
  } else {
    ogsDetails.ogImage = [ogsDetails?.ogImage?.url] ?? [];
  }

  ogsDetails["url"] = ogsDetails["requestUrl"];
  await saveToDB(process.env.TABLE_NAME ?? "", ogsDetails);
  return createResponse(statusCode.SUCCESS, ogsDetails);
};
