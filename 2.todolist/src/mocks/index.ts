import { server } from './server';
import { worker } from './browser';

export default function setMock() {
  if (typeof window === 'undefined') {
    server.listen();
  } else {
    worker.start();
  }
}
