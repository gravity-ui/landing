import React from 'react';

export const useGravityAnimation = () => {
    React.useEffect(() => {
        const wordTriggers = [
            'gravity',
            'пкфмшен', // mapping for RU keyboard
        ];

        const typingDebounceTime = 1_500;
        const animatedClassName = 'g-fun-gravity';

        let lastTypingTime = 0;
        let typedString = '';

        const handleTypeGravity = (event: KeyboardEvent) => {
            if (lastTypingTime && Date.now() - lastTypingTime >= typingDebounceTime) {
                lastTypingTime = Date.now();
                typedString = '';
            } else {
                lastTypingTime = Date.now();
            }

            if (wordTriggers?.some((word) => word.includes(event.key.toLowerCase()))) {
                typedString += event.key.toLowerCase();
            }

            const wordMatch = wordTriggers?.find((word) => word === typedString) || '';
            if (wordMatch) {
                document.querySelector('html')?.classList.toggle(animatedClassName);
                typedString = '';
                lastTypingTime = 0;
            } else if (typedString.length > wordTriggers[0]?.length) {
                typedString = '';
                lastTypingTime = 0;
            }
        };

        document.addEventListener('keydown', handleTypeGravity);

        return () => document.removeEventListener('keydown', handleTypeGravity);
    }, []);
};
