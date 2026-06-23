import { useState, useEffect } from 'react';

export function useTypewriter(words, speed = 100) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleType = () => {
            const currentWord = words[wordIndex % words.length];
            setText(isDeleting
                ? currentWord.substring(0, text.length - 1)
                : currentWord.substring(0, text.length + 1)
            );

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex(wordIndex + 1);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, speed]);

    return text;
}