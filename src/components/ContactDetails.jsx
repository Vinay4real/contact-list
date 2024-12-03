import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ContactDetails = ({ contact }) => {
  if (!contact)
    return <Typography variant="h6">No contact selected.</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Selected Contact</Typography>
        <Typography>
          <strong>Name:</strong> {`${contact.firstName} ${contact.lastName}`}
        </Typography>
        <Typography>
          <strong>Email:</strong> {contact.email}
        </Typography>
        <Typography>
          <strong>Phone:</strong> {contact.phone}
        </Typography>
        <Typography>
          <strong>Address:</strong>{" "}
          {`${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContactDetails;
