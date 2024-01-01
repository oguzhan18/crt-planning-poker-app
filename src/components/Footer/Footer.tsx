import { Divider, Link, Slide, Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
import React from "react";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Slide in={true} direction="up" timeout={3000}>
        <div className="FooterSection">
          <Divider variant="middle"></Divider>
          <div className="FooterContainer">
            <Divider orientation="vertical" flexItem></Divider>
            <div className="FooterItemContainer">
              <Typography color="textSecondary" variant="body2">
                <div>
                  {currentYear} &copy; Oğuzhan ÇART  | All Rights Reserved.
                </div>
              </Typography>
            </div>
            <Divider orientation="vertical" flexItem></Divider>
          </div>
        </div>
      </Slide>
    </footer>
  );
};
