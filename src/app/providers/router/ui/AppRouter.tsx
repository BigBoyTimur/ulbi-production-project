import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = routeConfig.filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }); 

    return (
        <Suspense fallback={ <PageLoader /> }>
            <Routes>
                { routes.map(({ element, path }) => (
                    <Route
                        key={ path }
                        path = { path }
                        element = { (
                            <div className="page-wrapper">
                                { element }
                            </div>
                        ) }
                    />
                )) }
            </Routes>
        </Suspense>
    );
};
