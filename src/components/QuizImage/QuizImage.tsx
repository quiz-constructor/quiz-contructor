import { FC } from 'react';

export type QuizImageProps = {
    name: string;
    url: string;
};

const QuizImage: FC<QuizImageProps> = ({ name, url }) => {
    return (
        <div
            className='quiz-image relative h-50vh w-96 max-w-xl bg-center rounded-tinderCard bg-cover drop-shadow-2xl'
            style={{
                backgroundImage: `url(${url})`,
            }}
        >
            <p className='absolute text-white bottom-5 left-5'>{name}</p>
        </div>
    );
};

export default QuizImage;
