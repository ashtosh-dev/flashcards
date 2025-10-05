// import React, { useState } from 'react';
// import './App.css';

// // --- Sample Data ---
// const chemistryQuestions = [
//     { question: "What is the chemical symbol for Gold?", options: ["Ag", "Au", "Pb", "Fe"], correctAnswer: "Au" },
//     { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], correctAnswer: "Nitrogen" },
//     { question: "What is the pH of pure water?", options: ["6", "7", "8", "9"], correctAnswer: "7" },
//     { question: "Which element is a noble gas?", options: ["Neon", "Oxygen", "Chlorine", "Sodium"], correctAnswer: "Neon" },
//     { question: "What is the main component of natural gas?", options: ["Ethane", "Butane", "Methane", "Propane"], correctAnswer: "Methane" },
//     { question: "Which of these is NOT a state of matter?", options: ["Solid", "Liquid", "Gas", "Molecule"], correctAnswer: "Molecule" },
//     { question: "What does 'H2O' represent?", options: ["Hydrogen Peroxide", "Water", "Salt", "Sugar"], correctAnswer: "Water" },
//     { question: "Which element has the atomic number 1?", options: ["Helium", "Oxygen", "Hydrogen", "Lithium"], correctAnswer: "Hydrogen" },
//     { question: "What is the hardest known natural material?", options: ["Gold", "Iron", "Quartz", "Diamond"], correctAnswer: "Diamond" },
//     { question: "Which of the following is an acid?", options: ["Sodium Hydroxide", "Vinegar", "Baking Soda", "Ammonia"], correctAnswer: "Vinegar" }
// ];


// // --- COMPONENTS ---

// function QuizPage({ topic, onFinishQuiz }) {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [showFeedback, setShowFeedback] = useState(false);

//     const currentQuestion = chemistryQuestions[currentQuestionIndex];

//     const handleSelectOption = (option) => {
//         if (!showFeedback) {
//             setSelectedAnswer(option);
//         }
//     };

//     const handleCheckAnswer = () => {
//         if (selectedAnswer) {
//             setShowFeedback(true);
//         }
//     };

//     const goToNext = () => {
//         if (currentQuestionIndex < chemistryQuestions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//             setSelectedAnswer(null);
//             setShowFeedback(false);
//         }
//     };
    
//     const getButtonClass = (option) => {
//         if (!showFeedback) {
//             return selectedAnswer === option ? 'selected' : '';
//         }
//         // If feedback is shown
//         if (option === currentQuestion.correctAnswer) {
//             return 'correct';
//         }
//         if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
//             return 'incorrect';
//         }
//         return '';
//     };

//     return (
//         <div className="quiz-card">
//             <div className="quiz-header">
//                 <h2>{topic} Quiz</h2>
//                 <span>Question {currentQuestionIndex + 1}/{chemistryQuestions.length}</span>
//             </div>
//             <div className="question-container">
//                 <h3>{currentQuestion.question}</h3>
//             </div>
//             <div className="options-container">
//                 {currentQuestion.options.map(option => (
//                     <button
//                         key={option}
//                         onClick={() => handleSelectOption(option)}
//                         className={`option-button ${getButtonClass(option)}`}
//                         disabled={showFeedback}
//                     >
//                         {option}
//                     </button>
//                 ))}
//             </div>
//             <div className="quiz-navigation">
//                  {/* Go Back button is a placeholder for more complex navigation */}
//                 <button onClick={onFinishQuiz} className="logout-button">End Quiz</button>
                
//                 {!showFeedback && (
//                     <button onClick={handleCheckAnswer} disabled={!selectedAnswer}>Check Answer</button>
//                 )}

//                 {showFeedback && (
//                     currentQuestionIndex === chemistryQuestions.length - 1 ? (
//                         <button onClick={onFinishQuiz} className="finish-button">Finish Quiz</button>
//                     ) : (
//                         <button onClick={goToNext}>Next</button>
//                     )
//                 )}
//             </div>
//         </div>
//     );
// }


