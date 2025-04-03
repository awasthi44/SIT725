const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/CatDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
    });
const Project = mongoose.model('Project', ProjectSchema);

const sampleProject = new Project({
    title: "Kitten 4",
    image: "images/cat1.png",
    link: "About Kitten 4",
    description: "Demo description about kitten 4"
    });
    sampleProject.save().then(() => console.log("Sample project saved!"));

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
    });
    
    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
