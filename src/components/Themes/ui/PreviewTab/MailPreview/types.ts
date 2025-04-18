export type ItemForList = {
    title: string;
    icon: JSX.Element;
    count?: number;
    id: string;
};

export interface Email {
    id: string;
    fromEmail: string;
    fromTitle: string;
    subject: string;
    created: number;
    labels: string[];
    read: boolean;
    body: string;
    reply: string;
}

export interface Mailbox {
    [emailAddress: string]: Email[];
}
