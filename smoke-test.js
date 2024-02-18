import http from 'k6/http';
import { sleep, check } from 'k6';
export const options = {
  vus: 1,
  // iteration: 40,
  duration: '10s',
};
export default function () {
  const res = http.get('http://blazedemo.com');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}