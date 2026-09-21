import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '60s',
};

export default function () {
  const payload = JSON.stringify({
    text_input: 'Explain photosynthesis in two sentences.',
    parameters: { max_tokens: 100 },
  });

  const params = { headers: { 'Content-Type': 'application/json' } };
  const res = http.post('http://localhost:8000/v2/models/qwen/generate', payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
