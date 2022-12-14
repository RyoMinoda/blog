import { BlogObj } from "../../../models/state/Blog/obj";
import { BlogComponentListItemObj, BlogComponentListObj } from "../../../models/state/BlogComponent/obj";
import { BlogListObj } from "../../../models/state/BlogList/obj";
import { BlogTagListObj } from "../../../models/state/BlogTag/obj";
import { MousePosition } from "../../../models/utils/MousePosition/type";
import { BlogEditorDialogType } from "../../../organizations/BlogEditor/type";
import { StorageOperationType } from "../../../utils/StorageOperation";
import { BlogEditorModeType } from "../type";

export const BlogEditorSubmenuSearchGenreKeyValues = {
    Title: "Title",
    Tag: "Tag",
    Article: "Article"
} as const;

export type BlogEditorSubmenuSearchGenreType = typeof BlogEditorSubmenuSearchGenreKeyValues[keyof typeof BlogEditorSubmenuSearchGenreKeyValues];

export const BlogEditorSubmenuAccordionKeyValues = {
    FilesSearch: "Search",
    FilesTags: "Tags",
    FilesHistory: "History",
    FilesBlogs: "Blogs",
    PropertyTitle: "Title",
    PropertyDetail: "Detail",
    PropertyThumbnail: "Thumbnail",
    PropertyTags: "Tags",
    PropertyOthers: "Others",
    ComponentMenu: "Menu",
    ComponentList: "List",
    ComponentProperty: "Property"
} as const;

export type BlogEditorSubmenuAccordionType = typeof BlogEditorSubmenuAccordionKeyValues[keyof typeof BlogEditorSubmenuAccordionKeyValues];

export type BlogEditorSubmenuItemProps = {
    Blog: BlogObj,
    BlogList: BlogListObj,
    BlogTagList: BlogTagListObj,
    BlogEditHistoryList: BlogListObj,
    BlogComponentList: BlogComponentListObj,
    width: number,
    height: number,
    modeType: BlogEditorModeType,
    mousePosition: MousePosition,
    searchInput: string,
    activeSearchGenre: BlogEditorSubmenuSearchGenreType,
    activeAccordions: Array<BlogEditorSubmenuAccordionType>,
    activeTagIdList: Array<string>,
    accordionTitleHeight: number,
    updateSubWindowWidth: () => void,
    updateActiveTagIdList: (tags: Array<string>) => void,
    updateActiveSearchGenre: (genre: BlogEditorSubmenuSearchGenreType) => void,
    updateSearchInput: (input: string) => void,
    updateActiveAccordions: (accirdions: Array<BlogEditorSubmenuAccordionType>) => void,
    updateBlog: (blog: BlogObj) => void,
    showDialog: (type: BlogEditorDialogType) => void,
    updateBlogComponentList: (componentItem: BlogComponentListItemObj, operation: StorageOperationType) => void,
}

