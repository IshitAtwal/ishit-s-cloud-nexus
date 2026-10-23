import { MotionConfig } from "framer-motion";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Single-page site: Netlify serves index.html for every path, so anything other than the root is a 404.
const isHome = ["/", "/index.html"].includes(window.location.pathname);

const App = () => <MotionConfig reducedMotion="user">{isHome ? <Index /> : <NotFound />}</MotionConfig>;

export default App;
