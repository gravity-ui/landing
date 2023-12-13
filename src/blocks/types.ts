import {CustomBannerModel} from './CustomBanner/CustomBanner';
import {CustomExtendedFeaturesModel} from './CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeaderModel} from './CustomHeader/CustomHeader';
import {ExamplesModel} from './Examples/Examples';
import {RoadmapModel} from './RoadmapBlock/RoadmapBlock';
import {TemplatesModel} from './TemplatesBlock/TemplatesBlock';

export type CustomBlockModel =
    | CustomHeaderModel
    | CustomExtendedFeaturesModel
    | CustomBannerModel
    | ExamplesModel
    | RoadmapModel
    | TemplatesModel;
