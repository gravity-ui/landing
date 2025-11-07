import TimeAgo from 'javascript-time-ago';
import de from 'javascript-time-ago/locale/de.json';
import en from 'javascript-time-ago/locale/en.json';
import es from 'javascript-time-ago/locale/es.json';
import fr from 'javascript-time-ago/locale/fr.json';
import ko from 'javascript-time-ago/locale/ko.json';
import ru from 'javascript-time-ago/locale/ru.json';
import zh from 'javascript-time-ago/locale/zh.json';

export const initTimeAgo = () => {
    TimeAgo.addDefaultLocale(en);
    TimeAgo.addLocale(ru);
    TimeAgo.addLocale(es);
    TimeAgo.addLocale(zh);
    TimeAgo.addLocale(fr);
    TimeAgo.addLocale(de);
    TimeAgo.addLocale(ko);
};
