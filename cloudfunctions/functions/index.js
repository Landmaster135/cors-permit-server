const functions = require("firebase-functions");
const requestPromise = require("request-promise-native");
const cors = require("cors");
const express = require("express");

const app = express();

// すべての外部からのリクエストを受け付ける
// 必要に応じてアクセス許可するオリジンなどの設定をしてください
// Docs: https://www.npmjs.com/package/cors
app.use(cors());

const BASE_KEY = "https://note.com/kinkinbeer135ml";
const KEY_ALL = BASE_KEY + "/rss";
// const KEY_MAGAZINE = BASE_KEY + "/m/m5774f6fe2c0b/rss";

const getRSS = async (key) => {
  const result = await requestPromise(key);
  return result;
};

// エンドポイント設定
// app.get("/magazine", async (req, res) => {
//   res.set("Cache-Control", "public, max-age=300, s-maxage=600");
//   getRSS(KEY_MAGAZINE).then((response) => res.send(response));
// });
app.get("/all", async (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  getRSS(KEY_ALL).then((response) => res.send(response));
});

const api = functions.https.onRequest(app);


const CLOUD_BASE_KEY = "https://us-central1-projectbeer15-37257.cloudfunctions.net/api";
const CLOUD_KEY_ALL = CLOUD_BASE_KEY + "/all";
// const CLOUD_KEY_MAGAZINE = CLOUD_BASE_KEY + "/magazine";

// コールドスタート対応: Cloud Functions に定義されたエンドポイントを1時間おきに叩くだけの関数
const scheduledRun = functions.pubsub.schedule("0 * * * *")
    .timeZone("Asia/Tokyo")
    .onRun(async () => {
      await requestPromise(CLOUD_KEY_ALL);
      // await requestPromise(CLOUD_KEY_MAGAZINE);

      return null;
    });
module.exports = {api, scheduledRun};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
