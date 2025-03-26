import DeleteIcon from "@mui/icons-material/Delete";

export default function ContactList(props) {
    const { contact, removeContact} = props
    console.log(contact)
  console.log(contact, "from contactList");
  const contactList = contact.map((val) => {
    return (
      <div className="border border-red-500 flex flex-row justify-between bg-red-200">
        <div> {val.data.name}</div>
        <div> {val.data.email}</div>
        <div> {val.data.Phonenumber}</div>
        <span onClick={() => removeContact(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });
  return (
    <div>
      <div className="font-semibold text-lg"> ContactList</div>
      <div> {contactList}</div>
    </div>
  );
}
