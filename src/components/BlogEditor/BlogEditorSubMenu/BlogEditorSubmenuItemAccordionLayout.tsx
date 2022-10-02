import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import { useContext } from "react";
import { UiParamsContext } from "../../../models/context/UiParams/lib";
import { BlogEditorSubmenuFileAccordionKeyValues } from "./types";

export type BlogEditorSubmenuItemAccordionLayoutProps = {
    index: number,
    title: string,
    titleHeight: number,
    detailHeight: number,
    width: number,
    isShown: boolean,
    updateIsShown: () => void,
}

export const BlogEditorSubmenuItemAccordionLayout = ({ props, children }: { props: BlogEditorSubmenuItemAccordionLayoutProps, children: React.ReactNode }) => {
    const { title, titleHeight, detailHeight, width, isShown, updateIsShown } = props;
    const { FontSize, Palette } = useContext(UiParamsContext);
    const accordionSx: SxProps<Theme> = {
        padding: 0,
        margin: 0,
        boxShadow: "none",
        '&:not(:last-child)': {
          border: "none",
        },
        '&:before': {
          display: 'none',
        },
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
    }
    const summarySx: SxProps<Theme> = {
        width, 
        height: titleHeight, 
        bgcolor: Palette.Background.Dark,
        margin: 0,
        padding: 0,
        paddingLeft: 2,
        paddingRight: 2,
        minHeight: 0,
    }
    const contentSx: SxProps<Theme> = {
        width,
        height: detailHeight,
        padding: 0,
        margin: 0,
        overflow: "scroll",
    }
    const onChangeHandler = () => updateIsShown();
    if (title == BlogEditorSubmenuFileAccordionKeyValues.Blogs) {
        const fixSummarySx: SxProps<Theme> = {
            ...summarySx,
            bgcolor: Palette.Background.Darker
        }
        return (
            <Accordion sx={accordionSx} expanded={true} disableGutters elevation={0}>
                <AccordionSummary aria-controls="panel-content" sx={fixSummarySx}>
                    <Typography fontSize={FontSize.Small} fontWeight="bold">
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={contentSx}>
                    {children}
                </AccordionDetails>
            </Accordion>
        );
    }
    return (
        <Accordion sx={accordionSx} expanded={isShown} onChange={onChangeHandler} disableGutters elevation={0}>
            <AccordionSummary aria-controls="panel-content" sx={summarySx}
                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.7rem' }} />}>
                <Typography fontSize={FontSize.Small} fontWeight="bold">
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={contentSx}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}