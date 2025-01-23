import {ContributorsModel} from './Contributors/Contributors';
import {CustomExtendedFeaturesModel} from './CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeaderModel} from './CustomHeader/CustomHeader';
import {ExamplesModel} from './Examples/Examples';
import {GithubStarsModel} from './GithubStarsBlock/GithubStarsBlock';
import {IframeModel} from './IFrameBlock/IFrameBlock';
import {LibrariesModel} from './Libraries/Libraries';
import {RoadmapModel} from './RoadmapBlock/RoadmapBlock';
import {TemplatesModel} from './TemplatesBlock/TemplatesBlock';

export type CustomBlockModel =
    | CustomHeaderModel
    | CustomExtendedFeaturesModel
    | LibrariesModel
    | ExamplesModel
    | RoadmapModel
    | TemplatesModel
    | GithubStarsModel
    | ContributorsModel
    | IframeModel;
