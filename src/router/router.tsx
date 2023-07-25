import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TablePage from "../pages/table-page";
import BackToTable from "../pages/back-to-table/back-to-table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <BackToTable /> },
      {
        path: ":id",
        element: <TablePage />,
      },
    ],
  },
]);

export default router;
