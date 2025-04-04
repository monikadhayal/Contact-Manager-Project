import DeleteIcon from "@mui/icons-material/Delete";

export default function ContactList(props) {
  const { contact, removeContact } = props;

  const contactList = contact.map((val) => {
    return (
      <div className=" border border-gray-300 rounded-lg flex flex-row justify-between mb-4 p-2 ">
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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5 ">
      <div className="w-full max-w-4xl bg-white p-6 mt-5 rounded-lg shadow-md">
        <div className="text-2xl font-bold  mb-4"> ContactList</div>
        <div> {contactList}</div>
      </div>
    </div>
  );
}
