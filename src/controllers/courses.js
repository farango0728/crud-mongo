const {
    mongo: { coursesModel },
  } = require('../../databases');

module.exports = {
    getAll: async (req, res) => {
        const courses = await coursesModel.find();
        res.json(courses);
    },
    createOne: async (req, res) =>{
        const { name } = req.body;
        const newCourse = new coursesModel({ name });
        await newCourse.save();
        res.send(`${name} saved`);
    },
    updateOne: async (req, res) =>{
        const { _id } = req.params;
        const { name } = req.body;
        await coursesModel.findByIdAndUpdate(
        _id,
        {
            $set: { name },
        },
        { useFindAndModify: false }
        );
        res.send(`${name} updated`);
    },
    deleteOne: async (req, res) =>{
        const { _id } = req.params;
        const removed = await coursesModel.findByIdAndDelete(_id);
        console.log(removed);
        res.send(`${removed.name} deleted from database`);
    }
}