// function FlashcardPage({ email, topic, onStartQuiz, onLogout }) {
//     return (
//         <div className="flashcard-card">
//             <div className="header">
//                 <h1>{topic} Flashcards</h1>
//                 <p>Welcome, {email}</p>
//             </div>
//             <div className="flashcard-content">
//                 <p>When you're ready, start the quiz!</p>
//             </div>
//             <button onClick={onStartQuiz} className="submit-button">Start Quiz</button>
//             <button onClick={onLogout} className="submit-button logout-button">Go Back</button>
//         </div>
//     );
// }

// function LoginPage({ onLogin }) {
//     const [email, setEmail] = useState('');
//     const [topic, setTopic] = useState('Chemistry');
//     const topics = ['Chemistry', 'Biology', 'Physics', 'Mathematics'];
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!email) {
//             alert('Please enter an email address.');
//             return;
//         }
//         onLogin(email, topic);
//     };
//     return (
//         <div className="login-card">
//             <div className="header">
//                 <h1>Flashcards</h1>
//                 <p>Select a topic to start learning</p>
//             </div>
//             <form onSubmit={handleSubmit} className="login-form">
//                 <div className="input-group">
//                     <label htmlFor="email">Email Address</label>
//                     <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="topic">Choose a Topic</label>
//                     <select id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
//                         {topics.map((t) => <option key={t} value={t}>{t}</option>)}
//                     </select>
//                 </div>
//                 <div>
//                     <button type="submit" className="submit-button">Start Learning</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// function App() {
//     const [page, setPage] = useState('login');
//     const [userEmail, setUserEmail] = useState('');
//     const [selectedTopic, setSelectedTopic] = useState('');

//     const handleLogin = (email, topic) => {
//         setUserEmail(email);
//         setSelectedTopic(topic);
//         setPage('flashcards');
//     };
//     const handleStartQuiz = () => {
//         setPage('quiz');
//     };
//     const handleFinishQuiz = () => {
//         setPage('flashcards');
//     };
//     const handleLogout = () => {
//         setPage('login');
//         setUserEmail('');
//         setSelectedTopic('');
//     };

//     const renderPage = () => {
//         if (page === 'quiz') {
//             return <QuizPage topic={selectedTopic} onFinishQuiz={handleFinishQuiz} />;
//         }
//         if (page === 'flashcards') {
//             return <FlashcardPage email={userEmail} topic={selectedTopic} onStartQuiz={handleStartQuiz} onLogout={handleLogout} />;
//         }
//         return <LoginPage onLogin={handleLogin} />;
//     }

//     return (
//         <main className="app-container">
//             {renderPage()}
//         </main>
//     );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';

// --- COMPONENTS ---

// This component now fetches its own data from your Django backend!
function QuizPage({ topic, onFinishQuiz }) {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);

    // useEffect hook to fetch data when the component loads
    useEffect(() => {
        // Fetch questions from your live Django API
        fetch(`http://127.0.0.1:8000/api/quiz/${topic}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setQuestions(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching questions:", error);
                setError("Failed to load questions. Make sure the backend server is running.");
                setLoading(false);
            });
    }, [topic]); // This effect runs when the 'topic' changes

    // --- Loading and Error States ---
    if (loading) {
        return <div className="quiz-card"><h2>Loading Quiz...</h2></div>;
    }

    if (error) {
        return <div className="quiz-card"><h2>Error</h2><p>{error}</p></div>;
    }
    
    if (questions.length === 0) {
        return (
            <div className="quiz-card">
                <h2>No Questions Found</h2>
                <p>No questions were found for the topic: {topic}. Please add some in the Django admin panel.</p>
                <button onClick={() => onFinishQuiz(0)} className="submit-button logout-button">Go Back</button>
            </div>
        );
    }


    // --- Existing Quiz Logic ---
    const currentQuestion = questions[currentQuestionIndex];

    const handleSelectOption = (option) => {
        if (!showFeedback) {
            setSelectedAnswer(option);
        }
    };

    const handleCheckAnswer = () => {
        if (selectedAnswer) {
            setShowFeedback(true);
            if (selectedAnswer === currentQuestion.correct_answer) {
                setScore(score + 1);
            }
        }
    };

    const goToNext = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setSelectedAnswer(null);
            setShowFeedback(false);
        } else {
            // If it's the last question, go to results
            onFinishQuiz(score);
        }
    };
    
    const getButtonClass = (option) => {
        if (!showFeedback) {
            return selectedAnswer === option ? 'selected' : '';
        }
        if (option === currentQuestion.correct_answer) {
            return 'correct';
        }
        if (option === selectedAnswer && option !== currentQuestion.correct_answer) {
            return 'incorrect';
        }
        return '';
    };

    return (
        <div className="quiz-page-layout">
            <div className="quiz-card">
                <div className="quiz-header">
                    <h2>{topic} Quiz</h2>
                    <span>Question {currentQuestionIndex + 1}/{questions.length}</span>
                </div>
                <div className="question-container">
                    <h3>{currentQuestion.question_text}</h3>
                </div>
                <div className="options-container">
                    {currentQuestion.options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleSelectOption(option)}
                            className={`option-button ${getButtonClass(option)}`}
                            disabled={showFeedback}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="quiz-navigation">
                    <button onClick={() => onFinishQuiz(score)} className="logout-button">End Quiz</button>
                    
                    {!showFeedback && (
                        <button onClick={handleCheckAnswer} disabled={!selectedAnswer}>Check Answer</button>
                    )}

                    {showFeedback && (
                         <button onClick={goToNext}>
                            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
                        </button>
                    )}
                </div>
            </div>
            <div className="scorecard">
                <h3>SCORE</h3>
                <p>{score}</p>
            </div>
        </div>
    );
}

function ResultsPage({ score, totalQuestions, onRestart, onBackToMenu }) {
    return (
        <div className="results-card">
            <h2>Quiz Complete!</h2>
            <p>Your Final Score</p>
            <div className="final-score">{score} / {totalQuestions}</div>
            <button onClick={onRestart} className="submit-button">Try Again</button>
            <button onClick={onBackToMenu} className="submit-button logout-button">Back to Menu</button>
        </div>
    );
}


function FlashcardPage({ email, topic, onStartQuiz, onLogout }) {
    return (
        <div className="flashcard-card">
            <div className="header">
                <h1>{topic} Flashcards</h1>
                <p>Welcome, {email}</p>
            </div>
            <div className="flashcard-content">
                <p>When you're ready, start the quiz!</p>
            </div>
            <button onClick={onStartQuiz} className="submit-button">Start Quiz</button>
            <button onClick={onLogout} className="submit-button logout-button">Go Back</button>
        </div>
    );
}

function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('Chemistry');
    const topics = ['Chemistry', 'Biology', 'Physics', 'Mathematics'];
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email) {
            alert('Please enter an email address.');
            return;
        }
        onLogin(email, topic);
    };
    return (
        <div className="login-card">
            <div className="header">
                <h1>Flashcards</h1>
                <p>Select a topic to start learning</p>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </div>
                <div className="input-group">
                    <label htmlFor="topic">Choose a Topic</label>
                    <select id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
                <div>
                    <button type="submit" className="submit-button">Start Learning</button>
                </div>
            </form>
        </div>
    );
}

function App() {
    const [page, setPage] = useState('login');
    const [userEmail, setUserEmail] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [finalScore, setFinalScore] = useState(0);

    const handleLogin = (email, topic) => {
        setUserEmail(email);
        setSelectedTopic(topic);
        setPage('flashcards');
    };
    const handleStartQuiz = () => {
        setPage('quiz');
    };
    const handleFinishQuiz = (score) => {
        setFinalScore(score);
        setPage('results');
    };
    const handleLogout = () => {
        setPage('login');
        setUserEmail('');
        setSelectedTopic('');
    };

    const renderPage = () => {
        if (page === 'quiz') {
            return <QuizPage topic={selectedTopic} onFinishQuiz={handleFinishQuiz} />;
        }
        if (page === 'flashcards') {
            return <FlashcardPage email={userEmail} topic={selectedTopic} onStartQuiz={handleStartQuiz} onLogout={handleLogout} />;
        }
        if (page === 'results') {
            // Assuming 10 questions for now, you can make this dynamic later
            return <ResultsPage score={finalScore} totalQuestions={10} onRestart={handleStartQuiz} onBackToMenu={handleLogout} />;
        }
        return <LoginPage onLogin={handleLogin} />;
    }

    return (
        <main className="app-container">
            {renderPage()}
        </main>
    );
}

export default App;

