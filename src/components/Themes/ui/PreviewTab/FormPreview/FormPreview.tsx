import {FormRow} from '@gravity-ui/components';
import {ArrowLeft} from '@gravity-ui/icons';
import {Button, Flex, Icon, Select, Text, TextArea} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../../utils';
import {labels, projects, users} from '../constants';

import './FormPreview.scss';

const b = block('form-preview');

export const FormPreview = ({justify}: {justify: string}) => {
    return (
        <Flex direction="column" alignItems={justify} gap={4} className={b()}>
            <Button view="flat">
                <Icon data={ArrowLeft} />
                <Text variant="body-1">Go back</Text>
            </Button>
            <Text variant="header-1">User edit</Text>
            <Flex direction="column" className={b('wrapper')}>
                <FormRow required direction="row" fieldId="user" label="User">
                    <Select
                        width="max"
                        name="user"
                        id="user"
                        placeholder="Choose from the list"
                        options={users.map((pr) => ({
                            value: pr,
                            content: pr,
                        }))}
                    />
                </FormRow>
                <FormRow required direction="row" fieldId="project" label="Project">
                    <Flex gap={2} alignItems="center">
                        <Select
                            name="project"
                            id="project"
                            width="max"
                            placeholder="Choose from the list"
                            options={projects.map((pr) => ({
                                value: pr,
                                content: pr,
                            }))}
                        />
                        <Text variant="body-1">or</Text>
                        <Button view="normal" onClick={() => {}}>
                            Create new
                        </Button>
                    </Flex>
                </FormRow>
                <FormRow required direction="row" fieldId="status" label="Status">
                    <Select
                        name="status"
                        width="max"
                        placeholder="Choose from the list"
                        options={labels.map((label) => ({
                            value: label.title,
                            content: label.title,
                        }))}
                    />
                </FormRow>
                <FormRow direction="row" fieldId="comment" label="Comment (optional)">
                    <TextArea
                        name="comment"
                        id="comment"
                        placeholder="Type something"
                        minRows={6}
                    />
                </FormRow>
            </Flex>
            <Flex gap={4}>
                <Button view="action">Save</Button>

                <Button view="flat">Cancel</Button>
            </Flex>
        </Flex>
    );
};
