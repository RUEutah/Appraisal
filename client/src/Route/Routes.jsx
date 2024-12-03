// //SamplePage
import DashboardPage from '../screens/dashboard/DashboardPage';
import EmployeesPage from '../screens/employees/EmployeesPage';
import AppPage from '../screens/details/AppraisalDetails';
import QuestionsPage from '../screens/questions/QnA';
import ChartsPage from '../screens/reports/ReportsPage';


export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/:layout`, Component: <DashboardPage /> },
  { path: `${process.env.PUBLIC_URL}/pages/employees-page/:layout`, Component: <EmployeesPage /> },
  { path: `${process.env.PUBLIC_URL}/pages/app-page/:layout`, Component: <AppPage /> },
  { path: `${process.env.PUBLIC_URL}/pages/qna/:layout`, Component: <QuestionsPage /> },
  { path: `${process.env.PUBLIC_URL}/pages/charts/:layout`, Component: <ChartsPage/> },
];
