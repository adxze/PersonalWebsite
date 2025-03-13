// hooks/useTypewriter.js
import { useState, useEffect } from 'react';

const useTypewriter = (texts = [], typingSpeed = 150, pauseDuration = 1500, deletingSpeed = 75) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let timer;
        const currentText = texts[loopNum % texts.length];

        const handleTyping = () => {
            setText((prev) =>
                isDeleting ? currentText.substring(0, prev.length - 1) : currentText.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === currentText) {
                timer = setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
            }

            timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        };

        timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, texts, typingSpeed, pauseDuration, deletingSpeed]);

    return text;
};

export default useTypewriter;
