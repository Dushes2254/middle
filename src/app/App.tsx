import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui';

function App() {
  const { theme } = useTheme();

  return (
    <Suspense fallback=''>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
