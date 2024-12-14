import {Tabs} from '@gravity-ui/uikit';

import './TasksListTabs.scss';

export function TasksListTabs() {
    return (
        <div className="task-list-tabs">
            <Tabs activeTab="active">
                <Tabs.Item id="active" onClick={() => {}} title="Active" counter={25} />
                <Tabs.Item id="closed" onClick={() => {}} title="Closed" counter={2} />
            </Tabs>
        </div>
    );
}
