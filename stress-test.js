import http from 'k6/http';
import { sleep, check } from 'k6';
export const options = {
    stages: [
        { duration: '10s', target: 10 }, // ramp up
        { duration: '30s', target: 10 }, // normal load
        { duration: '10s', target: 25 }, // ramp up to a crawler
        { duration: '30s', target: 25 }, // keep it as a crawler
        { duration: '10s', target: 40 },   // ramp up
        { duration: '30s', target: 40 },     // keep it as it is
        { duration: '30s', target: 0 },  // scale down
        
    ],
    ext: {
        loadimpact: {
          projectID: 3682569,
          // Test runs with the same name groups test runs together
          name: 'TEST RUN'
        }
    }
  
};
export default function () {
  http.get('http://youtube.com');
  sleep(1);
}