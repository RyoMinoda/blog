import { Box, Grid, Paper, Skeleton, SxProps, Theme, Typography } from "@mui/material"
import { useContext } from "react";
import { UiParamsContext } from "../../../../models/context/UiParams/lib"
import { BlogObj } from "../../../../models/state/Blog/obj";
import { MousePosition } from "../../../../models/utils/MousePosition/type";
import { BlogEditorComponentArrangementMain, BlogEditorComponentArrangementMainProps } from "./BlogEditorComponentArrangementMain";
import { BlogEditorComponentArrangementMenu, BlogEditorComponentArrangementMenuProps } from "./BlogEditorComponentArrangementMenu";

export type BlogEditorComponentArrangementProps = {
    width: number,
    height: number,
    currentPage: number,
    Blog: BlogObj,
    canUpdateComponentWindowWidth: boolean,
    isPositionMode: boolean,
    mousePosition: MousePosition,
    updateCurrentPage: (page: number) => void,
    updateIsPositionMode: (bool: boolean) => void,
}

export const BlogEditorComponentArrangement = ({ props }: { props: BlogEditorComponentArrangementProps }) => {
    const { width, height, currentPage, Blog, updateCurrentPage, canUpdateComponentWindowWidth } = props;
    const outerSx: SxProps<Theme> = {
        width, height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const menuHeight = 70;
    const mainHeight = height - menuHeight;

    const mainProps: BlogEditorComponentArrangementMainProps = {
        ...props,
        height: mainHeight,
        isActiveArrangementBackground: !canUpdateComponentWindowWidth
    }
    const menuProps: BlogEditorComponentArrangementMenuProps = {
        height: menuHeight,
        width, currentPage, Blog,
        updateCurrentPage
    }
    const skeltonSx: SxProps<Theme> = {
        width, height,
    }
    const Component = !canUpdateComponentWindowWidth ? (
        <Grid container>
            <Grid item>
                <BlogEditorComponentArrangementMain props={mainProps} />
            </Grid>
            <Grid item>
                <BlogEditorComponentArrangementMenu props={menuProps} />
            </Grid>
        </Grid>
    ) : <Box sx={skeltonSx} />
    return (
        <Box sx={outerSx}>
            {Component}
        </Box>
    );
}