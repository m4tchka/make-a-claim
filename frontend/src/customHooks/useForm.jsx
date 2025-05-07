import { useState } from "react";
export default function useForm() {
    const [newEntry, setNewEntry] = useState({
        fName: "",
        sName:"",
        contactPhone:"",
        contactEmail:"",
        notes: "",

        accidentDate: "",
        accidentDescription:"",
        registration:"",
        make:"",
        model:"",
        year:"",

        otherContact:"",
        otherRegistration:"",
        keyId: Date.now(),
    });
    function changeFormName(newName) {
        setNewEntry({ ...newEntry, name: newName });
    }
    function changeFormNotes(newNotes) {
        setNewEntry({ ...newEntry, notes: newNotes });
    }
    function changeFormDate(accidentDate) {
        setNewEntry({...newEntry, accidentDate:accidentDate})
    }
    function clearFormEntry() {
        setNewEntry({
            name: "",
            notes: "",
            quantity: 0,
            keyId: Date.now(),
        });
    }
    return {
        newEntry,
        changeFormName,
        changeFormNotes,
        changeFormDate,
        clearFormEntry,
    };
}