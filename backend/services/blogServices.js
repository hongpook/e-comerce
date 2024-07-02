const { Blog } = require('../models/index');

class BlogService { 
  static async createBlog(data) {
    try {
      const blog = await Blog.create(data);
      return blog;
    } catch (error) {
      throw new Error('Error creating blog: ' + error.message);
    }
  }

  static async getAllBlogs() {
    try {
      const blogs = await Blog.findAll();
      return blogs;
    } catch (error) {
      throw new Error('Error fetching blogs: ' + error.message);
    }
  }

  static async getBlogById(id) {
    try {
      const blog = await Blog.findByPk(id);
      if (!blog) {
        throw new Error('Blog not found');
      }
      return blog;
    } catch (error) {
      throw new Error('Error fetching blog: ' + error.message);
    }
  }

  static async updateBlog(id, data) {
    try {
      const blog = await Blog.findByPk(id);
      if (!blog) {
        throw new Error('Blog not found');
      }
      await blog.update(data);
      return blog;
    } catch (error) {
      throw new Error('Error updating blog: ' + error.message);
    }
  }

  static async deleteBlog(id) {
    try {
      const blog = await Blog.findByPk(id);
      if (!blog) {
        throw new Error('Blog not found');
      }
      await blog.destroy();
      return blog;
    } catch (error) {
      throw new Error('Error deleting blog: ' + error.message);
    }
  }
}

module.exports = BlogService;
