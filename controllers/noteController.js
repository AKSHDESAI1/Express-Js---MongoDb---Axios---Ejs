const Notes = require("../model/noteSchema.js");

// Get All Notes
const getAllNotes = async (req, res) => {
    try {
        const data = await Notes.find();
        return res.json({ "status": "success", "message": data });
    } catch (error) {
        return res.json({ "status": "failed", "message": "Internal Server Error" });
    }
}

// Insert Notes
const insertNote = async (req, res) => {
    try {
        const data = req.body;
        if (data.title && data.desc) {
            // Put your Insert Logic Here

            const data = new Notes(req.body);
            const saved_data = await data.save();
            return res.json({ "status": "success", "message": "Successfully Created" })
        } else {
            return res.json({ "status": "failed", "message": "All Fields are Required" })
        }
    } catch (error) {
        return res.json({ "status": "failed", "message": "Internal Serever Error" })
    }
}

//  Update Note
const updateNote = async (req, res) => {
    try {
        const res1 = req.params;
        const note = await Notes.findOne({ "_id": res1.id });

        // update logic code 
        const data = await Notes.updateOne({ "_id": res1.id }, {
            $set: req.body
        })
        return res.json({ "status": "success", "message": data })
    } catch (error) {
        return res.json({ "status": "failed", "message": "Internal Server Error" });
    }
}

// Delete Note 
const deleteNote = async (req, res) => {
    try {
        const res1 = req.params;
        const note = await Notes.findOne({ "_id": res1.id });

        // Put your Delete Note Logic Here  
        const data = await Notes.deleteOne({ "_id": res1.id });
        return res.json({ "status": "Success", "message": "Deleted Successfully." })
    } catch (error) {
        return res.json({ "status": "failed", "message": "Internal Server Error" })
    }
};
module.exports = { getAllNotes, insertNote, updateNote, deleteNote }