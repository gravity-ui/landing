import {dateComponents} from './date-components';
import {navigationComponents} from './navigation';
import type {Lib} from './types';
import {uikit} from './uikit';

export type {SandboxType, SandboxProps, Component} from './types';

export const libs: Lib[] = [uikit, dateComponents, navigationComponents];
