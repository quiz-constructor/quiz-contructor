import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { QuizPage } from '../../pages';

export type HomeRouterProps = {};

const HomeRouter: FC<HomeRouterProps> = () => {
    return (
        <Routes>
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='*' element={<Navigate to='/quiz' />} />
        </Routes>
    );
};

export default HomeRouter;
