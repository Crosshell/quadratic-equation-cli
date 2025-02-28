import { startNonInteractive } from './non-interactive';
import { startInteractive } from './interactive';

const filePath: string = process.argv[2];

if (filePath) {
  startNonInteractive(filePath);
} else {
  startInteractive();
}
