import { FC } from 'react';
import { QuizImage } from '../../components';

export type QuizPageProps = {};

const QuizPage: FC<QuizPageProps> = () => {
    return (
        <div className='quiz-page'>
            <QuizImage src='https://mdbootstrap.com/img/new/slides/041.jpg' />
        </div>
    );
};

export default QuizPage;
