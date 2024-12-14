import {Magnifier} from '@gravity-ui/icons';
import {Footer} from '@gravity-ui/navigation';
import {Flex, Icon, Tabs, TextInput, ThemeProvider, User} from '@gravity-ui/uikit';

import {TaskDetails} from '../components/TaskDetails';
import {TasksList} from '../components/TasksList';

import './TaskTrackerPage.scss';

export function TaskTrackerPage() {
    // TODO: width - для имплементации Resize
    return (
        <ThemeProvider theme="light">
            <div className="task-tracker-page">
                <div className="task-tracker-header">
                    <Flex justifyContent="space-between" className="task-tracker-header-top">
                        <User
                            size="m"
                            name="Blake's Tasks - Apollo Enterprises"
                            avatar={{
                                imgUrl: 'https://loremflickr.com/640/480/cats?lock=8610182282084352',
                            }}
                        />
                        <div>
                            <TextInput
                                size="m"
                                placeholder="Search"
                                startContent={
                                    <Icon
                                        className="task-tracker-header-search-icon"
                                        data={Magnifier}
                                    />
                                }
                            />
                        </div>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Tabs size="m" activeTab="list">
                            <Tabs.Item onClick={() => {}} id="list" counter={25} title="List" />
                            <Tabs.Item
                                onClick={() => {}}
                                id="calendar"
                                counter={2}
                                title="Calendar"
                            />
                            <Tabs.Item onClick={() => {}} id="files" counter={200} title="Files" />
                        </Tabs>
                    </Flex>
                </div>
                <div className="task-tracker-body">
                    <div style={{width: '50%'}}>
                        <TasksList />
                    </div>
                    <div style={{width: '50%'}}>
                        <TaskDetails />
                    </div>
                </div>
                <Footer
                    menuItems={[{text: 'Privacy Policy'}, {text: 'Terms of Use'}]}
                    copyright="© 2011—2024 Copyrite"
                />
            </div>
        </ThemeProvider>
    );
}
