import * as analyticsService from '../service/analyticsService.js';

export const GetAgricultureCommodities = async (req, res, next) => {
    try {

        const commodityTrendsData = await analyticsService.getAgricultureCommodities();
        res.status(200).json({ data: commodityTrendsData });
    } catch (err) {
        next(err);
    }
};
export const GetAnalytics = async (req, res, next) => {
    try {
        const analyticsData = await analyticsService.getAnalytics();
        res.status(200).json({ data: analyticsData });
    } catch (err) {
        next(err);
    }
};