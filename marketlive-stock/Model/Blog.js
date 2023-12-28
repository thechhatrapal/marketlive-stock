const mongoose =  require("mongoose")

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  isPublished : {
    type: Boolean,
    required: true
  }
});

const BlogSchema = mongoose.model("Blog", blogSchema);

module.exports =  BlogSchema
