const fs = require("fs");
const filePath = "./savedContacts.json";

//function to load contacts
const loadContacts = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const saveContacts = (contacts) => {
    const data = JSON.stringify(contacts);
    fs.writeFileSync(filePath, data);
};

//function to add contacts
const addContacts = (title, contactNo) => {
    const contacts = loadContacts();

    if (!title || !contactNo) {
        console.log("Please enter valid Name or Contacts.");
        return;
    }

    contacts.push({ title, contactNo });
    saveContacts(contacts);
    console.log(`${title} has been saved as new contact.`);
};

//function to list contacts
const listContacts = () => {
    const contacts = loadContacts();

    if (contacts.length === 0) {
        console.log("Contact List is empty.");
        return;
    }

    console.log("Your Contacts:");
    contacts.forEach((contact) => {
        console.log(`${contact.title} - ${contact.contactNo}`);
    });
};

//function to remove the contacts
const removeContacts = (title) => {
    const contacts = loadContacts();

    const updatedContacts = contacts.filter((contact) => {
        return contact.title != title;
    });

    if (updatedContacts.length < contacts.length) {
        saveContacts(updatedContacts);
        console.log(`${title} has been removed from the Contact List.`);
    }
};

//Handle CLI commands
const [, , command, title, contactNo] = process.argv;

switch (command) {
    case "add":
        addContacts(title, contactNo);
        break;
    case "list":
        listContacts();
        break;
    case "remove":
        removeContacts(title);
        break;
    default:
        console.log(
            "⚠️ Command not recognized. Try 'add', 'remove' or 'list'."
        );
        break;
}
