import ResponsiveRebuild from '@/components/ResponsiveRebuild';
import ErrorBoundary from '@/components/ErrorBoundary';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Preloader } from '@/components/Preloader';
import { BackToTop } from '@/components/BackToTop';

export default function App() {
  return (
    <ErrorBoundary>
      <Preloader />
      <SmoothScroll>
        <ResponsiveRebuild />
      </SmoothScroll>
      <BackToTop />
    </ErrorBoundary>
  );
}
