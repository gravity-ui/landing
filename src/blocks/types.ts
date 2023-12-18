import {CustomExtendedFeaturesModel} from './CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeaderModel} from './CustomHeader/CustomHeader';
import {ExamplesModel} from './Examples/Examples';
import {RoadmapModel} from './RoadmapBlock/RoadmapBlock';
import {TemplatesModel} from './TemplatesBlock/TemplatesBlock';

export type CustomBlockModel =
    | CustomHeaderModel
    | CustomExtendedFeaturesModel
    | ExamplesModel
    | RoadmapModel
    | TemplatesModel;
