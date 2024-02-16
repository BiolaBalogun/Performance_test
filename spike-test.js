import http from 'k6/http';
import { sleep, check } from 'k6';
export const options = {
    stages: [
        { duration: '15s', target: 100 }, // ramp up
        { duration: '1m', target: 100 }, // normal load
        { duration: '15s', target: 0 }, // ramp down
        
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