import { FC, useState } from 'react';
import { QuizImage } from '../../components';
import TinderCard from 'react-tinder-card';

export type QuizPageProps = {};

type quizCharacter = {
    name: string;
    url: string;
};

const QuizPage: FC<QuizPageProps> = () => {
    const [quizCharacters] = useState<quizCharacter[]>([
        {
            name: 'Asuna',
            url: 'https://cdna.artstation.com/p/assets/images/images/026/348/354/large/tyler-dao-asuna-stacia.jpg?1588540397',
        },
        {
            name: 'Naruto',
            url: 'https://i.insider.com/5e820b04671de06758588fb8',
        },
        {
            name: 'Nezuko',
            url: 'https://wallpapersmug.com/download/1280x1024/f4f82c/angry-kamado-nezuko-anime.jpg',
        },
    ]);
    const handleSwipe = (d: any) => {
        console.log(d);
    };

    return (
        <div className='quiz-page'>
            <div className='flex justify-center mt-25vh'>
                {quizCharacters.map((character, index) => (
                    <TinderCard
                        className='absolute'
                        key={index}
                        onSwipe={handleSwipe}
                        onCardLeftScreen={() => console.log('card left screen')}
                        preventSwipe={['left', 'right']}
                    >
                        <QuizImage name={character.name} url={character.url} />
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default QuizPage;
