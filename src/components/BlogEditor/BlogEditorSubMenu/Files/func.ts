import { BlogEditorSubmenuAccordionKeyValues, BlogEditorSubmenuAccordionType } from "../types";
import { BlogEditorSubmenuFileAccordionApperance } from "./type";


export type GetSubmenuFileAccordionContentHeightProps = {
    itemHeight: number, 
    heights: Array<number>,
    entireHeight: number
}

export const GetSubmenuFileDefaultAccordions = (props: GetSubmenuFileAccordionContentHeightProps) => {
    const { itemHeight, heights, entireHeight } = props;
    const defaultSettings: Array<BlogEditorSubmenuFileAccordionApperance> = [
        GetDefaultAccordion(BlogEditorSubmenuAccordionKeyValues.FilesSearch, itemHeight * 2, false),
        GetDefaultAccordion(BlogEditorSubmenuAccordionKeyValues.FilesHistory, itemHeight * 3, false),
        GetDefaultAccordion(BlogEditorSubmenuAccordionKeyValues.FilesTags, itemHeight * 4, false),
        GetDefaultAccordion(BlogEditorSubmenuAccordionKeyValues.FilesBlogs, 0, true),
    ];
    const indexOfFiles = defaultSettings.map(x => x.type).indexOf(BlogEditorSubmenuAccordionKeyValues.FilesBlogs);
    const otherHeight = heights.length > 0 ? 
        heights.filter((x, i) => i !== indexOfFiles).reduce((a, b) => a + b) : 
        defaultSettings
            .filter(x => x.isShown)
            .map(x => x.height)
            .filter((x, i) => i !== indexOfFiles).reduce((a, b) => a + b);
    const tabHeights = itemHeight * defaultSettings.length;
    defaultSettings[indexOfFiles].height = entireHeight - otherHeight - tabHeights;
    return defaultSettings;
}

export type GetSubmenuAccordionBlogsHeightProps = {
    isShowns: Array<boolean>,
    heights: Array<number>,
    types: Array<BlogEditorSubmenuAccordionType>,
    entireHeight: number,
    itemHeight: number,
}

export const GetSubmenuAccordionBlogsHeight = (props: GetSubmenuAccordionBlogsHeightProps): number => {
    const { types, isShowns, heights, entireHeight, itemHeight } = props;
    const index = types.indexOf(BlogEditorSubmenuAccordionKeyValues.FilesBlogs);
    var currentHeight = 0;
    isShowns.forEach((x, i) => {
        if (x === true && i !== index) {
            currentHeight += heights[i];
        }
    });
    return entireHeight - isShowns.length * itemHeight - currentHeight - 10;
}

const GetDefaultAccordion = (type: BlogEditorSubmenuAccordionType, height: number, isShown: boolean): BlogEditorSubmenuFileAccordionApperance => {
    return {
        isShown,
        type,
        height,
    };
}
