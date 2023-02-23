import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import { localLinks, overseasLinks } from "../footer-links";
import Link from "next/link";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export default function ReusableAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          <div className="topic"> Quick Local Links</div>
        </AccordionSummary>
        <AccordionDetails>
          {localLinks.map((localLink) => (
            <div key={localLink.route}>
              <Link href={localLink.route} className="link-decoration">
                {localLink.linkText}
              </Link>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="topic"> Quick Overseas Links</div>
        </AccordionSummary>
        <AccordionDetails>
          {overseasLinks.map((overseasLink) => (
            <div key={overseasLink.route}>
              <Link
                key={overseasLink.route}
                href={overseasLink.route}
                className="link-decoration"
              >
                {overseasLink.country} Food Reviews
              </Link>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div className="topic"> AudreyTheFoodie</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Link href={`/sitemap`} className="link-decoration">
              Site Map
            </Link>
          </div>
          <div>
            <a
              href="https://www.instagram.com/audrey_the_foodie/"
              className="link-decoration"
            >
              Instagram
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
