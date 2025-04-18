import {File, Folder, LayoutTabs, TrashBin, Tray} from '@gravity-ui/icons';

import {ItemForList, Mailbox} from './types';

export const MAIL_DATA: Mailbox = {
    'Emily Johnson': [
        {
            id: 'A1B',
            fromEmail: 'hr@companyx.com',
            fromTitle: 'Company X HR',
            subject: 'Job Offer: Marketing Coordinator',
            created: 3,
            labels: ['work'],
            read: false,
            body: 'Dear Emily, we are pleased to extend an employment offer for the position of Marketing Coordinator at Company X. Your skills in marketing and strategic thinking will be a valuable addition to our team. Please review the attached offer letter and let us know if you have any questions. We are excited about the possibility of you joining our team and contributing to our success. Please confirm your acceptance by responding to this email within five business days.\n\n\nBest regards,\nCompany X HR Team',
            reply: 'Dear Company X HR Team,\n\nThank you for offering me the position of Marketing Coordinator. I am honored to be considered for this role and am excited about the opportunity to work with your esteemed organization. I would like to review the offer further and will respond with my decision within the next few days.\n\n\nSincerely,\nEmily Johnson',
        },
        {
            id: 'C2D',
            fromEmail: 'events@conference2023.com',
            fromTitle: '2023 Conference Team',
            subject: 'Invitation to Annual Business Conference',
            created: 6,
            labels: ['meet', 'today'],
            read: true,
            body: 'Dear Emily, we are delighted to invite you to the Annual Business Conference 2023, where you will have the opportunity to network with leading professionals in your industry. The conference will feature keynote speakers from top companies and interactive workshops designed to enhance your professional skills. Secure your spot for this transformative event by registering early.\n\n\nSincerely,\nThe 2023 Conference Team',
            reply: 'Dear 2023 Conference Team,\n\nThank you for the invitation to the Annual Business Conference 2023. I am eager to attend and gain insights from the industry experts. Please send me any additional details regarding registration and the schedule of events.\n\n\nBest regards,\nEmily Johnson',
        },
        {
            id: 'E3F',
            fromEmail: 'newsletter@careerboost.com',
            fromTitle: 'Career Boost Newsletter',
            subject: 'Enhance Your Skills with Our New Courses',
            created: 12,
            labels: ['mailing', 'work', 'today'],
            read: false,
            body: 'Hello Emily, we are excited to present our latest online courses designed to advance your career. These courses cover a broad range of topics, including leadership, project management, and communication skills. Each course is crafted by industry experts to ensure that you gain the most relevant and practical skills.\n\n\nBest regards,\nCareer Boost Team',
            reply: 'Hello Career Boost Team,\n\nThank you for informing me about the new online courses. I am particularly interested in the project management track. Could you please send me more information on the enrollment process and course schedules?\n\n\nKind regards,\nEmily Johnson',
        },
        {
            id: 'G4H',
            fromEmail: 'hr@newventures.com',
            fromTitle: 'New Ventures HR',
            subject: 'Invitation to Interview',
            created: 8,
            labels: ['work'],
            read: true,
            body: 'Dear Emily, we would like to invite you for an interview for the Sales Manager position at New Ventures. We are impressed by your background and believe that you will be a great fit for our team. During the interview, you will meet with members of our senior management who will assess your skills and experience. Please let us know your availability for the interview.\n\n\nKind regards,\nNew Ventures HR Department',
            reply: 'Dear New Ventures HR Department,\n\nThank you for the invitation to interview for the Sales Manager position. I am available for an interview on any day next week. Please let me know a suitable time, and I will do my best to accommodate it.\n\n\nSincerely,\nEmily Johnson',
        },
        {
            id: 'I5J',
            fromEmail: 'team@businessmeet.com',
            fromTitle: 'BusinessMeet Team',
            subject: 'Weekly Team Meeting',
            created: 1,
            labels: ['meet', 'work'],
            read: false,
            body: 'Dear Team, this is a reminder for our weekly team meeting scheduled for tomorrow at 10:00 AM. Please ensure you have reviewed the agenda items and prepared any necessary updates. Your participation and input are vital to the success of our projects. Looking forward to our productive discussion.\n\n\nYours sincerely,\nBusinessMeet Team',
            reply: "Dear BusinessMeet Team,\n\nThank you for the meeting reminder. I have reviewed the agenda and prepared my updates. I look forward to participating in the discussion and contributing to our projects' success.\n\n\nBest regards,\nEmily Johnson",
        },
        {
            id: 'K6L',
            fromEmail: 'courses@professionaldev.com',
            fromTitle: 'Professional Development Courses',
            subject: 'Expand Your Knowledge with New Courses',
            created: 18,
            labels: ['mailing'],
            read: true,
            body: 'Dear Emily, we invite you to explore our new set of professional development courses designed to expand your knowledge and enhance your career opportunities. These courses are flexible and can be completed at your own pace. By investing in these opportunities, you are taking crucial steps toward career advancement.\n\n\nWarm regards,\nProfessional Development Team',
            reply: 'Dear Professional Development Team,\n\nThank you for providing information on the new professional development courses. I am keen to learn more, particularly about the online learning options. Please share any additional material you have.\n\n\nKind regards,\nEmily Johnson',
        },
        {
            id: 'M7N',
            fromEmail: 'notification@projecttool.com',
            fromTitle: 'Project Management Tool',
            subject: 'Project Update Required',
            created: 4,
            labels: ['work', 'meet', 'today'],
            read: false,
            body: 'Dear Emily, we would like to remind you that a project update is required by the end of today. Please ensure you have reviewed all project deliverables and that your status is up to date. This information is critical for the successful completion of the project. Let us know if you have any questions or need further assistance.\n\n\nBest regards,\nProject Management Tool Team',
            reply: 'Dear Project Management Tool Team,\n\nThank you for the reminder. I have reviewed all deliverables and updated my project status accordingly. Please inform me if there are any other actions required from my side.\n\n\nSincerely,\nEmily Johnson',
        },
        {
            id: 'O8P',
            fromEmail: 'jobs@innovativetech.com',
            fromTitle: 'Innovative Tech HR',
            subject: 'Career Opportunity: Product Analyst',
            created: 10,
            labels: ['work'],
            read: true,
            body: 'Dear Emily, Innovative Tech is thrilled to offer you a career opportunity as a Product Analyst. We believe that your analytical skills and attention to detail will contribute significantly to our product development process. Please find the job offer attached and reach out with any questions you might have.\n\n\nBest wishes,\nInnovative Tech HR Team',
            reply: 'Dear Innovative Tech HR Team,\n\nThank you for the offer for the Product Analyst position. I am excited about this opportunity and appreciate your confidence in my abilities. I will review the offer and contact you should I have any questions. \n\n\nBest regards,\nEmily Johnson',
        },
    ],
    'Michael Smith': [
        {
            id: 'Q9R',
            fromEmail: 'events@conference2023.com',
            fromTitle: '2023 Conference Team',
            subject: 'Secure Your Spot at the Business Leaders Conference',
            created: 5,
            labels: ['meet', 'today'],
            read: false,
            body: "Dear Michael, we are pleased to offer you the opportunity to secure your spot at this year's Business Leaders Conference. This exclusive event will include sessions with industry-leading professionals and a range of networking activities. Reserve your seat today and don't miss this unique event, especially catered for ambitious professionals eager to expand their networks and knowledge.\n\n\nSincerely,\nConference 2023 Team",
            reply: 'Dear Conference 2023 Team,\n\nThank you for the invitation to the Business Leaders Conference. I am interested in attending and would like to receive further details regarding the event schedule and registration process.\n\n\nBest regards,\nMichael Smith',
        },
        {
            id: 'S0T',
            fromEmail: 'courses@learninghub.com',
            fromTitle: 'Learning Hub',
            subject: 'New Leadership Training Available',
            created: 11,
            labels: ['mailing'],
            read: true,
            body: 'Hello Michael, we are excited to announce our new series of leadership training courses designed to enhance your managerial skills and boost your career prospects. These courses have been developed by renowned experts and offer in-depth knowledge through interactive sessions and practical exercises.\n\n\nWarm regards,\nLearning Hub Team',
            reply: 'Hello Learning Hub Team,\n\nThank you for notifying me of the new leadership training courses. I am eager to further develop my managerial skills. Please send me additional information about course content and enrollment procedures.\n\n\nSincerely,\nMichael Smith',
        },
        {
            id: 'U1V',
            fromEmail: 'hr@techfuture.com',
            fromTitle: 'Tech Future HR',
            subject: 'Job Offer: Software Developer',
            created: 2,
            labels: ['work', 'today', 'mailing'],
            read: false,
            body: 'Dear Michael, we are thrilled to extend to you an offer to join our team as a Software Developer at Tech Future. Your background and technical expertise stood out during the interview process, and we believe you will make a valuable contribution to our projects. Please review the job offer attached and reach out if you have any questions. We look forward to having you on our team.\n\n\nBest regards,\nTech Future HR Department',
            reply: 'Dear Tech Future HR Department,\n\nThank you for considering me for the Software Developer position. I am reviewing the details of the offer and will respond with my decision shortly. I appreciate this opportunity to potentially work with Tech Future.\n\n\nKind regards,\nMichael Smith',
        },
        {
            id: 'W2X',
            fromEmail: 'team@organizationplus.com',
            fromTitle: 'Organization Plus',
            subject: 'Monthly Strategy Meeting',
            created: 7,
            labels: ['meet', 'work', 'today'],
            read: true,
            body: 'Dear Team, as part of our efforts to stay aligned with our strategic objectives, we have scheduled our monthly strategy meeting for next week. Please prepare your department reports and come ready to discuss any challenges and potential innovations that could benefit our company. Your insights and contributions are invaluable.\n\n\nBest regards,\nOrganization Plus Management',
            reply: 'Dear Organization Plus Management,\n\nThank you for the notice regarding the monthly strategy meeting. I have noted the date and will come prepared with the necessary reports and analysis. Looking forward to contributing to our strategy discussions.\n\n\nSincerely,\nMichael Smith',
        },
        {
            id: 'Y3Z',
            fromEmail: 'info@careerpath.com',
            fromTitle: 'Career Path Info',
            subject: 'Personalized Career Growth Plans',
            created: 13,
            labels: ['mailing'],
            read: false,
            body: 'Dear Michael, embark on a journey of career growth by exploring our personalized growth plans. Designed for professionals like you, these plans offer valuable insights and strategies to accelerate your career progression.\n\n\nYours sincerely,\nCareer Path Team',
            reply: 'Dear Career Path Team,\n\nThank you for the information on personalized career growth plans. I am eager to learn more about how these plans can aid in my professional development. Please provide me with additional details.\n\n\nBest wishes,\nMichael Smith',
        },
        {
            id: 'A4b',
            fromEmail: 'updates@projectmanagement.com',
            fromTitle: 'Project Management Updates',
            subject: 'Project Milestones Review',
            created: 1,
            labels: ['work'],
            read: true,
            body: 'Dear Michael, ensure you are up to date with the recent project milestones as we prepare for our quarterly review. Your ability to meet deliverables contributes greatly to our success. Please submit any outstanding reports and analyses to the team lead by the end of the day.\n\n\nKind regards,\nProject Management Office',
            reply: 'Dear Project Management Office,\n\nI have reviewed the project milestones and submitted the required reports to the team lead. Please let me know if there are further actions required on my part for the upcoming review.\n\n\nBest regards,\nMichael Smith',
        },
        {
            id: 'C5d',
            fromEmail: 'hr@globalcorporate.com',
            fromTitle: 'Global Corporate HR',
            subject: 'Interview Request for Team Lead Position',
            created: 16,
            labels: ['work'],
            read: false,
            body: 'Dear Michael, Global Corporate would like to invite you for an interview for the Team Lead position. Your experience and leadership skills make you an excellent candidate for this role. Please confirm your availability for the interview sessions, which will be conducted next week. We look forward to our discussion.\n\n\nBest wishes,\nGlobal Corporate HR Team',
            reply: 'Dear Global Corporate HR Team,\n\nThank you for considering me for the Team Lead position. I am available for an interview next Tuesday or Wednesday. Please let me know which date works best for you.\n\n\nSincerely,\nMichael Smith',
        },
        {
            id: 'E6f',
            fromEmail: 'invite@networkingevents.com',
            fromTitle: 'Networking Events',
            subject: 'Meet Industry Experts at our Networking Event',
            created: 14,
            labels: ['meet'],
            read: true,
            body: 'Dear Michael, enhance your professional connections by attending our upcoming networking event. This is a fantastic opportunity to meet industry experts and gain insights into the latest trends and innovations. Ensure you register promptly to secure your spot.\n\n\nLooking forward to seeing you,\nNetworking Events Team',
            reply: 'Dear Networking Events Team,\n\nThank you for the invitation to your networking event. I am interested in attending and would appreciate more details on the event and registration process.\n\n\nBest regards,\nMichael Smith',
        },
    ],
    'Olivia Brown': [
        {
            id: 'G7h',
            fromEmail: 'workshops@industryleaders.com',
            fromTitle: 'Industry Leaders Workshops',
            subject: 'Join Our Upcoming Workshops',
            created: 9,
            labels: ['mailing', 'work', 'today'],
            read: false,
            body: 'Dear Olivia, take the opportunity to enhance your professional skills by joining one of our upcoming workshops, featuring leading industry experts. These workshops are crafted to address the current needs and challenges faced by professionals today. Transform your skills and drive your career forward by participating in our interactive sessions.\n\n\nBest regards,\nIndustry Leaders Workshops Team',
            reply: 'Dear Industry Leaders Workshops Team,\n\nThank you for the invitation to your workshops. I am eager to participate and learn from the industry experts. Please send me additional information on the registration process.\n\n\nSincerely,\nOlivia Brown',
        },
        {
            id: 'I8j',
            fromEmail: 'hr@leadingcompany.com',
            fromTitle: 'Leading Company HR',
            subject: 'Job Offer: Project Manager',
            created: 4,
            labels: ['work'],
            read: true,
            body: 'Dear Olivia, we are thrilled to present you with a job offer for the Project Manager position at Leading Company. Your leadership skills and proven track record in managing complex projects make you an ideal candidate for this role. We look forward to the possibility of your joining our dynamic team and making significant contributions to our projects.\n\n\nYours faithfully,\nHR Team, Leading Company',
            reply: 'Dear Leading Company HR Team,\n\nThank you for offering me the Project Manager position. I am enthusiastic about this opportunity and will review the job offer thoroughly. I will respond with my decision in the coming days.\n\n\nBest regards,\nOlivia Brown',
        },
        {
            id: 'K9l',
            fromEmail: 'team@workplaceconnect.com',
            fromTitle: 'Workplace Connect',
            subject: 'Monthly Team Sync-Up',
            created: 6,
            labels: ['meet', 'work', 'mailing'],
            read: false,
            body: 'Dear Team, please be reminded of our monthly team sync-up scheduled for this Thursday at 3 PM. This meeting serves as an opportunity to align on current projects, address outstanding issues, and brainstorm new solutions. Your participation is crucial for our continued success.\n\n\nBest wishes,\nWorkplace Connect Team',
            reply: 'Dear Workplace Connect Team,\n\nThank you for the meeting reminder. I have set aside the scheduled time and am prepared to discuss current projects and any challenges we may face.\n\n\nSincerely,\nOlivia Brown',
        },
        {
            id: 'M0n',
            fromEmail: 'hr@techinnovators.com',
            fromTitle: 'Tech Innovators HR',
            subject: 'Interview Invitation',
            created: 7,
            labels: ['work'],
            read: true,
            body: 'Dear Olivia, Tech Innovators would like to invite you for an interview for the Software Engineer position. We are impressed by your technical expertise and innovative approach to problem-solving. Please let us know your availability for an interview next week. We are eager to learn more about the contributions you will bring to our team.\n\n\nBest regards,\nTech Innovators HR Department',
            reply: 'Dear Tech Innovators HR Department,\n\nThank you for inviting me to interview for the Software Engineer position. I am available for an interview on Monday or Wednesday. Please let me know your preferred timing.\n\n\nSincerely,\nOlivia Brown',
        },
        {
            id: 'P1q',
            fromEmail: 'events@corporatesummit.com',
            fromTitle: 'Corporate Summit 2023',
            subject: 'Register Now for Corporate Summit 2023',
            created: 10,
            labels: ['meet', 'today'],
            read: false,
            body: "Dear Olivia, don't miss out on the chance to attend Corporate Summit 2023, the pinnacle of networking events for industry professionals. Gain insights from keynote speakers, participate in workshops, and expand your professional circle. Register today to secure your spot at this unmissable event. \n\n\nWarm regards,\nThe Corporate Summit Team",
            reply: 'Dear Corporate Summit Team,\n\nThank you for the opportunity to attend Corporate Summit 2023. I am very interested in participating and would like additional information regarding registration and event details.\n\n\nBest regards,\nOlivia Brown',
        },
        {
            id: 'R2s',
            fromEmail: 'info@coursesforyou.com',
            fromTitle: 'Courses For You',
            subject: 'Empower Your Career with New Skills',
            created: 3,
            labels: ['mailing'],
            read: true,
            body: 'Dear Olivia, empower your career by acquiring new skills from our comprehensive range of courses. With flexible scheduling and expert instructors, these courses are designed to fit into your busy lifestyle while providing maximum benefits. Take this opportunity to invest in your professional growth.\n\n\nKind regards,\nCourses For You Team',
            reply: 'Dear Courses For You Team,\n\nThank you for the information on your comprehensive range of courses. I am interested in the flexible scheduling options and would like to receive more details regarding the courses that suit my career objectives.\n\n\nSincerely,\nOlivia Brown',
        },
        {
            id: 'T3u',
            fromEmail: 'updates@productmanagement.com',
            fromTitle: 'Product Management Updates',
            subject: 'Action Required: Product Launch Details',
            created: 12,
            labels: ['work'],
            read: false,
            body: 'Dear Olivia, please review the latest updates regarding the upcoming product launch. We require your feedback on the proposed strategies and any suggestions for improvement. Your insights are invaluable to ensuring the success of our product launch.\n\n\nBest wishes,\nProduct Management Team',
            reply: 'Dear Product Management Team,\n\nI have reviewed the product launch details and will provide my feedback on the proposed strategies shortly. Please let me know if there are further areas that require my input.\n\n\nBest regards,\nOlivia Brown',
        },
        {
            id: 'W4x',
            fromEmail: 'networking@businesscircle.com',
            fromTitle: 'Business Circle',
            subject: 'Connect with Professionals at Our Event',
            created: 15,
            labels: ['meet'],
            read: true,
            body: 'Dear Olivia, we invite you to join our networking event to connect with like-minded professionals from diverse industries. This event is an excellent platform for sharing ideas, learning about new trends, and building your professional network.\n\n\nYours sincerely,\nBusiness Circle Team',
            reply: 'Dear Business Circle Team,\n\nThank you for inviting me to your networking event. I am looking forward to connecting with professionals from various industries and building valuable connections.\n\n\nKind regards,\nOlivia Brown',
        },
    ],
};

export const ACCOUNT_LIST = Object.keys(MAIL_DATA);

export const MAILBOX_FOLDER_LIST: ItemForList[] = [
    {title: 'Inbox', icon: <Tray />, id: 'Inbox'},
    {title: 'Draft', icon: <File />, id: 'Draft'},
    {title: 'Junk', icon: <Folder />, id: 'Junk'},
    {title: 'Archive', icon: <LayoutTabs />, id: 'Archive'},
    {title: 'Trash', icon: <TrashBin />, id: 'Trash'},
];

export const INBOX_LIST: ItemForList[] = [
    {title: 'Social', id: 'Social', icon: <Tray />, count: 12},
    {title: 'Inbox1', id: 'Inbox1', icon: <Tray />, count: 128},
    {title: 'Inbox2', id: 'Inbox2', icon: <Tray />, count: 43},
    {title: 'Inbox3', id: 'Inbox3', icon: <Tray />, count: 61},
    {title: 'Inbox4', id: 'Inbox4', icon: <Tray />, count: 79},
];
