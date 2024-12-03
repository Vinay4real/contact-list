import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import ContactDetails from "./components/ContactDetails";
import contactsData from "./data/contacts.json";
import { Container } from "@mui/material";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (filters) => {
    const filteredContacts = contactsData.filter((contact) => {
      return (
        (!filters.firstName ||
          contact.firstName
            .toLowerCase()
            .includes(filters.firstName.toLowerCase())) &&
        (!filters.lastName ||
          contact.lastName
            .toLowerCase()
            .includes(filters.lastName.toLowerCase())) &&
        (!filters.dob || contact.dob === filters.dob) &&
        (!filters.email ||
          contact.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.phone || contact.phone.includes(filters.phone)) &&
        (!filters.address ||
          contact.address
            .toLowerCase()
            .includes(filters.address.toLowerCase())) &&
        (!filters.city ||
          contact.city.toLowerCase().includes(filters.city.toLowerCase())) &&
        (!filters.state ||
          contact.state.toLowerCase() === filters.state.toLowerCase()) &&
        (!filters.zip || contact.zip.includes(filters.zip))
      );
    });
    setContacts(filteredContacts);
  };

  const handleClear = () => {
    setContacts([]);
    setSelectedContact(null);
  };

  return (
    <Container>
      <h1>Contact Search</h1>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      {contacts.length > 0 && (
        <ResultsTable contacts={contacts} onSelect={setSelectedContact} />
      )}
      {selectedContact && <ContactDetails contact={selectedContact} />}
    </Container>
  );
};

export default App;
