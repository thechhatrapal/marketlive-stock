const express = require("express");
const router = express.Router();
const Blog = require("../Model/Blog");
const multer = require('multer');

router.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json({ blogs });
  } catch (error) {
    console.error('Error retrieving blogs:', error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/api/addblog", upload.single('image'), async (req, res) => {
  const { title, content, isPublished } = req.body;
  const { filename } = req.file;

  if (!title || !content || !filename || !isPublished) {
    res.status(500).json({ message: "Missing fields" });
    return;
  }

  const imageUrl = `http://localhost:5000/uploads/${filename}`;

  // Assuming you have a Blog model
  const blog = new Blog({
    title,
    content,
    imageUrl,
    isPublished,
  });

  try {
    await blog.save();
    res.status(200).json({ message: "Blog saved", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

;

router.delete("/api/:id", async (req, res) => {
  let blog;

  try {
    blog = await Blog.findByIdAndDelete(req.params.id);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  if (!blog) {
    return res.status(404).json({ message: "Blog Not Found" });
  }

  return res.status(200).json({ message: "Successfully Deleted" });
});

module.exports = router;
