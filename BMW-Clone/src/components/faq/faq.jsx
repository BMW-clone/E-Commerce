import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../faq/faq.css'

const FAQContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
    gap: '10px',
  justifyContent: 'space-between',
  marginBottom: theme => theme.spacing(2),
});

const FAQAccordion = styled(Accordion)({
  width: '45%',borderBottom: `2px solid #fff`,
});

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <FAQContainer>
        {/* Left-side FAQs */}
        
        <FAQAccordion
          expanded={expanded === 'panel1'}
          onChange={handleAccordionChange('panel1')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="body1">Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Answer 1</Typography>
          </AccordionDetails>
        </FAQAccordion>

        <FAQAccordion
          expanded={expanded === 'panel2'}
          onChange={handleAccordionChange('panel2')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography variant="body1">Question 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Answer 2</Typography>
          </AccordionDetails>
        </FAQAccordion>

        <FAQAccordion
          expanded={expanded === 'panel3'}
          onChange={handleAccordionChange('panel3')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
            <Typography variant="body1">Question 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Answer 3</Typography>
          </AccordionDetails>
        </FAQAccordion>

        
        <FAQAccordion
          expanded={expanded === 'panel4'}
          onChange={handleAccordionChange('panel4')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
            <Typography variant="body1">Question 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Answer 4</Typography>
          </AccordionDetails>
        </FAQAccordion>

        <FAQAccordion
          expanded={expanded === 'panel5'}
          onChange={handleAccordionChange('panel5')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
            <Typography variant="body1">Question 5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Answer 5</Typography>
          </AccordionDetails>
        </FAQAccordion>

        <FAQAccordion
          expanded={expanded === 'panel6'}
          onChange={handleAccordionChange('panel6')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
            <Typography variant="body1">Question 6</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Answer 6</Typography>
          </AccordionDetails>
        </FAQAccordion>
      
       
        
        {/* Right-side FAQs */}
 
      </FAQContainer>
    </div>
  );
};

export default FAQSection;
