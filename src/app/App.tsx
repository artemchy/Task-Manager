import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { AppRouter } from './providers/AppRouter';
import { ModalProvider } from './providers/ModalProvider';

function App() {
  return (
    <>
      <ErrorBoundary>
        <AppRouter />
        <ModalProvider />
      </ErrorBoundary>
    </>
  );
}

export default App;
