import AccessDenied from '@gravity-ui/illustrations/AccessDenied';
import Bucket from '@gravity-ui/illustrations/Bucket';
import Chart from '@gravity-ui/illustrations/Chart';
import Database from '@gravity-ui/illustrations/Database';
import Detail from '@gravity-ui/illustrations/Detail';
import Disk from '@gravity-ui/illustrations/Disk';
import Feature from '@gravity-ui/illustrations/Feature';
import Folder from '@gravity-ui/illustrations/Folder';
import History from '@gravity-ui/illustrations/History';
import Identity from '@gravity-ui/illustrations/Identity';
import InternalError from '@gravity-ui/illustrations/InternalError';
import Network from '@gravity-ui/illustrations/Network';
import NoSearchResults from '@gravity-ui/illustrations/NoSearchResults';
import NotFound from '@gravity-ui/illustrations/NotFound';
import Project from '@gravity-ui/illustrations/Project';
import Queue from '@gravity-ui/illustrations/Queue';
import Snapshot from '@gravity-ui/illustrations/Snapshot';
import SuccessOperation from '@gravity-ui/illustrations/SuccessOperation';
import Template from '@gravity-ui/illustrations/Template';
import UnableToDisplay from '@gravity-ui/illustrations/UnableToDisplay';
import VirtualMachine from '@gravity-ui/illustrations/VirtualMachine';
import type {ComponentType, SVGProps} from 'react';

export const ILLUSTRATION_COMPONENTS: Array<ComponentType<SVGProps<SVGSVGElement>>> = [
    VirtualMachine,
    Database,
    NotFound,
    InternalError,
    Identity,
    Folder,
    AccessDenied,
    History,
    Project,
    Bucket,
    Template,
    Network,
    SuccessOperation,
    Disk,
    NoSearchResults,
    Detail,
    Queue,
    Feature,
    Chart,
    Snapshot,
    UnableToDisplay,
];
