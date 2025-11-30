import {ContributorsModel} from './Contributors/types';
import {CustomHeaderModel} from './CustomHeader/CustomHeader';
import {ExamplesModel} from './Examples/Examples';
import {GithubStarsModel} from './GithubStarsBlock/GithubStarsBlock';
import {IframeModel} from './IFrameBlock/IFrameBlock';
import {LibrariesModel} from './Libraries/Libraries';
import {RoadmapModel} from './RoadmapBlock/RoadmapBlock';
import {TemplatesModel} from './TemplatesBlock/TemplatesBlock';
import {UISamplesModel} from './UISamples/UISamples';

export type CustomBlockModel =
    | CustomHeaderModel
    | LibrariesModel
    | ExamplesModel
    | UISamplesModel
    | RoadmapModel
    | TemplatesModel
    | GithubStarsModel
    | ContributorsModel
    | IframeModel;
