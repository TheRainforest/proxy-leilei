import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';
const { getRandom, review } = require('./k6TestData.js');

export let options = {
  stages: [
    { duration: '5s', target: 1 },
    { duration: '25s', target: 10 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 400 },
    { duration: '1m', target: 1000 },
    { duration: '1m', target: 1001 },
    { duration: '90s', target: 1000 },
    { duration: '1m', target: 400 },
    { duration: '25s', target: 100 },
    { duration: '5s', target: 0 },
  ],
};

const base_url = 'http://localhost:3010/api/allreviews';

export default function() {
  let randomId = getRandom(990000, 998000);
  let path = `${base_url}/${randomId}`;

  // Test /GET
  check(http.get(path), {
    "/GET received status 200": r => r.status === 200
  });

  // Test /POST
  randomId = getRandom(998000, 999000);
  let postdata = review[getRandom(0, 4)];
  let postTest = http.post(path, postdata);
  check(postTest, {
    "/POST received status 200": r => r.status === 200
  });
  sleep(8);
};
