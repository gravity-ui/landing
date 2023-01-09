import {CustomBannerModel} from './CustomBanner/CustomBanner';
import {CustomExtendedFeaturesModel} from './CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeaderModel} from './CustomHeader/CustomHeader';

export type CustomBlockModel = CustomHeaderModel | CustomExtendedFeaturesModel | CustomBannerModel;
