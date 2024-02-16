import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 1,
  // iteration: 40,
  duration: '10s',
};
export default function () {
  http.get('http://youtube.com');
  sleep(1);
}