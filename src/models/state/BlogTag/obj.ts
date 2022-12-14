import { Uuid } from "../../../utils/Uuid";
import { ListItemObj, ListObj } from "../../utils/List/obj";
import { SearchConditionKeyValues, SearchConditionType } from "../../utils/List/type";
import { BlogTagItem, BlogTagList } from "./type";

export class BlogTagListObj extends ListObj<BlogTagItemObj> implements BlogTagList {
    constructor(items: Array<BlogTagItem>) {
        super(items);
    }

    public static create() {
        const newItem = new Array<BlogTagItem>();
        return new BlogTagListObj(newItem);
    }

    public static createByType(items: Array<BlogTagItem>) {
        return new BlogTagListObj(items);
    }

    public getTagNames() {
        return this.Items.map(x => x.Tag);
    }

    public getActiveTags(activeTagIds: Array<string>) {
        return this.Items.filter(x => activeTagIds.includes(x.Id))
    }

    public search(value: string, condition: SearchConditionType): Array<BlogTagItem> {
        if (value !== "") {
            switch (condition) {
                case SearchConditionKeyValues.PerfectMatching:
                    return this.Items.filter(x => x.Tag === value);
                case SearchConditionKeyValues.PrefixMatching:
                    return this.Items.filter(x => x.Tag.toLocaleUpperCase().startsWith(value.toLocaleUpperCase()));
            }
        }
        return this.Items;
    }

    public getActiveTagsText(activeTagIds: Array<string>) {
        const activeTags = this.getActiveTags(activeTagIds);
        if (activeTags.length === 0) return "";
        return activeTags.map(x => x.Tag).reduce((a, b) => a + "," + b)
    }
}

export class BlogTagItemObj extends ListItemObj implements BlogTagItem {
    Tag: string;
    IsFavorite: boolean;
    IsActive: boolean;

    constructor(id: string, tag: string, isFavorite: boolean, isActive: boolean) {
        super(id);
        this.Id = id;
        this.Tag = tag;
        this.IsFavorite = isFavorite;
        this.IsActive = isActive;
    }

    public static create() {
        const uuid = Uuid.new();
        return new BlogTagItemObj(uuid, "", false, true);
    }

    public static createByName(tag: string) {
        const uuid = Uuid.new();
        return new BlogTagItemObj(uuid, tag, false, true);
    }

    public static createByType(item: BlogTagItem): BlogTagItemObj {
        return new BlogTagItemObj(
            item.Id,
            item.Tag,
            item.IsActive,
            item.IsFavorite
        );
    }
}

