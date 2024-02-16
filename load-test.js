import http from 'k6/http';
import { sleep, check } from 'k6';
export const options = {
    stages: [
        { duration: '30s', target: 200 }, // below normal load
        { duration: '5ms', target: 200 }, // normal load
        { duration: '30s', target: 0 }, // ramp up to a crawler
        
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