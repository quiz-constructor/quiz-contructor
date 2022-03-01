import { FC } from 'react';

export type QuizImageProps = {
    src: string;
};

const QuizImage: FC<QuizImageProps> = ({ src }) => {
    return (
        <div className='quiz-image flex flex-wrap h-screen justify-center content-center'>
            <img className='max-w-lg h-auto shadow-lg' src={src} alt='quiz' />
        </div>
    );
};

export default QuizImage;
