import { lazy, Suspense } from "react";
const LazyComponent = lazy(() => import("./Component"));

function App() {
  return (
    <Suspense fallback={<h1>Hello World</h1>}>
      <LazyComponent />
    </Suspense>
  )
}

export default App;
