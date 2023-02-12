import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

// export const App = () => {
//   return (
//     <div
//     // style={{
//     //   height: '100vh',
//     //   display: 'flex',
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     //   fontSize: 40,
//     //   color: '#010101'
//     // }}
//     >
//       React homework template
//     </div>
//   );
// };
