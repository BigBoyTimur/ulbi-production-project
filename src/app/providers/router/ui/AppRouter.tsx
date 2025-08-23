import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const element = (route: AppRouteProps) => (
    <Suspense fallback={ <PageLoader /> }>
        { route.element }
    </Suspense>
);

export const AppRouter = () => {
    const renderWithWrapper = (route: AppRouteProps) => {

        return ( 
            <Route
                key={ route.path }
                path = { route.path }
                element = { route.authOnly ? <RequireAuth>{ element(route) }</RequireAuth> : element }
            />
        );
    };
    return (
        <Routes>
            { Object.values(routeConfig).map(renderWithWrapper) }
        </Routes>
    );
};
