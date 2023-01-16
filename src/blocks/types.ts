import {CustomBannerModel} from './CustomBanner/CustomBanner';
import {CustomExtendedFeaturesModel} from './CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeaderModel} from './CustomHeader/CustomHeader';
import {ExamplesModel} from './Examples/Examples';

export type CustomBlockModel =
    | CustomHeaderModel
    | CustomExtendedFeaturesModel
    | CustomBannerModel
    | ExamplesModel;
