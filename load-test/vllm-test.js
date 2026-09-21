import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '60s',
};

export default function () {
  const payload = JSON.stringify({
    model: 'Qwen/Qwen2.5-3B-Instruct',
    messages: [{ role: 'user', content: 'Explain photosynthesis in two sentences.' }],
    max_tokens: 100,
  });

  const params = { headers: { 'Content-Type': 'application/json' } };
  const res = http.post('http://localhost:8000/v1/chat/completions', payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
