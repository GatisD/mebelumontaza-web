import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import KokaMajinas from "@/pages/KokaMajinas";
import ParvaksanasServiss from "@/pages/ParvaksanasServiss";
import Portfolio from "@/pages/Portfolio";
import Kontakti from "@/pages/Kontakti";
import PrivatumaPolitika from "@/pages/PrivatumaPolitika";
import NotFound from "@/pages/NotFound";
import type { RouteRecord } from "vite-react-ssg";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "koka-majinas", element: <KokaMajinas /> },
      { path: "parvaksanas-serviss", element: <ParvaksanasServiss /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "kontakti", element: <Kontakti /> },
      { path: "privatuma-politika", element: <PrivatumaPolitika /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
