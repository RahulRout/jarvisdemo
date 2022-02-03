import React, { useState } from "react";
import { Box, Avatar, Badge, Typography, Button } from "@mui/material";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { suggestions } from "../../Service/suggestions";
import "./Suggestion.css";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Suggestions = (props: any) => {
  return (
    <Box component="div" className="suggestioncontainer">
      <Typography
        variant="body1"
        color="#a6a5a4"
        style={{
          fontFamily: "cursive",
          fontWeight: "600",
          textAlign: "center",
          fontSize: "15px",
          // marginLeft: '150px',
          marginTop: "15px",
        }}
      >
        Suggestions
      </Typography>
      {suggestions.map((val: any) => {
        return (
          <Box className="avatar">
            <Box sx={{ display: "flex" }}>
              <Avatar
                style={{
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
              />
              <Typography
                variant="body1"
                color="#000"
                style={{
                  fontFamily: "cursive",
                  fontWeight: "inherit",
                  textAlign: "center",
                  marginLeft: "12px",
                  marginTop: "12px",
                }}
              >
                {val.username}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="#3b5998"
              style={{
                fontFamily: "inherit",
                fontWeight: "600",
                textAlign: "center",
                fontSize: "12px",
                marginTop: "15px",
              }}
            >
              Follow
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
