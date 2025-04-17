import {Divider} from '@gravity-ui/uikit';
import {useCallback, useState} from 'react';
import {block} from 'src/utils';

import {CurrentEmail} from '../CurrentEmail/CurrentEmail';
import {EmailList} from '../EmailList/EmailList';
import {Navigation} from '../Navigation/Navigation';
import {getBlockName} from '../cn';
import {ACCOUNT_LIST, MAILBOX_FOLDER_LIST, MAIL_DATA} from '../mock-data';

import './Mail.scss';

const b = block(getBlockName('mail'));

export const Mail = () => {
    const [selectedAccount, setSelectedAccount] = useState([ACCOUNT_LIST[0]]);
    const [selectedFolder, setSelectedFolder] = useState(MAILBOX_FOLDER_LIST[0].id);
    const [selectedEmail, setSelectedEmail] = useState(MAIL_DATA[selectedAccount[0]][0]);

    const handleAccountChange = useCallback((newAccount: string[]) => {
        setSelectedAccount(newAccount);
        setSelectedFolder(MAILBOX_FOLDER_LIST[0].id);
        setSelectedEmail(MAIL_DATA[newAccount[0]][0]);
    }, []);
    return (
        <div className={b()}>
            <Navigation
                accounts={ACCOUNT_LIST}
                onUpdateAccount={handleAccountChange}
                onUpdateFolder={setSelectedFolder}
                selectedAccount={selectedAccount}
                selectedFolder={selectedFolder}
            />
            <Divider orientation="vertical" />
            <EmailList
                emailList={MAIL_DATA[selectedAccount[0]]}
                onItemClick={setSelectedEmail}
                selectedFolder={selectedFolder}
                selectedEmailId={selectedEmail.id}
            />
            <Divider orientation="vertical" />
            <CurrentEmail {...selectedEmail} />
        </div>
    );
};
